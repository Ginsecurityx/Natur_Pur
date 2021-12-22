window.onload = function() {

     //navigation
     const navButton = document.getElementById('nav-button');
     const nav = document.getElementById('navigation');
     
     navButton.onclick = function(){navToggle()};

     function navToggle(){
          nav.classList.toggle("open");
     };

}