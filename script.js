$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
           $('.navbar').addClass("sticky"); 
         }else{
            $('.navbar').removeClass("sticky");
         }
         if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
         }else{
            $('.scroll-up-btn').removeClass("show");
         }
              
            })

            // navbar script 
            $('.menu-btn').click(function(){
                $('.navbar .menu').toggleClass("active") 
                $('.menu-btn i').toggleClass("active")   

                        });

});


// s(lide-up script
$('.scroll-up-btn').click(function(){
   $('html').animate({scrollTop: 0});


});

// typing animation start
var typed = new Typed(".typing",{
    strings: ["Full Stack Web Developer", "Mentor", "Researcher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2",{
    strings: ["Full Stack Web Developer",  "Mentor", "Researcher" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function myFunction() {
   var x = document.querySelector('#subshow');
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }




 function myFunction() {
   var x = document.querySelector('#read-more, #sub-show');
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }
