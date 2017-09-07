$(document).ready(function () {

// divisions switch
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
// end function
//carousel
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
// end function
//scroll to top
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
// end function
      //countdown
// Set the date we're counting down to
var countDownDate = new Date("Oct 22, 2017 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " + "UNTIL NEXT MATCH";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "MATCHDAY";
    }
}, 1000);
// end function
});