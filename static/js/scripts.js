//burger menu
$(function(){
    $('.header__burger-btn').click(function(e){
        $('.header__burger-btn').toggleClass('header__burger-btn-active');
        $('.header__burger-menu').toggleClass('header__burger-menu-active');
        $('body').toggleClass('scroll__hidden');
    });
    $('.burger__btn').each(function(){
        $(this).click(function(){
            $('.header__burger-btn').removeClass('header__burger-btn-active');
            $('.header__burger-menu').removeClass('header__burger-menu-active');
            $('body').removeClass('scroll__hidden');
        });
    });
});

//Spec block tabs
$(function(){
    $('.spec__tab-title').click(function(e){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

//form no refresh for ajax
$(function(){
    $('.contacts__button').click(function(e){
        e.preventDefault();
        $('.contacts__left-success').addClass('active');
        setTimeout(function(){
            $('.contacts__left-success').removeClass('active');
        }, 5000)
    });
});

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

