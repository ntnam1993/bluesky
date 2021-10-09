<?php
/**
 * Created by PhpStorm.
 * User: thaon
 * Date: 5/19/2017
 * Time: 4:03 PM
 */

namespace App\Core;


use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;

class SeoInfo
{
    protected $title;
    protected $description;
    protected $my_url;
    protected $image;

    public function setTitle($title)
    {
        return $this->title = $title;
    }

    public function getTitle()
    {
        if($this->title != ''){
            return $this->title;
        } else {
            return config('seotools.title.defaults.title');
        }
    }

    public function setDescription($description)
    {
        return $this->description = $description;
    }

    public function getDescription()
    {
        if($this->description != ''){
            return $this->description;
        } else {
            return config('seotools.meta.defaults.description');
        }
    }

    public function setUrl($url)
    {
        return $this->my_url = $url;
    }

    public function getUrl()
    {
        if($this->my_url != ''){
            return $this->my_url;
        } else {
            return 'https://giaydantuongthanglong.com';
        }
    }

    public function setImage($image = '')
    {
        return $this->image = $image;
    }

    public function getImage()
    {
        if($this->image != ''){
            return $this->image;
        } else {
            return config('seotools.meta.defaults.image');
        }
    }

    public function seoGenerate()
    {
        $title       = $this->getTitle();
        $description = $this->getDescription();
        $my_url      = $this->getUrl();
        $image       = $this->getImage();

        SEOMeta::setTitle($title);
        SEOMeta::setDescription($description);
        SEOMeta::setCanonical($my_url);

        OpenGraph::setTitle($title);
        OpenGraph::setDescription($description);
        OpenGraph::setUrl($my_url);
        OpenGraph::setType('website');
        OpenGraph::addProperty('site_name', 'giaydantuongthanglong.com | Giấy dán tường Thăng Long - Giá rẻ nhất Hà Nội');
        OpenGraph::addImage($image);
    }
}