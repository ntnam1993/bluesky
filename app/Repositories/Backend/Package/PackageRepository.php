<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/26/20
 * Time: 9:36 PM
 */

namespace App\Repositories\Backend\Package;


use App\Models\Package\Package;
use App\Repositories\BaseRepository;

class PackageRepository extends BaseRepository
{
    protected $page_size;
    /**
     * PackageRepository constructor.
     *
     * @param  Package  $model
     */
    public function __construct(Package $model)
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
        $model = $this->model->select('packages.*')
            ->leftJoin('mail_outs', 'packages.id', '=', 'mail_outs.package_id');

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

        return $model->orderBy('packages.id','DESC')->paginate($this->page_size);
    }

    public function countPackageWithStatus($filter,$option = [])
    {
        $model = $this->model->select(

            \DB::raw('count(*) AS all_package'),

            \DB::raw('SUM(CASE
                WHEN packages.status = 0 THEN 1
                ELSE 0
                END) AS count_new'),

            \DB::raw('SUM(CASE
                WHEN packages.status = 2 THEN 1
                ELSE 0
                END) AS count_error'),

            \DB::raw('SUM(CASE
                WHEN packages.status = 4 THEN 1
                ELSE 0
                END) AS count_expected')

        );

        $model->leftJoin('mail_outs', 'packages.id', '=', 'mail_outs.package_id');

        if(!empty($filter)){
            $model = addFilter($model,$filter);
        }

        return $model->first();
    }

    public function countPackageMailOutWithStatus($filter,$option = [])
    {
        $model = $this->model->select(

            \DB::raw('SUM(CASE
                WHEN mail_outs.status = 0 THEN 1
                ELSE 0
                END) AS count_new'),

            \DB::raw('SUM(CASE
                WHEN mail_outs.status = 1 THEN 1
                ELSE 0
                END) AS count_sent'),

            \DB::raw('SUM(CASE
                WHEN mail_outs.status = 2 THEN 1
                ELSE 0
                END) AS count_processing')

        );

        $model->leftJoin('mail_outs', 'packages.id', '=', 'mail_outs.package_id');

        if(!empty($filter)){
            $model = addFilter($model,$filter);
        }

        return $model->first();
    }
}