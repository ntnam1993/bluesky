@extends('backend.layouts.app')

@section('title', app_name() . ' | '. __('labels.backend.country.management'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.country.management')
                </h4>
            </div><!--col-->

            <div class="col-sm-7 pull-right">
                @include('backend.country.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>@lang('labels.general.field.id')</th>
                            <th>@lang('labels.backend.country.table.code')</th>
                            <th>@lang('labels.general.field.name')</th>
                            <th>@lang('labels.general.field.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if(!empty($countries))
                            @foreach($countries as $country)
                                <tr>
                                    <td>{{ $country->id }}</td>
                                    <td>{{ $country->code }}</td>
                                    <td>{{ ucwords($country->name) }}</td>
                                    <td>{{ $country->updated_at->diffForHumans() }}</td>
                                    <td>
                                        @include('backend.country.includes.actions', ['country' => $country])
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
        @if(!empty($countries))
            <div class="row">
                <div class="col-7">
                    <div class="float-left">
                        {!! $countries->total() !!} {{ trans_choice('labels.backend.country.table.total', $countries->total()) }}
                    </div>
                </div><!--col-->

                <div class="col-5">
                    <div class="float-right">
                        {!! $countries->render() !!}
                    </div>
                </div><!--col-->
            </div><!--row-->
        @endif
    </div><!--card-body-->
</div><!--card-->
@endsection
