<div class="btn-group" role="group">
    <a href="{{ route('admin.declaration.edit', $declaration) }}"
       data-toggle="modal"
       data-target="#modal-lg"
       title="@lang('buttons.general.crud.edit')"
       class="btn btn-primary btn-sm modal-ajax">
        <i class="fas fa-edit"
           data-toggle="tooltip"
           data-placement="top"
           title="@lang('buttons.general.crud.edit')"></i>
    </a>
    <a href="{{ route('admin.declaration.destroy', $declaration) }}"
       data-method="delete"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.crud.delete')"
       data-trans-title="@lang('strings.backend.general.are_you_sure')"
       class="btn btn-danger btn-sm"
       data-toggle="tooltip"
       data-placement="top"
       title="@lang('buttons.general.crud.delete')">
        <i class="fas fa-trash"></i>
    </a>
</div>