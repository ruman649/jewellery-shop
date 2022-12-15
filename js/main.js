let nav = document.querySelector('.navigation_bar');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll');
    }
    else{
        nav.classList.remove('scroll');
    }
}




let link = document.querySelectorAll('.nav-link');
let collapse = document.querySelector('.navbar-collapse.collapse');
link.forEach(function (e) { 
    e.addEventListener('click', function(){
        collapse.classList.remove('show');
    })
 })



 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
 const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))