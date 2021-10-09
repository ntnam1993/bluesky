<?php

namespace App\Core;


use GrahamCampbell\Flysystem\Facades\Flysystem;

class MyStorage
{
    /**
     * Lấy ổ đĩa tương ứng để thao tác
     * @param $disk
     * @return \League\Flysystem\Filesystem
     */
    public static function getDisk($disk){
        return Flysystem::connection($disk);
    }

    /**
     * Lấy ổ đĩa mặc định để thao tác
     * @param $disk
     * @return \League\Flysystem\Filesystem
     */
    public static function getDefaultDisk(){
        return Flysystem::getDefaultConnection();
    }

    /**
     * Lấy đường dẫn ảnh tùy thuộc vào các disk khác nhau
     * @todo chú ý từng disk khác nhau cần được ỗ trợ để có thể hiển thị.
     * @param $disk
     * @param $path
     * @param $template
     * @return string
     */
    public static function getImage($disk, $path, $template = 'normal'){
        if(in_array($disk, ['public','local'])){
            return route('imagecache', ['template' => $template, 'filename' => self::pathToLink($path)]);
        }else{
            return self::get_default_image();
        }
    }

    public static function getImagePublic($disk,$path){
        if($disk == 'public'){
            return url('/media/'.$path);
        }
    }

    /**
     * Load ảnh cache
     * @param $disk
     * @param $path
     * @param $template
     * @return $path
     */
    public static function getThumbLinkAttribute($disk, $path, $template = 'normal', $flag = true,$avatar_refer_link = null){
        $default =   self::get_default_image();
        $image   =   ($path == "") ? $default : $path;
        try{

            $dir         = dirname($image);
            $file        = basename($image);
            $path_create = public_path('caches/'. $template . '/' . $dir);

            if(!\File::exists($path_create . '/' . $file)){
                if($flag){
                    \File::makeDirectory($path_create, $mode = 0777, true, true);
                }
                $cache   = $path_create . '/' . $file;
                $tmp     = config('imagecache.templates.'.$template);
                \Image::make(MyStorage::getDisk($disk)->readStream($image))->filter(new $tmp)->save($cache);
            }

            return '/caches/' . $template . '/' . self::pathToLink($path);
        } catch (\Exception $ex){
            return $avatar_refer_link != null ? $avatar_refer_link : $default;
        }
    }

    /**
     * Get default image for specific goal
     * @param string $template
     * @param string $image
     * @return string
     */
    public static function get_default_image(){
        return url('images/no-image.jpg');
    }

    public static function pathToLink($path){
        return str_replace('\\', '/', $path);
    }
}
?>