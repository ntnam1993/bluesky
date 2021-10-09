<?php

namespace App\Models\Auth\Traits\Method;
use App\Models\Membership\Membership;
use App\Models\Membership\UserMembership;

/**
 * Trait UserMethod.
 */
trait UserMethod
{
    /**
     * @return mixed
     */
    public function canChangeEmail()
    {
        return config('access.users.change_email');
    }

    /**
     * @return bool
     */
    public function canChangePassword()
    {
        return ! app('session')->has(config('access.socialite_session_name'));
    }

    /**
     * @param bool $size
     *
     * @throws \Illuminate\Container\EntryNotFoundException
     * @return bool|\Illuminate\Contracts\Routing\UrlGenerator|mixed|string
     */
    public function getPicture($size = false)
    {
        switch ($this->avatar_type) {
            case 'gravatar':
                if (! $size) {
                    $size = config('gravatar.default.size');
                }

                return gravatar()->get($this->email, ['size' => $size]);

            case 'storage':
                return url('storage/'.$this->avatar_location);
        }

        $social_avatar = $this->providers()->where('provider', $this->avatar_type)->first();

        if ($social_avatar && strlen($social_avatar->avatar)) {
            return $social_avatar->avatar;
        }

        return false;
    }

    /**
     * @param $provider
     *
     * @return bool
     */
    public function hasProvider($provider)
    {
        foreach ($this->providers as $p) {
            if ($p->provider == $provider) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return mixed
     */
    public function isAdmin()
    {
        return $this->hasRole(config('access.users.admin_role'));
    }

    /**
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * @return bool
     */
    public function isConfirmed()
    {
        return $this->confirmed;
    }

    /**
     * @return bool
     */
    public function isPending()
    {
        return config('access.users.requires_approval') && ! $this->confirmed;
    }

    /**
     * @return bool
     */
    public function canUpgradeMembership()
    {
        $user_member      =  UserMembership::where('user_id',$this->id)->latest('id')->first();
        if ($user_member){
            $last_member  =  Membership::latest('id')->first();
            if ($last_member){
                if ($user_member->membership_id == $last_member->id){
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    /**
     * @return bool
     */
    public function primaryAmount($format = 'int', $append = '')
    {
        if($format == 'int')
            return $this->primary_wallet;
        if($format == 'view'){
            return number_format($this->primary_wallet, 0, '.', ',') . $append;
        }
    }

    public function primaryIncome($amount)
    {
        $new_value = $this->primary_wallet + $amount;
        $this->increment('primary_wallet', $amount);
        return $new_value;
    }

    public function primaryOutcome($amount)
    {
        $new_value = $this->primary_wallet - $amount;
        $this->decrement('primary_wallet', $amount);
        return $new_value;
    }

    public function secondaryAmount($format = 'int', $append = '')
    {
        if($format == 'int')
            return $this->secondary_wallet;
        if($format == 'view'){
            return number_format($this->secondary_wallet, 0, '.', ',') . $append;
        }
    }

    public function secondaryIncome($amount)
    {
        $new_value = $this->secondary_wallet + $amount;
        $this->increment('secondary_wallet', $amount);
        return $new_value;
    }

    public function secondaryOutcome($amount)
    {
        $new_value = $this->secondary_wallet - $amount;
        $this->decrement('secondary_wallet', $amount);
        return $new_value;
    }
}
