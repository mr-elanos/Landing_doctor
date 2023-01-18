//burger menu
const menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-menu');
let navBtns = document.querySelectorAll('.burger__btn');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('header__burger-btn-active');
	menu.classList.toggle('header__burger-menu-active');
    body.classList.toggle('scroll__hidden');
})
navBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
    menuBtn.classList.remove('header__burger-btn-active');
	menu.classList.remove('header__burger-menu-active');
    body.classList.remove('scroll__hidden');
    })
})

//Education block modals
const educationModalBtns = document.querySelectorAll('[data-education-modal]');
const educationModals = document.querySelectorAll('[data-education-modal-content]');
const body = document.querySelector('body');
educationModalBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        educationModals.forEach(modal =>{
            if (modal.id === btn.getAttribute('data-education-modal')) {
                modal.classList.add('active');
                const autoPadding = window.innerWidth - document.querySelector('.education').offsetWidth + 'px';
                body.style.paddingRight = autoPadding;
                body.classList.add('scroll__hidden');
                const closeBtn = modal.firstElementChild;
                closeBtn.addEventListener('click', function(e){
                    modal.classList.remove('active')
                    body.style.paddingRight = 0;
                    body.classList.remove('scroll__hidden');
                })
            };
        })
    })
});

//Spec block tabs
$(function(){
    $('.spec__tab-title').click(function(e){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

//form no refresh for ajax
const  formBtn = document.querySelector('.contacts__button');
const formSuccess = document.querySelector('.contacts__left-success');
formBtn.addEventListener('click', function(e){
    formSuccess.classList.add('active');
    setTimeout(function(){
        formSuccess.classList.remove('active');
    }, 5000)
});