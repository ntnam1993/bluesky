@extends('backend.layouts.app')

@section('title', __('labels.backend.membership.management') . ' | ' . __('labels.backend.membership.edit'))

@section('content')
{{ html()->modelForm($membership, 'PATCH', route('admin.membership.update', $membership))->class('form-horizontal')->open() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.membership.management')
                        <small class="text-muted">@lang('labels.backend.membership.edit')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->
            <hr />
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
                    {{ form_submit(__('buttons.general.crud.update')) }}
                </div><!--col-->
            </div><!--row-->
        </div><!--card-footer-->
    </div><!--card-->
{{ html()->closeModelForm() }}
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    <small class="text-muted">@lang('labels.backend.membership.attribute')</small>
                </h4>
            </div><!--col-->
            <div class="col-sm-7 pull-right">
                <div class="btn-toolbar float-right">
                    <a href="{{ route('admin.membership.attribute.create', ['id' => $membership->id]) }}"
                       class="btn btn-success modal-ajax"
                       data-toggle="modal"
                       data-target="#modal">
                        <i class="fas fa-plus-circle" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.create')"></i>
                    </a>
                </div>
            </div><!--col-->
        </div><!--row-->
        <!--row-->
        <hr />
        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.membership.attributes.table.id')</th>
                            <th>@lang('labels.backend.membership.attributes.table.name')</th>
                            {{--<th>@lang('labels.backend.membership.attributes.table.status')</th>--}}
                            <th>@lang('labels.backend.membership.attributes.table.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if(!empty($membership->attributes))
                            @foreach($membership->attributes as $attribute)
                                <tr>
                                    <td>{{ $attribute->id }}</td>
                                    <td>{{ ucwords($attribute->name) }}</td>
                                    {{--<td>--}}
                                        {{--<input type="checkbox" {{ ($attribute->status == 1) ? 'checked':'' }} data-toggle="switch" data-size="large">--}}
                                    {{--</td>--}}
                                    <td>{{ $attribute->updated_at->diffForHumans() }}</td>
                                    <td>
                                        <div class="btn-group btn-group-sm" role="group" aria-label="@lang('labels.backend.access.users.user_actions')">
                                            <a href="{{ route('admin.membership.attribute.edit', [$membership,$attribute]) }}"
                                               class="btn btn-primary"
                                               data-toggle="modal"
                                               data-target="#modal">
                                                <i class="fas fa-edit"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="@lang('buttons.general.crud.edit')"></i>
                                            </a>
                                            <a href="{{ route('admin.membership.attribute.destroy', [$membership,$attribute]) }}"
                                               data-method="delete"
                                               data-trans-button-cancel="@lang('buttons.general.cancel')"
                                               data-trans-button-confirm="@lang('buttons.general.crud.delete')"
                                               data-trans-title="@lang('strings.backend.general.are_you_sure')"
                                               class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.delete')">
                                                <i class="fas fa-trash"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
