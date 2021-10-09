<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/16/20
 * Time: 9:15 PM
 */

namespace App\Core\Transaction;


use App\Models\Membership\Membership;
use App\Models\Transaction\Transaction;
use Carbon\Carbon;

class TransactionManager
{
    public function addDeposit(WalletContract $walletContract, $option = [])
    {
        $transaction = Transaction::create([
            'code'      => Carbon::now()->format('Ymd'),
            'user_id'   => $walletContract->id,
            'type'      => Transaction::RECHARGE_TRANSACTION,
            'amount'    => \Arr::get($option,'amount'),
            'note'      => \Arr::get($option,'note'),
            'payment_method_id' => \Arr::get($option,'payment_method_id')
        ]);

        if ($transaction){

            $transaction->transaction_items()->create([
                'status'    => 1,
                'quantity'  => 1,
                'amount'    => \Arr::get($option,'amount')
            ]);

            //Cộng ($) vào tk chính của user nếu giao dịch thành công
            if ($transaction->status == Transaction::APPROVED_TRANSACTION){
                $walletContract->primaryIncome(\Arr::get($option,'amount'));
            }

            return $transaction;
        } else {
            return false;
        }
    }

    public function buyMembership(WalletContract $walletContract, $option = [])
    {
        $transaction = Transaction::create([
            'code'      => Carbon::now()->format('Ymd'),
            'user_id'   => $walletContract->id,
            'type'      => Transaction::BUY_TRANSACTION,
            'amount'    => \Arr::get($option,'amount'),
            'note'      => \Arr::get($option,'note'),
            'payment_method_id' => \Arr::get($option,'payment_method_id')
        ]);

        if ($transaction){

            $transaction->transaction_items()->create([
                'status'    => 1,
                'quantity'  => 1,
                'amount'    => \Arr::get($option,'amount'),
                'item_id'   => \Arr::get($option,'item_id'),
                'item_type' => Membership::class
            ]);

            return $transaction;
        } else {
            return false;
        }
    }
}