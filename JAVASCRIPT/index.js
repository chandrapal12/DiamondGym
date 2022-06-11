burger = document.querySelector('.hamburger');
nav = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('invisible')
    rightnav.classList.toggle('invisible')
    nav.classList.toggle('h-nav')
})