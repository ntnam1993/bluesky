@extends('backend.layouts.app')

@section('title', __('labels.backend.transaction.management.main') . ' | ' . __('labels.backend.transaction.create'))

@section('content')
    {{ html()->form('POST', route('admin.transaction.membership.store'))->class('form-horizontal')->open() }}
        <table class="table table-bordered bg-white">
            <tr>
                <td></td>
                <td>
                    <p class="m-0">Free Mail Box</p>
                    <p class="m-0">Free</p>
                </td>
                <td>
                    <p class="m-0">Premium Mail Box</p>
                    <p class="m-0">
                        <span>
                            <b>$10</b>
                            <small>/per month</small>
                        </span>
                        <span>
                            <b>$50</b>
                            <small>/per year</small>
                        </span>
                    </p>
                </td>
            </tr>
            <tr>
                <td>Storage</td>
                <td>10 days</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    No Sales Tax Warehouse:
                </td>
                <td><i class="fas fa-times"></i></td>
                <td><i class="fas fa-check"></i></td>
            </tr>
            <tr>
                <td>
                    Consolidation
                </td>
                <td><i class="fas fa-times"></i></td>
                <td><i class="fas fa-check"></i></td>
            </tr>
        </table>

        <div class="form-group">
            {{ html()->label(__('labels.backend.membership.upgrade.period'))
                ->class('form-control-label')
                ->for('period') }}
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" checked type="radio" name="item_id" id="premium_30" value="2">
                    <label class="form-check-label" for="premium_30">
                        30 days <span class="text-info">price $10</span>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="item_id" id="premium_365" value="3">
                    <label class="form-check-label" for="premium_365">
                        365 days <span class="text-info">price $50</span>
                    </label>
                </div>
            </div>
        </div><!--form-group-->

        <div class="form-group">
            {{ html()->label(__('labels.backend.membership.upgrade.method'))
                ->class('form-control-label')
                ->for('method') }}

            <div class="">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" checked type="radio" name="method_id" id="paypal" value="1">
                    <label class="form-check-label" for="paypal">
                        Paypal
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="method_id" id="deposit" value="0">
                    <label class="form-check-label" for="deposit">
                        Deposit
                    </label>
                </div>
            </div>
        </div><!--form-group-->

        {{ form_submit(__('buttons.general.confirm'),'btn btn-primary') }}

    {{ html()->form()->close() }}
@endsection