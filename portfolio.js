
function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_gkbeme4', 
            'template_s3y23zi',
            event.target,
            '2IfYNLlIBARLUamsK'
        ).then(()=>{
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch (() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on iraklisroussos@gmail.com"
            )
        })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"
}