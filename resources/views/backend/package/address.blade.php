@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management') . ' | ' . __('labels.backend.'.$module.'.select_address'))

@section('content')

    <div class="card">
        <div class="card-body">
            @include('backend.customer.includes.filter')
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        @lang('labels.backend.'.$module.'.management')
                        <small class="text-muted">@lang('labels.backend.'.$module.'.select_address')</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <!--row-->

            <hr />

            <div class="row mt-4">
                <div class="col-sm-7">
                    <div class="card">
                        <div class="card-header">@lang('labels.backend.'.$module.'.select_address')</div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>@lang('labels.general.field.id')</th>
                                        <th>@lang('labels.general.field.name')</th>
                                        <th>@lang('labels.general.field.city')</th>
                                        <th>@lang('labels.backend.customer.table.address_1')</th>
                                        <th>@lang('labels.general.actions')</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if(!empty($customers))
                                        @foreach($customers as $customer)
                                            <tr>
                                                <td>{{ $customer->id }}</td>
                                                <td>{{ $customer->name }}</td>
                                                <td>{{ $customer->city }}</td>
                                                <td>{{ $customer->address_1 }}</td>
                                                <td>
                                                    @include('backend.package.includes.address.actions')
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="card">
                        <div class="card-header">@lang('labels.backend.customer.add_new')</div>
                        <div class="card-body">
                            @include('backend.customer.includes.in_form_create',['back_link' => route('admin.'.$module.'.shipping.show', [$package,$mail_out])])
                        </div>
                    </div>
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->

@endsection