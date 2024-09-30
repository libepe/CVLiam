const card= document.getElementById('card');
const aboutme= document.getElementById('aboutmebutton');
const perfil= document.getElementById('perfilbutton');

aboutme.addEventListener('click', () => {
    card.classList.add('rotated');
});

perfil.addEventListener('click', () => {
    card.classList.remove('rotated');
});

