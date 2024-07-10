const submitButton = document.getElementById('button_submit')
const inputField = document.getElementById('input_word')
const deleteItems = document.getElementsByClassName('page-1')
let showItems = document.getElementsByClassName('page-2')
let wordToPlay = document.getElementById("word_to_play")

submitButton.addEventListener('click', () => {
    const wordPlay = inputField.value
    console.log(wordPlay)
    wordToPlay.innerHTML = wordPlay
    for (let i = 0; i < deleteItems.length; i++) {
        deleteItems[i].style.display = "none"; 
    }
    for (let i = 0; i < showItems.length; i++) {
        showItems[i].style.display = "block"; 
    }  
})
