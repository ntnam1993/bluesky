import '@coreui/coreui'
$(".modal").on("show.bs.modal", function(event){
    var button = $(event.relatedTarget);
    var action = button.attr('href');
    var modal  = $(this);
    if (typeof action !== 'undefined' && action !== ''){
        modal.find(".modal-content").load(action);
    }
});