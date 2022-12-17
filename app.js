$(document).ready(function(){

$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider_dots , slider2-dots',
    fade:true
});

$('.slider2').slick({
    arrows:false,
    dots:true,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode:true,
    autoplay:true,
    appendDots:'slider2-dots'
});

});