<?php

if (! function_exists('app_name')) {
    /**
     * Helper to grab the application name.
     *
     * @return mixed
     */
    function app_name()
    {
        return config('app.name');
    }
}

if (! function_exists('gravatar')) {
    /**
     * Access the gravatar helper.
     */
    function gravatar()
    {
        return app('gravatar');
    }
}

if (! function_exists('home_route')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization status.
     *
     * @return string
     */
    function home_route()
    {
        if (auth()->check()) {
            if (auth()->user()->can('view backend')) {
                return 'admin.dashboard';
            }

            return 'frontend.user.dashboard';
        }

        return 'frontend.index';
    }
}

if(!function_exists('addFilter')){
    /**
     * @param : Model $model
     * @param : Array $filter
     * @return  object Model
     ***/
    function addFilter($model,$filter = [])
    {
        if (!empty($filter)){
            foreach ($filter as $key => $value) {
                if ($value == ''){
                    unset($filter[$key]);
                }

                //Trường hợp nếu param truyền vào dạng ['column' => ['operator'=>'>','value'=> 1]]
                if(is_array($value)){
                    $op     = \Arr::get($value, 'operator');
                    $val    = \Arr::get($value, 'value');
                    $column = $key;
                    if($op == 'IN') {
                        $model = $model->whereIn($column, $val);
                    }else if($op == 'NOT IN'){
                        $model = $model->whereNotIn($column, $val);
                    } elseif ($op == 'BETWEEN') {
                        $model = $model->whereBetween($column, $val);
                    } elseif ($op == 'NOT BETWEEN') {
                        $model = $model->whereNotBetween($column, $val);
                    } elseif ($op == 'OR') {
                        $model = $model->orWhere($column, $val);
                    } elseif ($op == 'OR-AND') {
                        $attributes = $val;
                        $model->where(function ($model) use ($attributes) {
                            foreach ($attributes as $key => $value){
                                $model->orWhere($key,$value);
                            }
                            return $model;
                        });
                    } elseif ($op == 'OR-BETWEEN') {
                        $model = $model->orWhereBetween($column, $val);
                    } elseif ($op == 'RAW') {
                        //voi whereRaw chi lay value
                        $model = $model->whereRaw($val);
                    } else {
                        $model = $model->where($column, $op, $val);
                    }
                } else {
                    //Trường hợp truyền vào simple ['column'=>'value']
                    $model = $model->where($key, $value);
                }
            }
        }

        return $model;
    }
}

if (!function_exists('convertDateRange')) {
    /**
     * Convert Time from query string
     *
     * @param  string $date_range (20/10/2016 - 20/10/2017)
     * @param $format
     * @return [$startTime,$endTime]
     */
    function convertDateRange($date_range,$format = 'd/m/Y'){
        $range       = explode('-',$date_range);
        if(isset($range[0]) && isset($range[1])){
            if ($format == 'timestamp')
            {
                $startDate   = Carbon\Carbon::createFromFormat('d/m/Y', trim($range[0]))->startOfDay()->timestamp;
                $endDate     = Carbon\Carbon::createFromFormat('d/m/Y', trim($range[1]))->endOfDay()->timestamp;
            }
            else
            {
                $startDate   = Carbon\Carbon::createFromFormat($format, trim($range[0]))->startOfDay()->toDateTimeString();
                $endDate     = Carbon\Carbon::createFromFormat($format, trim($range[1]))->endOfDay()->toDateTimeString();
            }
            return [$startDate,$endDate];
        } else {
            return [];
        }
    }
}

if (! function_exists('array_add_dot')) {

    /**
     * Có thêm tùy chọn có giữ key (abc.dce)
     * Phục vụ tạo filter join cần dạng (table.column)
     */
    function array_add_dot($array, $key, $value, $dot = false){

        if (is_null(\Illuminate\Support\Arr::get($array, $key))) {

            if (is_null($key)) {
                return $array = $value;
            }

            if($dot){
                $keys = explode('.', $key);
            } else {
                $keys = [$key];
            }

            while (count($keys) > 1) {
                $key = array_shift($keys);

                // If the key doesn't exist at this depth, we will just create an empty array
                // to hold the next value, allowing us to create the arrays to hold final
                // values at the correct depth. Then we'll keep digging into the array.
                if (! isset($array[$key]) || ! is_array($array[$key])) {
                    $array[$key] = [];
                }

                $array = &$array[$key];
            }

            $array[array_shift($keys)] = $value;

            return $array;
        }

        return $array;

    }
}