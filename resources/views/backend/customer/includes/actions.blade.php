<div class="btn-group btn-group-sm" role="group">
    <a href="{{ route('admin.customer.edit',$customer) }}"
       class="btn btn-info"
       data-toggle="tooltip"
       data-placement="top"
       title="@lang('labels.backend.customer.edit')">
        <i class="fas fa-edit"></i>
    </a>
    <a href="{{ route('admin.customer.duplicate',$customer) }}"
       data-toggle="tooltip"
       data-placement="top"
       name="confirm_item"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.ok')"
       data-trans-title="@lang('strings.backend.general.are_you_sure')"
       title="@lang('buttons.general.crud.copy')" class="btn btn-primary">
        <i class="fas fa-copy"></i>
    </a>
    <a href="{{ route('admin.customer.destroy',$customer) }}"
       data-method="delete"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.crud.delete')"
       data-trans-title="@lang('strings.backend.general.are_you_sure')"
       class="btn btn-danger"
       data-toggle="tooltip"
       data-placement="top"
       title="@lang('buttons.general.crud.delete')">
        <i class="fas fa-trash mr-1"></i>
    </a>
</div>
