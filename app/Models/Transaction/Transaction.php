<?php

namespace App\Models\Transaction;

use Altek\Accountant\Contracts\Recordable;
use Altek\Accountant\Recordable as RecordableTrait;
use App\Models\Transaction\Traits\Method\TransactionMethod;
use App\Models\Transaction\Traits\Relationship\TransactionRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model implements Recordable
{
    use SoftDeletes,
        TransactionRelationship,
        TransactionMethod,
        RecordableTrait;

    const PENDING_TRANSACTION  = 0;
    const APPROVED_TRANSACTION = 1;
    const REVERTED_TRANSACTION = 2; //Hoàn trả
    const REJECTED_TRANSACTION = 3; //Từ chối
    public static $transaction_status = [
        'Chờ xử lý',
        'Hoàn thành',
        'Hoàn trả',
        'Hủy'
    ];

    //Transaction types
    const RECHARGE_TRANSACTION = 1; //Nạp tiền
    const EXCHANGE_TRANSACTION = 2; //Chuyển tiền
    const BUY_TRANSACTION      = 3; //Mua
    const OTHER_TRANSACTION    = 0; //Khác
    public static $transaction_types = [
        'Loại khác',
        'Nạp tiền',
        'Chuyển tiền',
        'Mua'
    ];

    protected $table    = 'transactions';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}
