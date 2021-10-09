@extends('backend.layouts.app')

@section('title', app_name() . ' | '. __('labels.backend.membership.roles.management'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.membership.management')
                </h4>
            </div><!--col-->

            <div class="col-sm-7 pull-right">
                @include('backend.membership.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.membership.table.id')</th>
                            <th>@lang('labels.backend.membership.table.name')</th>
                            <th>@lang('labels.backend.membership.table.number_of_day')</th>
                            <th>@lang('labels.backend.membership.table.price')</th>
                            <th>@lang('labels.backend.membership.table.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if(!empty($memberships))
                            @foreach($memberships as $membership)
                                <tr>
                                    <td>{{ $membership->id }}</td>
                                    <td>{{ ucwords($membership->name) }}</td>
                                    <td>{{ $membership->number_of_day }}</td>
                                    <td>{{ ($membership->price == 0) ? 'Free' : $membership->price }}</td>
                                    <td>{{ $membership->updated_at->diffForHumans() }}</td>
                                    <td>
                                        @include('backend.membership.includes.actions', ['membership' => $membership])
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
        @if(!empty($memberships))
            <div class="row">
                <div class="col-7">
                    <div class="float-left">
                        {!! $memberships->total() !!} {{ trans_choice('labels.backend.membership.table.total', $memberships->total()) }}
                    </div>
                </div><!--col-->

                <div class="col-5">
                    <div class="float-right">
                        {!! $memberships->render() !!}
                    </div>
                </div><!--col-->
            </div><!--row-->
        @endif
    </div><!--card-body-->
</div><!--card-->
@endsection
