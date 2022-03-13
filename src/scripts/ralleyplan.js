// const ralleyIcons = document.getElementById('ralleyicons');
// for (let i = 0; i < ralleyIcons.children.length; i++) {
     //   ralleyIcons.children[i].addEventListener('click', )
     // }

     
const splash = document.getElementById('splash');
const sonne = document.getElementById('sonne');
const biene = document.getElementById('biene');
const erdbeere = document.getElementById('erdbeere');
const moos = document.getElementById('moos');

const infoSplash = document.querySelector('.infobox-splash');
const infoMoos = document.querySelector('.infobox-moos');
const infoSonne = document.querySelector('.infobox-sonne');
const infoBienen = document.querySelector('.infobox-bienen');
const infoErdbeere = document.querySelector('.infobox-erdbeere');

splash.addEventListener('click', function() {triggerModal(infoSplash);});
sonne.addEventListener('click', () => {triggerModal(infoSonne);});
biene.addEventListener('click', () => {triggerModal(infoBienen);});
erdbeere.addEventListener('click', () => {triggerModal(infoErdbeere);});
moos.addEventListener('click', () => {triggerModal(infoMoos);});

function triggerModal(el) {
     console.log(el);
     el.classList.toggle('active');
}