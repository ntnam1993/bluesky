@extends('backend.layouts.app')

@section('title', $logged_in_user->name)

@section('content')
    <div class="row mb-4">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>
                        <i class="fas fa-tachometer-alt"></i> @lang('navs.frontend.dashboard') Account
                    </strong>
                </div><!--card-header-->
                <div class="card-body">
                    <div class="row">
                        <div class="col col-sm-4 order-1 order-sm-2  mb-4">
                            <div class="card mb-4 bg-light">
                                <img class="card-img-top" src="{{ $logged_in_user->picture }}" alt="Profile Picture" style="max-height: 250px;">
                                <div class="card-body">
                                    <h4 class="card-title">
                                        {{ $logged_in_user->name }}<br/>
                                    </h4>
                                    <p class="card-text">
                                        <small>
                                            <i class="fas fa-envelope"></i> {{ $logged_in_user->email }}<br/>
                                            <i class="fas fa-calendar-check"></i> @lang('strings.frontend.general.joined') {{ timezone()->convertToLocal($logged_in_user->created_at, 'F jS, Y') }}
                                        </small>
                                    </p>
                                    <p class="card-text">
                                        <a href="{{ route('admin.account.edit')}}" class="btn btn-info btn-sm mb-1">
                                            <i class="fas fa-edit"></i> Edit my profile
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div><!--col-md-4-->

                        <div class="col-md-8 order-2 order-sm-1">
                            <div class="row">
                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Membership plan
                                        </div><!--card-header-->
                                        <div class="card-body">
                                            Billing cycle
                                        </div><!--card-body-->
                                    </div><!--card-->
                                </div><!--col-md-6-->
                            </div><!--row-->

                            <div class="row">
                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Deposit
                                        </div><!--card-header-->
                                        <div class="card-body">
                                            <p class="border-t pt-2"><span>Current Total:</span>
                                                <span class="fs-115 font-weight-bold text-black float-md-right d-block">${{ $logged_in_user->primary_wallet }}</span>
                                            </p>
                                            <div class="text-md-right mt-4">
                                                <div class="absolute-button">
                                                    <a href="{{ route('admin.transaction.index',['type' => 'deposit']) }}" class="btn btn-light btn-sm text-uppercase">
                                                        <i class="fas fa-search" aria-hidden="true"></i> Details
                                                    </a>
                                                    <a href="{{ route('admin.transaction.create') }}" class="btn btn-success btn-sm text-uppercase font-weight-bold">
                                                        <i class="fas fa-plus" aria-hidden="true"></i> @lang('buttons.backend.transaction.add')
                                                    </a>
                                                </div>
                                            </div>
                                        </div><!--card-body-->
                                    </div><!--card-->
                                </div><!--col-md-6-->
                            </div><!--row-->
                        </div><!--col-md-8-->
                    </div><!-- row -->
                </div> <!-- card-body -->
            </div><!-- card -->
        </div><!-- row -->
    </div><!-- row -->
@endsection
