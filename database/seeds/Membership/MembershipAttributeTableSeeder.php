<?php

use Illuminate\Database\Seeder;

class MembershipAttributeTableSeeder extends Seeder
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

        $attributes =  [
            'No Sales Tax Warehouse',
            'Consolidation'
        ];

        foreach ($attributes as $attribute){
            $all_member =  App\Models\Membership\Membership::all();
            foreach ($all_member as $member){
                if ($member->id == 1){
                    $status = 0;
                } else {
                    $status = 1;
                }

                $member->create([
                    'name'   => $attribute,
                    'status' => $status
                ]);
            }
        }

        $this->enableForeignKeys();
    }
}
