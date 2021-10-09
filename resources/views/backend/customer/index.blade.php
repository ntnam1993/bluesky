@extends('backend.layouts.app')

@section('title', __('labels.backend.'.$module.'.management'))

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
                        @lang('labels.backend.customer.management')
                    </h4>
                </div><!--col-->

                <div class="col-sm-7 pull-right">
                    @include('backend.customer.includes.header-buttons')
                </div><!--col-->
            </div><!--row-->
            <div class="row mt-4">
                <div class="col">
                    <div class="table-responsive">
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
                                            @include('backend.customer.includes.actions')
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            @if(!empty($customers))
                <div class="row">
                    <div class="col-7">
                        <div class="float-left">
                            {!! $customers->total() !!} {{ trans_choice('labels.backend.customer.table.total', $customers->total()) }}
                        </div>
                    </div><!--col-->

                    <div class="col-5">
                        <div class="float-right">
                            {!! $customers->render() !!}
                        </div>
                    </div><!--col-->
                </div><!--row-->
            @endif
        </div>
    </div>
@endsection