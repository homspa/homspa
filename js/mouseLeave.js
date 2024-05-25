document.addEventListener('DOMContentLoaded', function () {
    const formPopup = document.querySelector('.Content-PopupWithIframe');
    const closeButton = document.querySelector('.close-btn-form');
    const buttonSubscribe = document.querySelector('.Subscribe');

    formPopup.classList.add('visible');

    buttonSubscribe.addEventListener('click', showPopup);

    document.addEventListener('mouseleave', function(event) {
        if (event.clientY <= 0) {
            showPopup();
        }
    });

    closeButton.addEventListener('click', function () {
        formPopup.classList.remove('visible');
    })
    
    function showPopup() {
        formPopup.classList.add('visible');
    }
})