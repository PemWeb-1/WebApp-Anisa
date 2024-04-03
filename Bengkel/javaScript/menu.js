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
document.querySelectorAll('.btnSearch').forEach(item => {
    item.addEventListener('click', (e) => {
      item.setAttribute('target', 'search.html8_self'); 
    });
  });