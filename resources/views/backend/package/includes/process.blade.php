<div class="btn-group" role="group" aria-label="@lang('labels.backend.access.users.user_actions')">
    <a href="{{ route('admin.'.$module.'.show', $package) }}" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.view')" class="btn btn-info">
        <i class="fas fa-eye"></i>
    </a>

    <a href="{{ route('admin.'.$module.'.edit', $package) }}" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.edit')" class="btn btn-primary">
        <i class="fas fa-edit"></i>
    </a>

    <a href="{{ route('admin.'.$module.'.duplicate', $package) }}"
       data-toggle="tooltip"
       data-placement="top"
       name="confirm_item"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.ok')"
       data-trans-title="@lang('strings.backend.general.are_you_sure')"
       title="@lang('buttons.general.crud.copy')" class="btn btn-info">
        <i class="fas fa-copy"></i>
    </a>

    <div class="btn-group btn-group-sm" role="group">
        <button id="userActions" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            @lang('labels.general.more')
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <a href="{{ route('admin.'.$module.'.mail_out', $package) }}"
               class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.mail_out')">
                <i class="far fa-envelope text-primary" aria-hidden="true"></i> @lang('labels.backend.package.table.action.mail_out')
            </a>
            <a href="{{ route('admin.request.store', ['item_id' => $package->id, 'item_type' => get_class($package), 'type' => 'add_photo' , 'content' => 'Addition photo']) }}"
                name="confirm_item"
                data-trans-button-cancel="@lang('buttons.general.cancel')"
                data-trans-button-confirm="@lang('buttons.general.ok')"
                data-trans-title="@lang('strings.backend.general.are_you_sure')"
                data-trans-text="{{ config('package.request.add_photo.label') }}"
                class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.add_photo')">
                <i class="far fa-images text-primary" aria-hidden="true"></i> @lang('labels.backend.package.table.action.add_photo')
            </a>
            <a href="{{ route('admin.request.create', ['item_id' => $package->id, 'item_type' => get_class($package)]) }}"
               class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.add_request')">
                <i class="fas fa-tasks text-primary" aria-hidden="true"></i> @lang('labels.backend.package.table.action.add_request')
            </a>
            <a href="{{ route('admin.request.store', ['item_id' => $package->id, 'item_type' => get_class($package), 'type' => 'repack', 'content' => 'Repack into the smallest box']) }}"
                name="confirm_item"
                data-trans-button-cancel="@lang('buttons.general.cancel')"
                data-trans-button-confirm="@lang('buttons.general.ok')"
                data-trans-title="@lang('strings.backend.general.are_you_sure')"
                data-trans-text="{{ config('package.request.repack.label') }}"
                class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.repack')">
            <i class="fas fa-box text-primary" aria-hidden="true"></i> @lang('labels.backend.package.table.action.repack')
            </a>
            @if($package->status != \App\Models\Package\Package::PACKAGE_ERROR)
            <a href="{{ route('admin.'.$module.'.toggle', ['id' => $package , 'field' => 'status', 'value' => 2]) }}"
                name="confirm_item"
                data-trans-button-cancel="@lang('buttons.general.cancel')"
                data-trans-button-confirm="@lang('buttons.general.ok')"
                data-trans-title="@lang('strings.backend.general.are_you_sure')"
                data-trans-text=""
                class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.error')">
                <i class="fas fa-exclamation text-danger" aria-hidden="true"></i> @lang('labels.backend.package.table.action.error')
            </a>
            @endif

            <a href="{{ route('admin.'.$module.'.destroy', $package) }}"
                data-method="delete"
                data-trans-button-cancel="@lang('buttons.general.cancel')"
                data-trans-button-confirm="@lang('buttons.general.ok')"
                data-trans-title="@lang('strings.backend.general.are_you_sure')"
                data-trans-text=""
                class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.trash')">
                <i class="fas fa-trash text-danger" aria-hidden="true"></i> @lang('labels.backend.package.table.action.trash')
            </a>
        </div>
    </div>

</div>

