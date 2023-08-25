// tratamento de erros nos inputs de email
const form1 = document.querySelector('.c-content__form1')
const form2 = document.querySelector('.c-content__form2')

const input_email1 = document.querySelector("#input-email1")
const input_email2 = document.querySelector("#contact_email")

const span_error1 = document.querySelector('#error-email1')
const span_error2 = document.querySelector('#error-email2')

input_email1.addEventListener('invalid', (ev)=>{
    ev.preventDefault()

    span_error1.style.display = "block"
    input_email1.classList.add('error-email-input')
})

form1.addEventListener('submit', (ev)=>{
    if (!input_email1.validity.valid) {
        ev.preventDefault()
    }
})

input_email2.addEventListener('invalid', (ev)=>{
    ev.preventDefault()

    span_error2.style.display = "block"
    input_email2.classList.add('error-email-input')

})

form2.addEventListener('submit', (ev)=>{
    if (!input_email1.validity.valid) {
        ev.preventDefault()
    }
})