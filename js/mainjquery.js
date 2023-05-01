$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<span class="arr_1"><i class="fa-solid fa-arrow-left"></i></span>','<span class="arr_2"><i class="fa-solid fa-arrow-right"></i></span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  // counter

// $(selector).countMe(delay,speed)
$("#count1").countMe(3333,1);

// $(selector).countMe(delay,speed)
$("#count2").countMe(85,8);

// $(selector).countMe(delay,speed)
$("#count3").countMe(85,8);

$("#count4").countMe(85,8);
