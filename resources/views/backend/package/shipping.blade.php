@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.select_carrier'))

@section('content')
    {{ html()->form('POST', route('admin.'.$module.'.mail_out.confirm',[$package,$mail_out]))->class('form-horizontal')->attribute('name','confirm_item')->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.select_carrier')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->

            <hr>

            <div class="row mt-4">
                <div class="col-md-6 col-sm-12">
                    <address>
                        <h3>Selected address</h3>
                        <div class="address">
                            <b>{{ $customer->name }}</b><br>
                            {{ $customer->first_name }} {{ $customer->last_name }}<br>
                            {{ $customer->address_1 }}<br><br>
                            {{ $customer->city }} {{ $customer->zip_code }}<br>
                            @if($customer->state)
                                <span>{{ $customer->state->name }},</span>
                            @endif
                            @if($customer->country)
                                {{ $customer->country->name }}
                            @endif
                        </div>
                    </address>

                </div><!--col-->
                <div class="col-md-6 col-sm-12">
                    <address>
                        <h3>Package Detail</h3>
                        <p>
                            <b>Weight:</b> {{ $mail_out->weight }}<br>
                            <b>length:</b> {{ $mail_out->length }}<br>
                            <b>Width:</b> {{ $mail_out->width }}<br>
                            <b>Height:</b> {{ $mail_out->height }}<br>
                            <b>Value:</b> {{ $mail_out->declarations->sum('price') }}<br>
                            <b>Quantity:</b> {{ $mail_out->declarations->sum('quantity') }}<br>
                        </p>
                    </address>
                </div>
            </div><!--row-->
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <tr class="table-info">
                                <th>Item</th>
                                <th class="text-right">Cost</th>
                            </tr>
                            <tr>
                                <td>
                                    <b>Additional services</b>
                                </td>
                                <td class="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Shipping information</b>
                                </td>
                                <td class="text-right"></td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Total shipping price</b>
                                </td>
                                <td class="text-right">0</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Total request price</b>
                                </td>
                                <td class="text-right">0</td>
                            </tr>
                            <tr>
                                <td>
                                    <b class="text-success">Total sum</b>
                                </td>
                                <td class="text-right">0</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div><!--card-body-->

        <div class="card-footer">
            <div class="row">
                <div class="col">
                    {{ html()->hidden('customer_id')->value($customer->id) }}
                    <button type="submit"
                            name="confirm"
                            data-trans-button-cancel="@lang('buttons.general.cancel')"
                            data-trans-button-confirm="@lang('buttons.general.confirm')"
                            data-trans-title="@lang('strings.backend.general.are_you_sure')"
                            data-trans-text=""
                            class="btn btn-success">
                        <i class="fa fa-check" aria-hidden="true"></i> {{ __('buttons.backend.package.confirm') }}
                    </button>
                    {{ form_cancel(route('admin.'.$module.'.mail_out',$package), __('buttons.general.cancel'), 'btn btn-danger') }}
                </div><!--col-->
            </div><!--row-->
        </div><!--card-footer-->
    </div><!--card-->
    {{ html()->form()->close() }}
@endsection
