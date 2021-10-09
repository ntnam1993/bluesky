<?php

use Illuminate\Database\Seeder;
use \App\Models\Transaction\PaymentMethod;

class PaymentMethodTableSeeder extends Seeder
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

        PaymentMethod::truncate();

        PaymentMethod::create([
            'name'  => 'paypal',
            'icon'  => '<i class="fab fa-cc-paypal"></i>',
            'class' => 'paypal',
            'logo_url' => 'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg'
        ]);

        PaymentMethod::create([
            'name'  => 'payoneer',
            'icon'  => '',
            'class' => 'payoneer',
            'logo_url' => 'https://www.payoneer.com/vi/wp-content/uploads/sites/18/2015/04/logo.png'
        ]);

        $this->enableForeignKeys();
    }
}
