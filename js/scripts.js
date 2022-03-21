 var el = document.querySelector('body');
el.style.display = 'none';
document.addEventListener("DOMContentLoaded", function() {    
  /*global fetch, response*/
fetch("../partials/header.html")
    .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });  
});      


   
window.addEventListener('load', (event) => {
el.style.display = 'block';

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-link');
const menuLength = menuItem.length
for (let i = 0; i<menuLength; i++){
if (menuItem[i].href === currentLocation){
menuItem[i].classList.add('active');
menuItem[i].setAttribute("aria-current", "true");

}
}    


    
    
    
});    