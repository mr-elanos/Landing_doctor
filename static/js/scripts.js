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

educationModalBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        educationModals.forEach(modal =>{
            if (modal.id === btn.getAttribute('data-education-modal')) {
                modal.classList.remove('hidden');
                const closeBtn = modal.firstElementChild;
                closeBtn.addEventListener('click', function(e){
                    modal.classList.add('hidden')
                })
            };
        })
    })
});