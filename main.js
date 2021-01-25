const burger = document.getElementById('burger');
const navUl = document.getElementById('navUl');
const header = document.getElementById('header');

burger.addEventListener('click', ()=> {
      burger.classList.toggle('toggle');
      navUl.classList.toggle('toggle');
      header.classList.toggle('toggle');
});
navUl.addEventListener('click', ()=> {
      burger.classList.remove('toggle');
      navUl.classList.remove('toggle');
      header.classList.remove('toggle');
});