<div class="btn-group" role="group">
    @if($transaction->status == \App\Models\Transaction\Transaction::PENDING_TRANSACTION)
        <a href="{{ route('admin.transaction.confirm', $transaction) }}"
           name="confirm_item"
           data-trans-button-cancel="@lang('buttons.general.cancel')"
           data-trans-button-confirm="@lang('buttons.general.ok')"
           data-trans-title="@lang('strings.backend.general.are_you_sure')"
           data-trans-text=""
           class="btn btn-success btn-sm">
            <i class="fas fa-check"
               data-toggle="tooltip"
               data-placement="top"
               title="@lang('buttons.general.confirm')"></i>
        </a>
    @elseif($transaction->status == \App\Models\Transaction\Transaction::APPROVED_TRANSACTION)
        <a href="{{ route('admin.transaction.revert', $transaction) }}"
           class="btn btn-primary btn-sm">
            <i class="fas fa-undo"
               data-toggle="tooltip"
               data-placement="top"
               title="@lang('buttons.general.crud.revert')"></i>
        </a>
    @endif

    @if(in_array($transaction->status,[\App\Models\Transaction\Transaction::PENDING_TRANSACTION,\App\Models\Transaction\Transaction::REVERTED_TRANSACTION]))
        <a href="{{ route('admin.transaction.destroy', $transaction) }}"
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
    @endif
</div>