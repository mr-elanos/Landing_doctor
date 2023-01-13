//Spec block tabs
const educTabs = document.querySelectorAll('[data-spec-tab]');
const educCards = document.querySelectorAll('[data-spec-tab-content]');

educTabs.forEach(tab => {
    tab.addEventListener('click', function(e){
        educCards.forEach(card =>{
            (card.id === tab.getAttribute('data-spec-tab')) ? card.classList.toggle('hidden') : card.classList.add('hidden');
            if (card.classList.contains('hidden')){
                card.previousElementSibling.firstElementChild.classList.remove('up');
                card.previousElementSibling.firstElementChild.classList.add('down');
            } else{
                card.previousElementSibling.firstElementChild.classList.remove('down');
                card.previousElementSibling.firstElementChild.classList.add('up');
            }         
        })
    })
});

//Education block modals
const educationModalBtns = document.querySelectorAll('[data-education-modal]');
const educationModals = document.querySelectorAll('[data-education-modal-content]');
let body = document.querySelector('body');

educationModalBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        educationModals.forEach(modal =>{
            if (modal.id === btn.getAttribute('data-education-modal')) {
                modal.classList.remove('hidden');
                body.classList.add('scroll__hidden');
                const closeBtn = modal.firstElementChild;
                closeBtn.addEventListener('click', function(e){
                    modal.classList.add('hidden')
                    body.classList.remove('scroll__hidden');
                })
            };
        })
    })
});

//burger menu
let menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-menu');
let navBtns = document.querySelectorAll('.header__burger-li')

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