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
const letterButtons = document.querySelectorAll('button')
const winWindow = document.getElementById('modal_win')
const loseWindow = document.getElementById('modal_lose')
const loseWordShow = document.getElementById('lose_word')
let letters = []
let lettersToAnswer = []
let misses = 0
let correct = 0


function showWinModal() {
    winWindow.classList.add('modal_show')
    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].disabled = true
    }
}

function showLoseModal() {
    loseWindow.classList.add('modal_show')
    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].disabled = true
    }
}

function showInput() {
    const btn = document.querySelector(".password__btn")
    const input = document.querySelector(".word_input")

    btn.addEventListener('click', () => {
        btn.classList.toggle("active")

        if (input.getAttribute("type") === "password") {
            input.setAttribute("type", "text")
        } else {
            input.setAttribute("type", "password")
        }
    })
}

showInput()


for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', () => {
        let found = false
        for (let j = 0; j < letters.length; j++) {
            if (letterButtons[i].value == letters[j]) {
                letterButtons[i].style.backgroundColor = 'rgba(0, 255, 0, 0.7)'
                letterButtons[i].disabled = true
                lettersToAnswer[j].style.color = 'black'
                correct += 1
                found = true
            }
        }

        if (!found) {
            letterButtons[i].style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
            letterButtons[i].disabled = true
            misses += 1
            humanDrawing(misses)
        }

        if (correct == letters.length) {
            showWinModal()
        }
    })
}


submitButton.addEventListener('click', () => {
    if (inputField.value === '') {
        alert("Поле ввода не может быть пустое!")
    } else  if (!(/^[\u0410-\u044f]+$/.test(inputField.value))) {
        alert("Поле ввода должно содержать только русские буквы!")
        inputField.value = ''
    } else if (inputField.value.length < 4) {
        alert("Слово слишком короткое!")
        inputField.value = ''
    } else if (inputField.value.length > 11) {
        alert("Слово слишком длинное!")
        inputField.value = ''
    } else {
        const wordPlay = inputField.value
        loseWordShow.innerHTML = wordPlay
        // wordToPlay.innerHTML = wordPlay
        for (let i = 0; i < deleteItems.length; i++) {
            deleteItems[i].style.display = "none"; 
        }
        for (let i = 0; i < showItems.length; i++) {
            showItems[i].style.display = "block"; 
        }
        
        letters = wordPlay.split("")
        for (letter in letters) {
            let emptyCell = document.createElement('span')
            emptyCell.classList.add("word_letter")
            emptyCell.innerHTML = letters[letter]
            emptyCell.style.textTransform = 'uppercase'
            emptyWord.appendChild(emptyCell)
        }
        lettersToAnswer = emptyWord.children
    }
    
})

function humanDrawing(numberOfMisses) {
    switch (numberOfMisses) {
        case 1: 
            head.style.visibility = 'visible'
            break
        case 2:
            body.style.visibility = 'visible'
            break
        case 3: 
            rightHand.style.visibility = 'visible'
            break
        case 4:
            leftHand.style.visibility = 'visible'
            break
        case 5: 
            rightLeg.style.visibility = 'visible'
            break
        case 6:
            leftLeg.style.visibility = 'visible'
            showLoseModal()
            break

    }
}

head.style.visibility = 'hidden'
body.style.visibility = 'hidden'
rightHand.style.visibility = 'hidden'
leftHand.style.visibility = 'hidden'
rightLeg.style.visibility = 'hidden'
leftLeg.style.visibility = 'hidden'

