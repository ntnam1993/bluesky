<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/15/20
 * Time: 7:04 AM
 */

namespace App\Repositories\Backend\Transaction;


use App\Models\Transaction\Transaction;
use App\Repositories\BaseRepository;

class TransactionRepository extends BaseRepository
{
    protected $page_size;
    /**
     * PackageRepository constructor.
     *
     * @param  Transaction  $model
     */
    public function __construct(Transaction $model)
    {
        $this->model     = $model;
        $this->page_size = 25;
    }

    public function getForDataTable($filter,$option = [])
    {
        return $this->filter($filter,$option);
    }

    public function filter($filter,$option = [])
    {
        $model = $this->model->select('transactions.*')
            ->leftJoin('transaction_items', 'transactions.id', '=', 'transaction_items.transaction_id');

        if(!empty($filter)){
            $model = addFilter($model,$filter);
        }

        //Các cấu hình tùy chỉnh
        if (!empty($option)){

            $page_size = \Arr::get($option,'page_size');
            $order_by  = \Arr::get($option,'sort');
            $limit     = \Arr::get($option,'limit');
            $builder   = \Arr::get($option,'builder');

            //Kiểm tra xem có cần sx không
            if(!empty($order_by)){

            }

            //Kiểm tra xem nếu cần trả về builder thì ko cần gọi hàm get hoặc paginate
            if($builder == true){
                return $model;
            }

            //Giới hạn bản ghi
            if ($limit > 0){
                return $model->take($limit)->get();
            }

            //Phân trang
            if ($page_size > 0){
                return $model->paginate($page_size);
            }
        }

        return $model->orderBy('transactions.id','DESC')->paginate($this->page_size);
    }
}