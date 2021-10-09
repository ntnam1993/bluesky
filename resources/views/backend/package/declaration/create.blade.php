@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.mail_out') . ' | ' .__('labels.backend.'.$module.'.customs_declaration'))

@section('content')

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.customs_declaration')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->
            <hr />
            <div class="row mt-4">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-header">
                            @lang('labels.backend.'.$module.'.declaration.add_item')
                        </div>
                        <div class="card-body">
                            {{ html()->modelForm($mail_out, 'POST', route('admin.package.declaration.store',['id' => $mail_out->package_id, 'mail_out_id' => $mail_out->id]))->class('form-horizontal')->open() }}
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.backend.'.$module.'.description').'(<span class="text-danger">*</span>)')
                                    ->class('form-control-label')
                                    ->for('description') }}

                                {{ html()->text('description')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.'.$module.'.description'))
                                        ->required() }}
                            </div><!--form-group-->

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        {{ html()->label(__('validation.attributes.backend.'.$module.'.quantity').'(<span class="text-danger">*</span>)')
                                            ->class('form-control-label')
                                            ->for('quantity') }}

                                        {{ html()->text('quantity')
                                                ->class('form-control')
                                                ->placeholder(0)
                                                ->required() }}
                                    </div><!--form-group-->
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        {{ html()->label(__('validation.attributes.backend.'.$module.'.price').'(<span class="text-danger">*</span>)')
                                            ->class('form-control-label')
                                            ->for('price') }}

                                        {{ html()->text('price')
                                                ->class('form-control')
                                                ->value('')
                                                ->placeholder(0)
                                                ->required() }}
                                    </div><!--form-group-->
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        {{ html()->label(__('validation.attributes.backend.'.$module.'.origin').'(<span class="text-danger">*</span>)')
                                            ->class('form-control-label')
                                            ->for('origin_id') }}

                                        {{ html()->select('origin_id',$countries)
                                                ->class('form-control')
                                                ->placeholder(__('validation.attributes.backend.'.$module.'.origin'))
                                                ->required() }}
                                    </div><!--form-group-->
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        {{ html()->label(__('validation.attributes.backend.'.$module.'.battery'))
                                            ->class('form-control-label')
                                            ->for('battery') }}

                                        {{ html()->select('battery',$batteries,0)
                                                ->class('form-control')
                                                }}
                                    </div><!--form-group-->
                                </div>
                            </div>
                            <button type="submit" value="back" class="btn btn-primary btn-sm text-uppercase">
                                <i class="fa fa-plus mr-1" aria-hidden="true"></i> {{ __('buttons.backend.declaration.add') }}
                            </button>
                            {{ html()->closeModelForm() }}
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-header">@lang('labels.backend.'.$module.'.declaration.list_item')</div>
                        <div class="card-body">
                            {{ html()->modelForm($mail_out, 'PATCH', route('admin.'.$module.'.mail_out.update', [$package,$mail_out]))->class('form-horizontal')->attribute('enctype','multipart/from-data')->open() }}
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>@lang('labels.backend.'.$module.'.declaration.table.description')</th>
                                        <th>@lang('labels.backend.'.$module.'.declaration.table.quantity')</th>
                                        <th>@lang('labels.backend.'.$module.'.declaration.table.price')</th>
                                        <th>@lang('labels.backend.'.$module.'.declaration.table.origin')</th>
                                        <th>@lang('labels.backend.'.$module.'.declaration.table.battery')</th>
                                        <th>@lang('labels.general.actions')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if($mail_out->declarations)
                                        @foreach($mail_out->declarations as $item)
                                            <tr>
                                                <td>{{ $item->description }}</td>
                                                <td>{{ $item->quantity }}</td>
                                                <td>{{ number_format($item->price) }}</td>
                                                <td>{{ number_format($item->origin_id) }}</td>
                                                <td>{{ config('package.batteries.'.$item->battery) }}</td>
                                                <td>
                                                    @include('backend.package.declaration.includes.actions',['declaration' => $item])
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                                <p class="text-right m-0"><b>@lang('labels.backend.'.$module.'.declaration.total_quantity'):</b> <b class="text-success">{{ $mail_out->declarations->sum('quantity') }}</b></p>
                                <p class="text-right m-0"><b>@lang('labels.backend.'.$module.'.declaration.total_price'):</b> <b class="text-success">{{ $mail_out->declarations->sum('price') }}</b></p>
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.backend.'.$module.'.note'))
                                        ->class('form-control-label')
                                        ->for('note') }}

                                    {{ html()->textarea('note')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.backend.'.$module.'.note'))
                                            }}
                                </div><!--form-group-->
                                {{ html()->hidden('description') }}
                                {{ html()->hidden('quantity') }}
                                {{ html()->hidden('weight') }}
                                {{ html()->hidden('width') }}
                                {{ html()->hidden('height') }}
                                {{ html()->hidden('length') }}
                                <button type="submit" name="save" value="back"
                                        class="btn btn-success btn-sm text-uppercase"
                                        data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.save')">
                                    <i class="fa fa-check mr-1" aria-hidden="true"></i> @lang('buttons.general.save')
                                </button>
                                <button type="submit" name="save"  value="address"
                                        class="btn btn-success btn-sm text-uppercase"
                                        data-toggle="tooltip"
                                        data-placement="top" title="@lang('buttons.backend.declaration.save_and_address')">
                                    <i class="fas fa-map-marker-alt mr-1"></i> @lang('buttons.backend.declaration.save_and_address')
                                </button>
                            {{ html()->closeModelForm() }}
                        </div>
                    </div>
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->
@endsection
