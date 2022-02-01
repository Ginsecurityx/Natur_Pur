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
     const headerIMG = document.querySelector('.header-img');
     const introductionIMG = document.querySelector('.introduction-img');
     const aktuellesIMG = document.querySelector('.aktuelles-image');
     const aktuellesH2 = document.querySelector('.headline-aktuelles');
     const jahrestagungIMG = document.querySelector('.jahrestagung-img');
     const infoIMG = document.querySelector('.informationen-img');
     const infoH2 = document.querySelector('.headline-infos');
     const darkBttn = document.querySelector('.button-dark');
     const lightBttn = document.querySelector('.button-light');


     //scroll Direction
     let scrollPos = 0;
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
     function viewportCheck(element) {
          let rect = element.getBoundingClientRect();
          let y = rect.y;
          if (y > window.innerHeight) {
               element.classList.remove('show');
          } else {
               setTimeout(function(){
                    element.classList.add('show');
               },500);
          }
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
     }


     //parallax
     function headerParallax(element) {
          const distance = window.pageYOffset;
          element.style.transform = `translateY(${distance *-0.3}px)`;
          console.log('distance' + distance);
     }

     window.addEventListener('scroll', function () {
          // scrollDetection(1000, aktuellesIMG);
          // scrollDetection(1500, aktuellesBttn);
          viewportCheck(aktuellesIMG);
          viewportCheck(jahrestagungIMG);
          viewportCheck(darkBttn);
          viewportCheck(lightBttn);
          viewportCheck(infoIMG);
          viewportCheck(aktuellesH2);
          viewportCheck(infoH2);
          headerParallax(headerIMG);
     })
     // window.addEventListener('scroll', function () {})
}

function validateCheckbox(form) {

     const checkboxes = document.querySelector('.tag-checkbox')
     if (form.tag1.checked || form.tag2.checked) {
     return true;
     } else {
     checkboxes.classList.add('empty');
     return false;
     }
     }

     const form = document.querySelector('form');

     form.onsubmit = function(){validateCheckbox(form)};