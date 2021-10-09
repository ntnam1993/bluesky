@extends('backend.layouts.app')

@section('title', app_name() . ' | '. __('labels.backend.access.roles.management'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.warehouse.management')
                </h4>
            </div><!--col-->

            <div class="col-sm-7 pull-right">
                @include('backend.warehouse.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.warehouse.table.id')</th>
                            <th>@lang('labels.backend.warehouse.table.name')</th>
                            <th>@lang('labels.backend.warehouse.table.country')</th>
                            <th>@lang('labels.backend.warehouse.table.address')</th>
                            <th>@lang('labels.backend.warehouse.table.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if(!empty($warehouses))
                            @foreach($warehouses as $warehouse)
                                <tr>
                                    <td>{{ $warehouse->id }}</td>
                                    <td>{{ ucwords($warehouse->name) }}</td>
                                    <td>{{ $warehouse->country_id }}</td>
                                    <td>{{ $warehouse->address }}</td>
                                    <td>{{ $warehouse->updated_at->diffForHumans() }}</td>
                                    <td>
                                        @include('backend.warehouse.includes.actions', ['warehouse' => $warehouse])
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
        @if(!empty($warehouses))
            <div class="row">
                <div class="col-7">
                    <div class="float-left">
                        {!! $warehouses->total() !!} {{ trans_choice('labels.backend.warehouse.table.total', $warehouses->total()) }}
                    </div>
                </div><!--col-->

                <div class="col-5">
                    <div class="float-right">
                        {!! $warehouses->render() !!}
                    </div>
                </div><!--col-->
            </div><!--row-->
        @endif
    </div><!--card-body-->
</div><!--card-->
@endsection
