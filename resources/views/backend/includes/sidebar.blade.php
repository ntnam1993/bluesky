<div class="sidebar">
    <nav class="sidebar-nav">
        <ul class="nav">
            <li class="nav-title">
                @lang('menus.backend.sidebar.general')
            </li>
            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/dashboard'))
                }}" href="{{ route('admin.dashboard') }}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    @lang('menus.backend.sidebar.dashboard')
                </a>
            </li>

            <li class="nav-item nav-dropdown {{ active_class(Route::is('admin/package/*'), 'open') }}">

                <a class="nav-link nav-dropdown-toggle {{ active_class(Route::is('admin/package/*')) }}" href="#">
                    <i class="nav-icon icon-star"></i>
                    @lang('menus.backend.sidebar.package.main')
                </a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link {{ active_class(Request::get('status') == '') }}" href="{{ route('admin.package.index',['status' => '']) }}">
                            @lang('menus.backend.sidebar.package.management')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ active_class(Request::get('status') == \App\Models\Package\Package::PACKAGE_PROCESSING) }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_PROCESSING]) }}">
                            @lang('menus.backend.sidebar.package.mail_out_process')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ active_class(Request::get('status') == \App\Models\Package\Package::PACKAGE_SUCCESS) }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_SUCCESS]) }}">
                            @lang('menus.backend.sidebar.package.mail_out_sent')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ active_class(Request::get('status') == \App\Models\Package\Package::PACKAGE_EXPECTED) }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_EXPECTED]) }}">
                            @lang('menus.backend.sidebar.package.expected')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ active_class(Request::get('status') == \App\Models\Package\Package::PACKAGE_ERROR) }}" href="{{ route('admin.package.index',['status' => \App\Models\Package\Package::PACKAGE_ERROR]) }}">
                            @lang('menus.backend.sidebar.package.error')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ active_class(Request::get('type') == 'consolidate') }}" href="{{ route('admin.package.index',['type' => 'consolidate']) }}">
                            @lang('menus.backend.sidebar.package.consolidation')
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link {{ (Route::currentRouteName() == 'admin.transaction.index') ? 'active' : '' }}" href="{{ route('admin.transaction.index',['type' => 'deposit']) }}">
                    <i class="nav-icon icon-wallet icons"></i>
                    @lang('menus.backend.sidebar.transaction.billing')
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link {{ active_class(Route::is('admin/customer/index')) }}" href="{{ route('admin.customer.index') }}">
                    <i class="nav-icon icon-location-pin"></i>
                    @lang('menus.backend.sidebar.customer.main')
                </a>
            </li>

            @if ($logged_in_user->isAdmin())
                <li class="nav-title">
                    @lang('menus.backend.sidebar.system')
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ active_class(Request::is('admin/membership*')) }}"
                       href="{{ route('admin.membership.index') }}">
                        <i class="nav-icon icon-star"></i>
                        @lang('menus.backend.sidebar.membership.main')
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ active_class(Request::is('admin/warehouse*')) }}"
                       href="{{ route('admin.warehouse.index') }}">
                        <i class="nav-icon icon-star"></i>
                        @lang('menus.backend.sidebar.warehouse')
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ active_class(Request::is('admin/country*')) }}"
                       href="{{ route('admin.country.index') }}">
                        <i class="nav-icon icon-star"></i>
                        @lang('menus.backend.sidebar.country')
                    </a>
                </li>

                <li class="nav-item nav-dropdown {{
                    active_class(Route::is('admin/auth*'), 'open')
                }}">
                    <a class="nav-link nav-dropdown-toggle {{
                        active_class(Route::is('admin/auth*'))
                    }}" href="#">
                        <i class="nav-icon far fa-user"></i>
                        @lang('menus.backend.access.title')

                        @if ($pending_approval > 0)
                            <span class="badge badge-danger">{{ $pending_approval }}</span>
                        @endif
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                                active_class(Route::is('admin/auth/user*'))
                            }}" href="{{ route('admin.auth.user.index') }}">
                                @lang('labels.backend.access.users.management')

                                @if ($pending_approval > 0)
                                    <span class="badge badge-danger">{{ $pending_approval }}</span>
                                @endif
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{
                                active_class(Route::is('admin/auth/role*'))
                            }}" href="{{ route('admin.auth.role.index') }}">
                                @lang('labels.backend.access.roles.management')
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="divider"></li>

                <li class="nav-item nav-dropdown hide {{
                    active_class(Route::is('admin/log-viewer*'), 'open')
                }}">
                        <a class="nav-link nav-dropdown-toggle {{
                            active_class(Route::is('admin/log-viewer*'))
                        }}" href="#">
                        <i class="nav-icon fas fa-list"></i> @lang('menus.backend.log-viewer.main')
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Route::is('admin/log-viewer'))
                        }}" href="{{ route('log-viewer::dashboard') }}">
                                @lang('menus.backend.log-viewer.dashboard')
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Route::is('admin/log-viewer/logs*'))
                        }}" href="{{ route('log-viewer::logs.list') }}">
                                @lang('menus.backend.log-viewer.logs')
                            </a>
                        </li>
                    </ul>
                </li>
            @endif
        </ul>
    </nav>

    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div><!--sidebar-->
