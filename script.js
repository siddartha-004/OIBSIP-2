$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20)
       {
        $('.header').addClass("sticky1");
       }else{
        $('.header').removeClass("sticky1");
       }
    })
});
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.projects-container,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'left'});
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Active Learner','Coding Enthusiast','Backend Developer','AI passionate'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });