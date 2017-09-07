$(document).ready(function () {
    $('#layer-one').mousemove(function (e) {
        parallax(e, this, 1);
        parallax(e, document.getElementById('layer-two'), 4);
        parallax(e, document.getElementById('layer-three'), 2);
        parallax(e, document.getElementById('layer-four'), 3);

    });


$('#a').click(function(e) {
  e.preventDefault();
  $('#b').removeClass('active');
  $(this).addClass('active');
  $('#first-team').show();
 $( '#second-team' ).hide();
});
$('#b').click(function(e) {
  e.preventDefault();
  $('#a').removeClass('active');
  $('#b').addClass('active');
  $('#second-team').show();
 $( '#first-team' ).hide();
});
// if($('#first-team').is(':visible')){
//   $('#a').addClass('active');
//   $('#b').removeClass('active');
// };
//  if($('#second-team').is(':visible')) {
//   $('#a').removeClass('active');
//   $('#b').addClass('active');
// };

// end function
 $('.owl-carousel').owlCarousel({
     items:5,
     loop:true,
     autoplay:true,
     autoplayTimeout:2500,
     smartSpeed:1000,
     autoplayHoverPause:true, 
     dots:false,
     nav:false,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
     }
    });

    $(function(){
        $(".up a").click(function(e){
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 1000);
        });

        window.onscroll = function() {scrollFunction()};
        $('.up').css('display','none');
        function scrollFunction() {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                $('.up').css('display','block');
            } else {
                $('.up').css('display','none');
            }
        }
    });
      

});
function parallax(e, target, layer) {
    var layer_coeff = 100 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};