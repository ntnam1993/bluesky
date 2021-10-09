@extends('backend.layouts.app')

@section('title', __('labels.backend.membership.management') . ' | ' . __('labels.backend.membership.create'))

@section('content')
{{ html()->form('POST', route('admin.membership.store'))->class('form-horizontal')->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.membership.management')
                        <small class="text-muted">@lang('labels.backend.membership.create')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <hr>
            <div class="row mt-4">
                <div class="col">
                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.membership.name').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('name') }}

                        <div class="col-md-10">
                            {{ html()->text('name')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.membership.name'))
                                ->attribute('maxlength', 191)
                                ->required()
                                ->autofocus() }}
                        </div><!--col-->
                    </div><!--form-group-->
                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.membership.number_of_day').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('number_of_day') }}

                        <div class="col-md-10">
                            {{ html()->text('number_of_day')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.membership.number_of_day'))
                                ->required() }}
                        </div><!--col-->
                    </div><!--form-group-->
                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.membership.price').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('price') }}

                        <div class="col-md-10">
                            {{ html()->text('price')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.membership.price'))
                                ->required() }}
                        </div><!--col-->
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->
        </div><!--card-body-->

        <div class="card-footer">
            <div class="row">
                <div class="col">
                    {{ form_cancel(route('admin.membership.index'), __('buttons.general.cancel')) }}
                </div><!--col-->

                <div class="col text-right">
                    {{ form_submit(__('buttons.general.crud.create')) }}
                </div><!--col-->
            </div><!--row-->
        </div><!--card-footer-->
    </div><!--card-->
{{ html()->form()->close() }}
@endsection
