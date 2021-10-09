<div class="btn-group btn-group-sm" role="group">
    <a href="{{ route('admin.'.$module.'.shipping.show', [$package,$mail_out,'customer_id' => $customer->id]) }}"
       class="btn btn-success btn-sm"
       data-toggle="tooltip"
       data-placement="top"
       title="@lang('labels.backend.customer.select')">
        <i class="fa fa-check"></i>
        @lang('buttons.general.select')
    </a>
    <div class="btn-group btn-group-sm" role="group">
        <button type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            @lang('labels.general.more')
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <a href="{{ route('admin.customer.edit',[$customer, 'back_link' => base64_encode(route('admin.'.$module.'.shipping.show', [$package,$mail_out,'customer_id' => $customer->id]))]) }}"
               class="dropdown-item"
               data-toggle="tooltip"
               data-placement="top"
               title="@lang('labels.backend.customer.edit')">
                <i class="fas fa-edit text-primary mr-1"></i>
                @lang('labels.backend.customer.edit')
            </a>
            <a href="{{ route('admin.customer.destroy',$customer) }}"
               data-method="delete"
               data-trans-button-cancel="@lang('buttons.general.cancel')"
               data-trans-button-confirm="@lang('buttons.general.crud.delete')"
               data-trans-title="@lang('strings.backend.general.are_you_sure')"
               class="dropdown-item"
               data-toggle="tooltip"
               data-placement="top"
               title="@lang('buttons.general.crud.delete')">
                <i class="fas fa-trash text-danger mr-1"></i> @lang('labels.backend.customer.table.action.trash')
            </a>
        </div>
    </div>
</div>
