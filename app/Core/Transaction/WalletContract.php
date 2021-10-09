<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/16/20
 * Time: 10:29 PM
 */

namespace App\Core\Transaction;


interface WalletContract
{
    public function primaryAmount($format = 'int', $append = '');
    public function primaryIncome($amount);
    public function primaryOutcome($amount);
    public function secondaryAmount($format = 'int', $append = '');
    public function secondaryIncome($amount);
    public function secondaryOutcome($amount);
}