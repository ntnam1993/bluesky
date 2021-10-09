@extends('backend.layouts.app')

@section('title', __('labels.backend.transaction.management.main') . ' | ' . __('labels.backend.transaction.create'))

@section('content')
    {{ html()->form('POST', route('admin.transaction.store'))->class('form-horizontal')->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.transaction.management.main')
                        <small class="text-muted">@lang('labels.backend.transaction.create')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->

            <hr>

            <div class="row mt-4">
                <div class="col">

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.method').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('payment_method_id') }}

                        <div class="col-md-10">
                            <div class="form-check form-check-inline">
                                <input onclick="ChoosePaymentMethod(this)" class="form-check-input" checked type="radio" name="payment_method_id" id="paypal" value="1">
                                <label class="form-check-label" for="paypal">
                                    Paypal
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input onclick="ChoosePaymentMethod(this)" class="form-check-input" type="radio" name="payment_method_id" id="payoneer" value="2">
                                <label class="form-check-label" for="payoneer">
                                    Payoneer
                                </label>
                            </div>
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.amount'))
                            ->class('col-md-2 form-control-label')
                            ->for('amount') }}

                        <div class="col-md-10">
                            {{ html()->text('amount')
                                ->value(old('amount'))
                                ->class('form-control')
                                ->placeholder(0)
                                }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row res_transaction_id hide">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.res_transaction_id'))
                            ->class('col-md-2 form-control-label')
                            ->for('res_transaction_id') }}

                        <div class="col-md-10">
                            {{ html()->text('res_transaction_id')
                                ->value(old('res_transaction_id'))
                                ->class('form-control')
                                ->placeholder('Transaction ID')
                                }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.note'))
                            ->class('col-md-2 form-control-label')
                            ->for('note') }}

                        <div class="col-md-10">
                            {{ html()->textarea('note')
                                ->value(old('note'))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.note'))
                                }}
                        </div><!--col-->
                    </div><!--form-group-->

                </div><!--col-->
            </div><!--row-->
        </div><!--card-body-->

        <div class="card-footer">
            <div class="row">
                <div class="col text-center">
                    {{ form_submit(__('buttons.backend.transaction.proceed'),'btn btn-success btn-lg') }}
                </div><!--col-->
            </div><!--row-->
        </div><!--card-footer-->
    </div><!--card-->
    {{ html()->form()->close() }}
@endsection
