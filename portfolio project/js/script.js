const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector('nav .link');
const header = document.querySelector('.header');


toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
    header.classList.toggle('skew');
})

$(`#myDropdown`).on(`show.bs.dropdown`, function() {

})

//To stop carousel from changing pictures so fast//
$('.carousel').carousel({
    interval: false,
  });


//Quiz//
