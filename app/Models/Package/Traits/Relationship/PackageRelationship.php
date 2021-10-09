<?php

namespace App\Models\Package\Traits\Relationship;
use App\Models\Carrier;
use App\Models\File;
use App\Models\MailOut\MailOut;
use App\Models\Package\Note;
use App\Models\Photo;
use App\Models\SpecialRequest;
use App\Models\Warehouse;

/**
 * Class UserRelationship.
 */
trait PackageRelationship
{
    /**
     * @return mixed
     */
    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class,'warehouse_id');
    }

    /**
     * @return mixed
     */
    public function photos()
    {
        return $this->hasMany(Photo::class,'item_id')->where('item_type',get_class($this))->where('item_id',$this->id);
    }

    /**
     * @return mixed
     */
    public function files()
    {
        return $this->hasMany(File::class,'item_id')->where('item_type',get_class($this))->where('item_id',$this->id);
    }

    /**
     * @return mixed
     */
    public function carriers()
    {
        return $this->hasMany(Carrier::class,'item_id')->where('item_type',get_class($this))->where('item_id',$this->id);
    }

    /**
     * @return mixed
     */
    public function notes()
    {
        return $this->hasMany(Note::class,'item_id')->where('item_type',get_class($this))->where('item_id',$this->id)->orderBy('id','DESC');
    }

    /**
     * @return mixed
     */
    public function requests()
    {
        return $this->hasMany(SpecialRequest::class,'item_id')->where('item_type',get_class($this))->where('item_id',$this->id)->orderBy('id','DESC');
    }

    /**
     * @return mixed
     */
    public function childrens()
    {
        return $this->hasMany(get_class($this), 'parent_id')->orderBy('id','DESC');
    }

    /**
     * @return mixed
     */
    public function mail_outs()
    {
        return $this->hasMany(MailOut::class, 'package_id')->orderBy('id','DESC');
    }

}
