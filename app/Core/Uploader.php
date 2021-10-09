<?php
namespace App\Core;

use Intervention\Image\Facades\Image;

class Uploader {

    public static function upload($disk,$file,$dirpath)
    {
        $fileName   =  md5(microtime() . '_imagecache');
        $extention  =  $file->getClientOriginalExtension();
        $path       =  $dirpath.'/'.$fileName . '.' . $extention;
        return self::uploadImageToStorage($disk,$path,$file);
    }

    public static function uploadFile($disk,$file,$dirpath){
        $fileName   =  md5(microtime() . '_imagecache');
        $extention  =  $file->getClientOriginalExtension();
        $path       =  $dirpath.'/'.$fileName . '.' . $extention;
        return self::uploadFileToStorage($disk,$path,$file);
    }

    public static function uploadFileOrigin($disk,$file,$dirpath){

        $fileName  =  $file->getClientOriginalName();
        $path       =  $dirpath.'/'.$fileName;
        $inputDisk  =   MyStorage::getDisk($disk);
        if($inputDisk->has($path)){
            $inputDisk->delete($path);
            $inputDisk->writeStream($path,fopen($file->getRealPath(),'rb'));
        }else{
            $inputDisk->writeStream($path,fopen($file->getRealPath(),'rb'));
        }
        return $path;
    }

    public static function getFileFromStorage($disk,$path)
    {
        $inputDisk  =   MyStorage::getDisk($disk);
        $file = $inputDisk->get($path);
        return $file;
    }

    public static function uploadFromUrl($disk, $url, $dirpath)
    {
        $fileName   =   md5(microtime() . '_imagecache');
        $extention  =   pathinfo($url, PATHINFO_EXTENSION);
        $image      =   Image::make($url);
        $path       =   $dirpath.'/'.$fileName . '.' . $extention;
        return self::uploadImageToStorage($disk,$path,$image);
    }
    
    public  static function uploadFromBase64($disk, $base64, $dirpath)
    {
        $fileName   =   md5(microtime() . '_imagecache');
        $imgbase64  =   substr($base64, strpos($base64, ",")+1);
        $type       =   substr($base64, 11, strpos($base64, ';')-11);
        $data       =   base64_decode($imgbase64);
        $image      =   imagecreatefromstring($data);
        $path       =   $dirpath.'/'.$fileName.'.'.$type;
        return self::uploadImageToStorage($disk,$path,$image);
    }
    
    public static function delete($disk,$path){
        return self::deleteToStorage($disk,$path);
    }

    private static function uploadImageToStorage($disk,$path,$file)
    {
        $inputDisk  =   MyStorage::getDisk($disk);
        $inputDisk->writeStream($path,
            Image::make($file)->resize(1600, 1200, function ($constraint) {
                    $constraint->aspectRatio();
                })->stream()->detach());
        return $path;
    }

    private static function uploadFileToStorage($disk,$path,$file)
    {
        $inputDisk  =   MyStorage::getDisk($disk);
        $inputDisk->writeStream($path, fopen($file->getRealPath(), 'rb'));
        return $path;
    }

    private static function deleteToStorage($disk,$path)
    {
        $old_disk = MyStorage::getDisk($disk);
        if($old_disk && $path != '' && $old_disk->has($path)){
            $old_disk->delete($path);
        }
        return true;
    }
}
?>