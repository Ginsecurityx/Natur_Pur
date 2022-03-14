//onclick ralleyicons
const ralleyIcons = document.getElementById('ralleyicons');
for (let i = 0; i < ralleyIcons.children.length; i++) {
     ralleyIcons.children[i].addEventListener('click', function(){triggerModal(info, i);});
}

const closeButtons = document.querySelectorAll('.close');
const info = document.querySelector('.infoboxen-wrapper');

for (let i = 0; i < closeButtons.length; i++) {
     closeButtons.item(i).addEventListener('click', function(){closeModal(info, i);});
}

function triggerModal(parent, index) {
     console.log(index, parent);
     parent.children[index].classList.toggle('active', true);
}

function closeModal(parent, index) {
     parent.children[index].classList.toggle('active', false);

}