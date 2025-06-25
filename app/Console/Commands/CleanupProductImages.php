<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CleanupProductImages extends Command
{
    protected $signature = 'products:cleanup-images {--dry-run : Show what would be deleted without actually deleting}';
    protected $description = 'Clean up orphaned product images from storage';

    public function handle()
    {
        $dryRun = $this->option('dry-run');
        
        $this->info('Starting product images cleanup...');
        
        if ($dryRun) {
            $this->warn('DRY RUN MODE - No files will be deleted');
        }
        
        // Get all files in storage
        $storageFiles = Storage::disk('public')->files('products');
        $this->info('Found ' . count($storageFiles) . ' files in storage');
        
        // Get all image paths from database
        $dbImagePaths = ProductImage::pluck('image_path')->toArray();
        $this->info('Found ' . count($dbImagePaths) . ' image records in database');
        
        $orphanedFiles = [];
        $validFiles = [];
        
        foreach ($storageFiles as $file) {
            // Remove 'public/' prefix if present for comparison
            $cleanPath = str_replace('public/', '', $file);
            
            if (in_array($cleanPath, $dbImagePaths)) {
                $validFiles[] = $file;
            } else {
                $orphanedFiles[] = $file;
            }
        }
        
        $this->info('Valid files: ' . count($validFiles));
        $this->warn('Orphaned files: ' . count($orphanedFiles));
        
        if (!empty($orphanedFiles)) {
            $this->table(['Orphaned Files'], array_map(function($file) {
                return [$file];
            }, $orphanedFiles));
            
            if (!$dryRun) {
                if ($this->confirm('Do you want to delete these orphaned files?')) {
                    foreach ($orphanedFiles as $file) {
                        Storage::disk('public')->delete($file);
                        $this->line('Deleted: ' . $file);
                    }
                    $this->info('Cleanup completed! Deleted ' . count($orphanedFiles) . ' orphaned files.');
                } else {
                    $this->info('Cleanup cancelled.');
                }
            }
        } else {
            $this->info('No orphaned files found. Storage is clean!');
        }
        
        // Check for missing files (files in DB but not in storage)
        $missingFiles = [];
        foreach ($dbImagePaths as $dbPath) {
            $found = false;
            foreach ($storageFiles as $storageFile) {
                $cleanStoragePath = str_replace('public/', '', $storageFile);
                if ($cleanStoragePath === $dbPath) {
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                $missingFiles[] = $dbPath;
            }
        }
        
        if (!empty($missingFiles)) {
            $this->warn('Found ' . count($missingFiles) . ' database records with missing files:');
            $this->table(['Missing Files'], array_map(function($file) {
                return [$file];
            }, $missingFiles));
            
            if (!$dryRun && $this->confirm('Do you want to remove these database records?')) {
                foreach ($missingFiles as $missingFile) {
                    ProductImage::where('image_path', $missingFile)->delete();
                    $this->line('Removed DB record: ' . $missingFile);
                }
                $this->info('Removed ' . count($missingFiles) . ' orphaned database records.');
            }
        }
        
        return 0;
    }
}
