const buttons = document.querySelectorAll('.button');
const markers = document.querySelectorAll('.marker');

buttons.forEach((button, index) => {
    button.addEventListener('mouseover', () => {
        markers.forEach((marker) => {
            marker.style.width = '0';
        });
        markers[index].style.width = '100%';
    });
});