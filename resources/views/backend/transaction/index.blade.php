@extends('backend.layouts.app')

@section('title', app_name() . ' | '. __('labels.backend.transaction.main'))

@section('content')

    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ active_class($type == 'deposit') }}"
               href="{{ route('admin.transaction.index',['type' => 'deposit']) }}">
                @lang('menus.backend.sidebar.transaction.deposit')
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-uppercase {{ active_class($type == 'charge') }}"
               href="{{ route('admin.transaction.index',['type' => 'charge']) }}">
                @lang('menus.backend.sidebar.transaction.payment')
            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active show" role="tabpanel">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-5">
                            <h4 class="card-title mb-0">
                                @lang('labels.backend.transaction.management.main')
                            </h4>
                        </div><!--col-->

                        <div class="col-sm-7 pull-right">
                            @if($type == 'deposit')
                                @include('backend.transaction.includes.header-buttons')
                            @endif
                        </div><!--col-->
                    </div><!--row-->

                    <div class="row mt-4">
                        <div class="col">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>@lang('labels.backend.transaction.table.id')</th>
                                        <th>@lang('labels.backend.transaction.table.amount')</th>
                                        <th>@lang('labels.backend.transaction.table.p_method')</th>
                                        <th>@lang('labels.backend.transaction.table.note')</th>
                                        <th>@lang('labels.backend.transaction.table.status')</th>
                                        <th>@lang('labels.backend.transaction.table.updated_at')</th>
                                        <th>@lang('labels.general.actions')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if(!empty($transactions))
                                        @foreach($transactions as $transaction)
                                            <tr>
                                                <td>{{ $transaction->id }}</td>
                                                <td>${{ $transaction->amount }}</td>
                                                <td>{{ ($transaction->method) ? ucfirst($transaction->method->name) : '' }}</td>
                                                <td>{{ $transaction->note }}</td>
                                                <td>{!! $transaction->getStatusLabel() !!}</td>
                                                <td>{{ $transaction->updated_at->diffForHumans() }}</td>
                                                <td>
                                                    @if($logged_in_user->isAdmin())
                                                        @include('backend.transaction.includes.actions', ['transaction' => $transaction])
                                                    @endif
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            </div>
                        </div><!--col-->
                    </div><!--row-->
                    @if(!empty($transactions))
                        <div class="row">
                            <div class="col-7">
                                <div class="float-left">
                                    {!! $transactions->total() !!} {{ trans_choice('labels.backend.transaction.table.total', $transactions->total()) }}
                                </div>
                            </div><!--col-->

                            <div class="col-5">
                                <div class="float-right">
                                    {!! $transactions->render() !!}
                                </div>
                            </div><!--col-->
                        </div><!--row-->
                    @endif
                </div><!--card-body-->
            </div><!--card-->
        </div>
    </div>
@endsection
