@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.create'))

@section('content')
{{ html()->form('POST', route('admin.'.$module.'.store'))->class('form-horizontal')->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.create')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->

            <hr>

            <div class="row mt-4">
                <div class="col">

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.warehouse').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('warehouse_id') }}

                        <div class="col-md-10">
                            {{ html()->select('warehouse_id',$warehouses,old('warehouse_id'))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.warehouse'))
                                ->required() }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.type').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('type') }}

                        <div class="col-md-10">
                            {{ html()->select('type',$package_types,old('type'))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.type'))
                                ->required() }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.name'))
                            ->class('col-md-2 form-control-label')
                            ->for('name') }}

                        <div class="col-md-10">
                            {{ html()->text('name')
                                ->value(old('name'))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.name'))
                                }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.tracking_no'))
                            ->class('col-md-2 form-control-label')
                            ->for('tracking_no') }}

                        <div class="col-md-10">
                            {{ html()->text('tracking_no')
                                ->value(old('tracking_no'))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.tracking_no'))
                                }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.size'))
                            ->class('col-md-2 form-control-label')
                            }}
                        <div class="col-md-10">
                            <div class="form-row">
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.weight')</div>
                                        </div>
                                        {{ html()->text('weight')->value(old('weight',0))->placeholder('1 or 1.1')->class('form-control') }}
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.width')</div>
                                        </div>
                                        {{ html()->text('width')->value(old('width',0))->placeholder('1 or 1.1')->class('form-control') }}
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.height')</div>
                                        </div>
                                        {{ html()->text('height')->value(old('height',0))->placeholder('1 or 1.1')->class('form-control')}}
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.length')</div>
                                        </div>
                                        {{ html()->text('length')->value(old('length',0))->placeholder('1 or 1.1')->class('form-control')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.quantity'))
                            ->class('col-md-2 form-control-label')
                            ->for('quantity') }}

                        <div class="col-md-10">
                            {{ html()->text('quantity')
                                ->value(old('quantity',1))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.quantity'))
                                }}
                        </div><!--col-->
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.address'))
                            ->class('col-md-2 form-control-label')
                            ->for('sender_address') }}

                        <div class="col-md-10">
                            {{ html()->textarea('sender_address')
                                ->value(old('sender_address'))
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.address'))
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
                <div class="col">
                    {{ form_cancel(route('admin.'.$module.'.index'), __('buttons.general.cancel')) }}
                </div><!--col-->

                <div class="col text-right">
                    {{ form_submit(__('buttons.general.crud.create')) }}
                </div><!--col-->
            </div><!--row-->
        </div><!--card-footer-->
    </div><!--card-->
{{ html()->form()->close() }}
@endsection
