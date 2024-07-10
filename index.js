const submitButton = document.getElementById('button_submit')
const inputField = document.getElementById('input_word')
const deleteItems = document.getElementsByClassName('page-1')
let showItems = document.getElementsByClassName('page-2')
let wordToPlay = document.getElementById("word_to_play")
let head = document.getElementById("head")
let body = document.getElementById("body")
let rightHand = document.getElementById("right_hand")
let leftHand = document.getElementById("left_hand")
let rightLeg = document.getElementById("right_leg")
let leftLeg = document.getElementById("left_leg")
let emptyWord = document.getElementById('word_container')


submitButton.addEventListener('click', () => {
    const wordPlay = inputField.value
    // wordToPlay.innerHTML = wordPlay
    for (let i = 0; i < deleteItems.length; i++) {
        deleteItems[i].style.display = "none"; 
    }
    for (let i = 0; i < showItems.length; i++) {
        showItems[i].style.display = "block"; 
    }
    
    const letters = wordPlay.split("")
    for (letter in letters) {
        let emptyCell = document.createElement('span')
        emptyCell.classList.add("word_letter")
        emptyCell.innerHTML = letters[letter]
        emptyCell.style.textTransform = 'uppercase'
        emptyWord.appendChild(emptyCell)
    }
    
})

head.style.visibility = 'hidden'
body.style.visibility = 'hidden'
rightHand.style.visibility = 'hidden'
leftHand.style.visibility = 'hidden'
rightLeg.style.visibility = 'hidden'
leftLeg.style.visibility = 'hidden'

// let letters = document.querySelectorAll("button")
// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i].value)     
// }
