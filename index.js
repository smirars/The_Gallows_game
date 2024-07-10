const submitButton = document.getElementById('button_submit')
const inputField = document.getElementById('input_word');


submitButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    console.log(inputField.value)
})