$('.con li').mouseenter(function(){
    $(this).css({position: 'relative', top: '-20px'});
});


$('.con li').mouseleave(function(){
    $(this).css({position: 'static', top: 'auto'});
});


$(document).ready(function(){
    $('ul li').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
});


$(document).ready(function(){
    $('.sec2_box ul li div').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.2)');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );
});