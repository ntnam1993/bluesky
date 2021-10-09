@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.edit'))

@section('content')
{{ html()->modelForm($package, 'PATCH', route('admin.'.$module.'.update', $package))->class('form-horizontal')->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">
                            @lang('labels.backend.'.$module.'.edit')
                            @if($package->type == 'consolidate')
                                Consolidation
                            @endif
                        </small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->

            <hr />

            <div class="row mt-4">
                <div class="col">

                    @if($package->type == 'consolidate')
                        <div class="card border-secondary">
                            <div class="card-header">
                                Packages in consolidation
                                <a href="{{ route('admin.package.index',['consolidation_id' => $package->id]) }}" class="btn btn-primary btn-sm" style="float: right">
                                    <i class="fas fa-plus"></i> Add Package
                                </a>
                            </div>
                            <div class="card-body">
                                <table class="table table-striped">
                                    <tr class="table-primary">
                                        <th>ID</th>
                                        <th>Photos</th>
                                        <th>Package Info</th>
                                        <th>Type of consolidation</th>
                                        <th>Actions</th>
                                    </tr>
                                    @if($package->childrens)
                                        @foreach($package->childrens as $children)
                                            <tr>
                                                <td>
                                                    <p class="m-0">{{ $children->id }}</p>
                                                </td>
                                                <td>
                                                    @if($children->photos)
                                                        <div class="light_gallery thumbnail-photo-small">
                                                            @foreach ($children->photos as $key => $photo)
                                                                <a href="{{ $photo->showPicture('large') }}">
                                                                    <img style="width: 50px" class="img-responsive" src="{{ $photo->showPicture() }}">
                                                                </a>
                                                                @if($key > 0)
                                                                    @break
                                                                @endif
                                                            @endforeach
                                                        </div>
                                                    @endif
                                                </td>
                                                <td>
                                                    <p class="m-0"><em>Type:</em> <b>{{ config('package.type.'.$children->type) }}</b></p>
                                                    <p class="m-0"><em>No:</em> {{ $children->tracking_no }}</p>
                                                </td>
                                                <td>
                                                    @foreach(config('package.consolidation.type') as $type_key => $consolidation_type)
                                                        <div class="form-check">
                                                            <input {{ ($children->consolidation_type == $type_key) ? 'checked' : '' }} class="form-check-input" type="radio" name="consolidation_type[{{ $children->id }}]" id="{{ $type_key }}_{{ $children->id }}" value="{{ $type_key }}">
                                                            <label class="form-check-label" for="{{ $type_key }}_{{ $children->id }}">
                                                                {{ $consolidation_type }}
                                                            </label>
                                                        </div>
                                                    @endforeach
                                                </td>
                                                <td>
                                                    @if($package->status != \App\Models\Package\Package::PACKAGE_SUCCESS)
                                                        <a href="{{ route('admin.package.consolidate.remove',$children) }}"
                                                           data-toggle="tooltip" data-placement="top"
                                                           title="@lang('buttons.general.crud.cancel')"
                                                           class="btn btn-danger btn-sm"
                                                           name="confirm_item"
                                                           data-trans-button-cancel="@lang('buttons.general.cancel')"
                                                           data-trans-button-confirm="@lang('buttons.general.ok')"
                                                           data-trans-title="@lang('strings.backend.general.are_you_sure')"
                                                           data-trans-text="">
                                                            <i class="fas fa-ban"></i>
                                                        </a>
                                                    @endif
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </table>
                            </div>
                        </div>
                    @endif

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.warehouse').'(<span class="text-danger">*</span>)')
                            ->class('col-md-2 form-control-label')
                            ->for('warehouse_id') }}

                        <div class="col-md-10">
                            {{ html()->select('warehouse_id',$warehouses)
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.backend.'.$module.'.warehouse'))
                                ->required() }}
                        </div><!--col-->
                    </div><!--form-group-->
                    @if($package->type == 'consolidate')
                        {{ html()->hidden('type')->value('consolidate') }}
                    @else
                        <div class="form-group row">
                            {{ html()->label(__('validation.attributes.backend.'.$module.'.type').'(<span class="text-danger">*</span>)')
                                ->class('col-md-2 form-control-label')
                                ->for('type') }}

                            <div class="col-md-10">
                                {{ html()->select('type',$package_types)
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.'.$module.'.type'))
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->
                    @endif

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.name'))
                            ->class('col-md-2 form-control-label')
                            ->for('name') }}

                        <div class="col-md-10">
                            {{ html()->text('name')
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
                                        {{ html()->text('weight')->placeholder('1 or 1.1')->class('form-control') }}
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.width')</div>
                                        </div>
                                        {{ html()->text('width')->placeholder('1 or 1.1')->class('form-control') }}
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.height')</div>
                                        </div>
                                        {{ html()->text('height')->placeholder('1 or 1.1')->class('form-control')}}
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.length')</div>
                                        </div>
                                        {{ html()->text('length')->placeholder('1 or 1.1')->class('form-control')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--form-group-->

                    <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.'.$module.'.quantity'))
                            ->class('col-md-2 form-control-label')
                            ->for('quantity') }}

                        <div class="col-md-10">
                            {{ html()->text('quantity')
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
                    {{ form_submit(__('buttons.general.crud.update')) }}
                </div><!--col-->
            </div><!--row-->
        </div><!--card-footer-->
    </div><!--card-->
{{ html()->closeModelForm() }}
@endsection
