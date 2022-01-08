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
}