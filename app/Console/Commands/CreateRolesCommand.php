<?php

namespace App\Console\Commands;

use Spatie\Permission\Models\Role;
use Illuminate\Console\Command;

class CreateRolesCommand extends Command
{
    protected $signature = 'create:roles';

    protected $description = 'Create admin and user roles';

    public function handle()
    {
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        $this->info('Roles created successfully.');
    }
}
