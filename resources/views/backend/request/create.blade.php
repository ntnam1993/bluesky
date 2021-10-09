@extends('backend.layouts.app')

@section('title', __('labels.backend.package.management') . ' | ' . __('labels.backend.package.request.create'))

@section('content')

    {{ html()->form('POST', route('admin.request.store'))->class('form-horizontal')->attributes(['enctype' => 'multipart/form-data'])->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.package.management')
                        <small class="text-muted">@lang('labels.backend.package.request.create')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <hr />
            <div class="row mt-4">
                <div class="col-sm-6">
                    <h4>@lang('labels.backend.package.request.message')</h4>
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.backend.package.request.content').'(<span class="text-danger">*</span>)')
                            ->class('form-control-label')
                            ->for('content') }}

                        {{ html()->textarea('content')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.package.request.content'))
                                ->required() }}
                    </div><!--form-group-->

                    <div class="form-group">
                        <div class="checkbox">
                            {{ html()->label(html()->checkbox('priority', false, 1) . ' ' . __('validation.attributes.backend.package.request.priority'))->for('priority') }}
                        </div>
                    </div><!--form-group-->

                    <div class="form-group">
                        {{ html()->file('file[]')->class('form-control')->multiple() }}
                    </div><!--form-group-->

                    {{ html()->hidden('type','special') }}
                    {{ html()->hidden('item_id',$item->id) }}
                    {{ html()->hidden('item_type',get_class($item)) }}
                    {{ form_submit(__('buttons.general.crud.create')) }}
                    {{ form_cancel(route('admin.package.index'), __('buttons.general.cancel')) }}

                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->
    {{ html()->closeModelForm() }}
@endsection
