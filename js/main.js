


// active

 $(document).on('click', 'a', function(){
   $(this).addClass('active').siblings().removeClass('active')
 });

// menu section


 $(document).ready(function(){
   $('#menu').click(function(){
 $(this).toggleClass('fa-times');
 $('.navbar').toggleClass('nav-toggle');
   });

   $(window).on('load scroll',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle')

     if($(window).scrollTop() > 0){
      $('header').addClass('stick');
         }else{
          $('header').removeClass('stick');
        }
  });

 });




// auto section


 let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}