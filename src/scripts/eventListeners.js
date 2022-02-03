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


     //Forms checkbox abfrage
     function validateCheckbox(form) {
          const checkbox1 = this.tag1;
          const checkbox2 = this.tag2;

          if (!checkbox1.classList.contains('empty') || !checkbox2.classList.contains('empty')) {
               if (form.tag1.checked || form.tag2.checked) {
                    return true;
               } else {
                    checkbox1.classList.add('empty');
                    checkbox2.classList.add('empty');
                    return false;
               }
          } else {
               checkbox1.classList.remove('empty');
               checkbox2.classList.remove('empty');
          }
     }
     
     const formElement = document.querySelector('form');
     const formSubmit = document.querySelector('.form-submit');
     if(formSubmit) {
          formSubmit.addEventListener('click', function(){validateCheckbox(formElement)});
     }


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

     //call functions onscroll
     window.addEventListener('scroll', function () {
          // scrollDetection(1000, aktuellesIMG);
          // scrollDetection(1500, aktuellesBttn);
          if (aktuellesIMG) {
               viewportCheck(aktuellesIMG);
          }
          if (jahrestagungIMG) {
               viewportCheck(jahrestagungIMG);
          }
          if (darkBttn) {
               viewportCheck(darkBttn);
          }
          if (lightBttn) {
               viewportCheck(lightBttn);
          }
          if (infoIMG) {
               viewportCheck(infoIMG);
          }
          if (aktuellesH2) {
               viewportCheck(aktuellesH2);
          }
          if (infoH2) {
               viewportCheck(infoH2);
          }
          headerParallax(headerIMG);
     })
}