//adds functionality to popup close button
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
});

function closePopup() {
    popup.style.display = 'none';
    window.location.href='home.html';
}