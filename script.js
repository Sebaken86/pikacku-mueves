$(document).ready(function() {
    $('#move-button').on('click mouseover', function() {
        animatePikachu();
    });
});

function animatePikachu() {
    $('.pikachu').animate({
        'left': '+=50px',
        'top': '+=20px'
    }, 500, function() {
        $(this).animate({
            'left': '-=50px',
            'top': '-=20px'
        }, 500);
    });
}