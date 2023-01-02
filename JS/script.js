$(function () {
    $('.toggle').on('click' ,function(event) {
        $(this).toggleClass('active');
        $('body').toggleClass('night');				
    });
});


