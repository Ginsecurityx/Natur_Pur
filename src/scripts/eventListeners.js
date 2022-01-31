window.onload = function() {

     //navigation
     const navButton = document.getElementById('nav-button');
     const nav = document.getElementById('navigation');
     const bar1 = document.getElementById('burger-bar-1')
     const bar2 = document.getElementById('burger-bar-2')
     const bar3 = document.getElementById('burger-bar-3')
     
     navButton.onclick = function(){navToggle()};
     window.onscroll = function(){navClose()};
     
     function navToggle(){
          //toggle nav
          nav.classList.toggle("open");

          //hamburger animation
          bar1.classList.toggle("active");
          bar2.classList.toggle("active");
          bar3.classList.toggle("active");
          navButton.classList.toggle("active");
     };
     
     function navClose(){
          //close nav onscroll
          nav.classList.remove("open");

          //remove classes onscroll
          bar1.classList.remove("active");
          bar2.classList.remove("active");
          bar3.classList.remove("active");
          navButton.classList.remove("active");
     };



     //scroll animations
     let scrollPos = 0;

     const introductionIMG = document.querySelector('.introduction-img');
     const aktuellesIMG = document.querySelector('.aktuelles-image');
     const aktuellesBttn = document.querySelector('.aktuelles-button');
     const jahrestagungIMG = document.querySelector('.jahrestagung-img');

     //scroll Direction
     function scrollDirection() {
          if ((document.body.getBoundingClientRect()).top > scrollPos) {
               console.log('up')
          } else {
               console.log('down')
          }
          scrollPos = (document.body.getBoundingClientRect()).top;
     }
     window.onscroll = function () {scrollDirection()};
     

     //scroll Detection
     function scrollDetection(top, element) {
          if (document.body.scrollTop > top || document.documentElement.scrollTop > top) {
               console.log(document.documentElement.scrollTop);
               element.classList.add('show');
               console.log(element.scrollTop);
          } else {
               element.classList.remove('show');
          }
     }    

     //Viewport check
     function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
     }


     //parallax
     function scrollParallax(element) {
          const distance = window.scrollY;
          if(isInViewport(element)) {
               element.style.transform = `translateY(${distance *-0.2}px)`;
               console.log('distance' + distance);
          }
     }
     
     window.addEventListener('scroll', function () {
          scrollDetection(1000, aktuellesIMG);
          scrollDetection(1500, aktuellesBttn);
          scrollParallax(introductionIMG);
     })
     // window.addEventListener('scroll', function () {})
}