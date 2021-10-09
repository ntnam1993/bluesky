@if($package_mail_out->status == \App\Models\MailOut\MailOut::SENT)
    <button class="btn btn-primary btn-sm btn-block">
        <i class="fa fa-print" aria-hidden="true"></i>@lang('labels.backend.package.table.action.print_invoice')
    </button>
    <a href="{{ route('admin.package.mail_out.cancel',['id' => $package_mail_out->package_id, 'mail_out_id' => $package_mail_out->id]) }}"
       name="confirm_item"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.ok')"
       data-trans-title="@lang('strings.backend.general.are_you_sure')"
       data-trans-text=""
       class="btn btn-danger btn-sm btn-block"
       data-toggle="tooltip" data-placement="top" title="@lang('labels.backend.package.table.action.cancel_mail_out')">
        <i class="fa fa-ban" aria-hidden="true"></i>@lang('labels.backend.package.table.action.cancel_mail_out')
    </a>
@else
    <div class="btn-group btn-group-sm" role="group">
        <a href="{{ route('admin.package.mail_out.edit', ['id' => $package_mail_out->package_id, 'mail_out_id' => $package_mail_out->id]) }}"
           class="btn btn-primary modal-ajax"
           data-toggle="modal"
           data-target="#modal-lg">
            <i class="fas fa-edit" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.edit')"></i>
        </a>
        <div class="btn-group btn-group-sm" role="group">
            <button id="userActions" type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                @lang('labels.general.more')
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="{{ route('admin.package.declaration.create', ['id' => $package_mail_out->package_id, 'mail_out_id' => $package_mail_out->id]) }}"
                   class="dropdown-item"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="@lang('labels.backend.package.table.action.add_declaration')">
                    <i class="fas fa-file-invoice text-primary mr-1"></i> @lang('labels.backend.package.table.action.add_declaration')
                </a>
                <a href="{{ route('admin.package.address.select', ['id' => $package_mail_out->package_id, 'mail_out_id' => $package_mail_out->id]) }}"
                   class="dropdown-item"
                   data-toggle="tooltip"
                   data-placement="top"
                   title="@lang('labels.backend.package.table.action.selected_address')">
                    <i class="fas fa-map-marker-alt text-primary mr-1"></i> @lang('labels.backend.package.table.action.selected_address')
                </a>
                <a href="{{ route('admin.package.mail_out.destroy', ['id' => $package_mail_out->package_id, 'mail_out_id' => $package_mail_out->id]) }}"
                   data-method="delete"
                   data-trans-button-cancel="@lang('buttons.general.cancel')"
                   data-trans-button-confirm="@lang('buttons.general.crud.delete')"
                   data-trans-title="@lang('strings.backend.general.are_you_sure')"
                   class="dropdown-item" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.delete')">
                    <i class="fas fa-trash text-danger mr-1"></i> @lang('labels.backend.package.table.action.trash')
                </a>
            </div>
        </div>
    </div>
@endif
