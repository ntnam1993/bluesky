@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.select_address'))

@section('content')

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.edit')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->

            <hr />

            <div class="row mt-4">
                <div class="col-md-7">
                    {{ html()->modelForm($customer, 'PATCH', route('admin.'.$module.'.update', $customer))->class('form-horizontal')->open() }}
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.customer.name').'(<span class="text-danger">*</span>)')
                            ->class('form-control-label')
                            ->for('name') }}

                        {{ html()->text('name')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.customer.name'))
                                ->required() }}
                    </div><!--form-group-->

                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.customer.company_name'))
                            ->class('form-control-label')
                            ->for('company_name') }}

                        {{ html()->text('company_name')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.customer.company_name'))
                                }}
                    </div><!--form-group-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.customer.first_name'))
                                    ->class('form-control-label')
                                    ->for('first_name') }}

                                {{ html()->text('first_name')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customer.first_name'))
                                        }}
                            </div><!--form-group-->
                        </div>
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.customer.last_name'))
                                    ->class('form-control-label')
                                    ->for('last_name') }}

                                {{ html()->text('last_name')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customer.last_name'))
                                        }}
                            </div><!--form-group-->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.customer.country').'(<span class="text-danger">*</span>)')
                                    ->class('form-control-label')
                                    ->for('country_id') }}

                                {{ html()->text('country_id')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customer.country'))
                                        ->required() }}
                            </div><!--form-group-->
                        </div>
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.customer.state'))
                                    ->class('form-control-label')
                                    ->for('state_id') }}

                                {{ html()->text('state_id')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customer.state'))
                                        }}
                            </div><!--form-group-->
                        </div>
                    </div>

                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.customer.address_1').'(<span class="text-danger">*</span>)')
                            ->class('form-control-label')
                            ->for('address_1') }}

                        {{ html()->text('address_1')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.customer.address_1'))
                                ->required() }}
                    </div><!--form-group-->

                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.customer.address_2'))
                            ->class('form-control-label')
                            ->for('address_2') }}

                        {{ html()->text('address_2')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.customer.address_2'))
                                }}
                    </div><!--form-group-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.customer.city'))
                                    ->class('form-control-label')
                                    ->for('city') }}

                                {{ html()->text('city')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customer.city'))
                                        }}
                            </div><!--form-group-->
                        </div>
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.customer.zip_code').'(<span class="text-danger">*</span>)')
                                    ->class('form-control-label')
                                    ->for('zip_code') }}

                                {{ html()->text('zip_code')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customer.zip_code'))
                                        ->required()
                                        }}
                            </div><!--form-group-->
                        </div>
                    </div>

                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.customer.phone').'(<span class="text-danger">*</span>)')
                            ->class('form-control-label')
                            ->for('phone') }}

                        {{ html()->text('phone')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.customer.phone'))
                                ->required()
                                }}
                    </div><!--form-group-->

                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.customer.tax'))
                            ->class('form-control-label')
                            ->for('tax') }}

                        {{ html()->text('tax')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.customer.tax'))
                                }}
                    </div><!--form-group-->
                    {{ html()->hidden('back_link')->value(Request::get('back_link')) }}
                    {{ form_submit(__('buttons.general.crud.update')) }}
                    {{ form_cancel(route('admin.'.$module.'.index'), __('buttons.general.cancel')) }}
                    {{ html()->closeModelForm() }}
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->

@endsection