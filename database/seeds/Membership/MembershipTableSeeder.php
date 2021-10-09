<?php

use Illuminate\Database\Seeder;
use \App\Models\Membership\Membership;

class MembershipTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->disableForeignKeys();

        Membership::truncate();

        Membership::create([
            'name'           => 'Free',
            'number_of_day'  => 10,
            'price'          => 0
        ]);

        Membership::create([
            'name'           => 'Premium',
            'number_of_day'  => 30,
            'price'          => 10
        ]);

        Membership::create([
            'name'           => 'Premium',
            'number_of_day'  => 365,
            'price'          => 50
        ]);

        $this->enableForeignKeys();
    }
}
