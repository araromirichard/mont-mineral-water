<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up()
    {
        // Check if slug column exists and drop it safely
        if (Schema::hasColumn('products', 'slug')) {
            // Check if unique constraint exists before dropping
            $indexes = DB::select("SHOW INDEX FROM products WHERE Column_name = 'slug'");
            
            Schema::table('products', function (Blueprint $table) use ($indexes) {
                if (!empty($indexes)) {
                    // Find the actual index name
                    foreach ($indexes as $index) {
                        if ($index->Non_unique == 0) { // Unique index
                            $table->dropUnique([$index->Key_name]);
                            break;
                        }
                    }
                }
                $table->dropColumn('slug');
            });
        }

        // Add slug column
        Schema::table('products', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('name');
        });

        // Generate unique slugs for existing products
        $products = Product::all();
        foreach ($products as $product) {
            $baseSlug = Str::slug($product->name);
            $slug = $baseSlug;
            $counter = 1;

            while (Product::where('slug', $slug)->where('id', '!=', $product->id)->exists()) {
                $slug = $baseSlug . '-' . $counter;
                $counter++;
            }

            $product->update(['slug' => $slug]);
        }

        // Make slug unique and not nullable
        Schema::table('products', function (Blueprint $table) {
            $table->string('slug')->nullable(false)->unique()->change();
        });
    }

    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'slug')) {
                $table->dropUnique(['slug']);
                $table->dropColumn('slug');
            }
        });
    }
};
