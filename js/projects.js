$(document).ready(function() {
// start

$("a.modal-trigger").on('click', function(event) {
    event.preventDefault();
});

// slippry initiation

jQuery('#out-of-the-box-demo').slippry({
    speed: 150,
    auto: false
});

// MODAL
// Get the button that opens the modal
var $btn = $('.modal-trigger');

// Get the button that closes the modal
var $close = $('#modal-close-trigger');

// When the user clicks on the button, open the modal
$btn.click(function () {
    // var $trigger = $(this);
    // var $modalId = $trigger.data('target')+"-modal";
    // console.log($modalId);
    $('main').hide();
    $('.modal-overlay').show();
})

// When the user clicks on <span> (x), close the modal
$close.click(function ($this) {
    $('.modal-overlay').hide();
    $('main').show();
})

// end
});
