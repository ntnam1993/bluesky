@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.mail_out'))

@section('content')

    {{ html()->modelForm($package, 'POST', route('admin.'.$module.'.store_mail_out',$package))->class('form-horizontal')->open() }}

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.mail_out')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->

            <hr />

            <div class="row mt-4">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-header">@lang('labels.backend.'.$module.'.add_item')</div>
                        <div class="card-body">
                            @if($package->status == \App\Models\Package\Package::PACKAGE_SUCCESS)
                                <div class="alert alert-success" role="alert">
                                    Package MailOut Success
                                </div>
                            @else
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.backend.'.$module.'.description'))
                                        ->class('form-control-label')
                                        ->for('description') }}

                                    {{ html()->text('description')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.backend.'.$module.'.description'))
                                            ->required() }}
                                </div><!--form-group-->

                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.backend.'.$module.'.quantity'))
                                        ->class('form-control-label')
                                        ->for('quantity') }}

                                    {{ html()->text('quantity')
                                            ->class('form-control')
                                            ->placeholder(0)
                                            ->required() }}
                                </div><!--form-group-->

                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.backend.'.$module.'.size'))
                                        ->class('form-control-label')
                                        }}
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.weight')</div>
                                                </div>
                                                {{ html()->text('weight')->value(old('weight',$package->weight))->placeholder('1 or 1.1')->class('form-control') }}
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.width')</div>
                                                </div>
                                                {{ html()->text('width')->value(old('width',$package->width))->placeholder('1 or 1.1')->class('form-control') }}
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.height')</div>
                                                </div>
                                                {{ html()->text('height')->value(old('height',$package->height))->placeholder('1 or 1.1')->class('form-control')}}
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">@lang('validation.attributes.backend.'.$module.'.length')</div>
                                                </div>
                                                {{ html()->text('length')->value(old('length',$package->length))->placeholder('1 or 1.1')->class('form-control')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.backend.'.$module.'.note'))
                                        ->class('form-control-label')
                                        ->for('note') }}

                                    {{ html()->textarea('note')
                                            ->value(old('note'))
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.backend.'.$module.'.note'))
                                            }}
                                </div><!--form-group-->

                                <button name="send" type="submit" value="back"
                                        data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.save')"
                                        class="btn btn-success btn-sm text-uppercase">
                                    <i class="fa fa-check mr-1" aria-hidden="true"></i>@lang('buttons.general.save')
                                </button>
                                <button name="send" type="submit" value="declaration"
                                        data-toggle="tooltip" data-placement="top" title="@lang('buttons.backend.'.$module.'.save_and_declaration')"
                                        class="btn btn-success btn-sm text-uppercase">
                                    <i class="fas fa-file-invoice mr-1"></i>@lang('buttons.backend.'.$module.'.save_and_declaration')
                                </button>
                                <button name="send" type="submit" value="address"
                                        data-toggle="tooltip" data-placement="top" title="@lang('buttons.backend.'.$module.'.save_and_select')"
                                        class="btn btn-success btn-sm text-uppercase">
                                    <i class="fas fa-map-marker-alt mr-1"></i>@lang('buttons.backend.'.$module.'.save_and_select')
                                </button>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-header">@lang('labels.backend.'.$module.'.info')</div>
                        <div class="card-body">
                            <p class="m-0">
                                <em>@lang('labels.backend.'.$module.'.table.warehouse'):</em>
                                @if($package->warehouse)
                                    <b>{{ $package->warehouse->name }}</b>
                                @endif
                            </p>
                            <p class="m-0"><em>@lang('labels.backend.'.$module.'.table.type'):</em> <b>{{ config('package.type.'.$package->type) }}</b></p>
                            <p class="m-0"><em>@lang('labels.backend.'.$module.'.table.tracking_no'):</em> {{ $package->tracking_no }}</p>
                            <p class="m-0"><em>@lang('labels.backend.'.$module.'.table.weight'):</em> <b>{{ $package->weight }}</b></p>
                            <p><em>Size:</em> <b>{{ $package->length }} x {{ $package->width }} x {{ $package->height }}</b></p>
                            <p class="text-right m-0"><b>@lang('labels.backend.'.$module.'.table.total_quantity'):</b> <b class="text-success">{{ $package->quantity }}</b></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">@lang('labels.backend.'.$module.'.items')</div>
                        <div class="card-body">
                            <div class="table-responsive-back">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>@lang('labels.backend.'.$module.'.table.description')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.quantity')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.p_size')</th>
                                        <th>@lang('labels.backend.'.$module.'.table.note')</th>
                                        <th>@lang('labels.general.actions')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if($package->mail_outs)
                                        @foreach($package->mail_outs as $children)
                                            <tr>
                                                <td>{{ $children->description }}</td>
                                                <td>{{ $children->quantity }}</td>
                                                <td>
                                                    <p class="m-0"><em>@lang('labels.backend.'.$module.'.table.weight'):</em> <b>{{ $children->weight }}</b></p>
                                                    <p><em>@lang('labels.backend.'.$module.'.table.size'):</em> <b>{{ $children->length }} x {{ $children->width }} x {{ $children->height }}</b></p>
                                                </td>
                                                <td>{{ $children->note }}</td>
                                                <td>
                                                    @include('backend.package.includes.mail_out.actions', ['package_mail_out' => $children])
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            </div>
                            <p class="text-right m-0"><b>@lang('labels.backend.'.$module.'.table.total_quantity_mail_out'):</b> <b class="text-success">{{ $package->mail_outs->sum('quantity') }}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->
    {{ html()->closeModelForm() }}
@endsection
