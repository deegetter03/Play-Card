let cards = []
let sum = 0
let blackjack = false
let isalive = false
let message = ""

let newMessage = document.getElementById("para")
let esum = document.getElementById("sum")
let cardd = document.getElementById("cards")

function getrandomnum() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10;
    }
    else if (randomNum === 1) {
        return 11;
    }
    else {
        return randomNum
    }
}

function startgame() {
    isalive = true
    let firstcard = getrandomnum()
    let secondcard = getrandomnum()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    startgamee()
}

function startgamee() {
    cardd.textContent = "CARDS: "
    for (let i = 0; i < cards.length; i += 1) {
        cardd.textContent += cards[i] + " "
    }

    esum.textContent = "SUM: " + + sum
    if (sum <= 20) {
        message = "Do you want to Draw a New Card ? 😀"
    }
    else if (sum === 21) {
        message = "Wow you have got BlackJacked ! 🤩"
        blackjack = false
        isalive = false
        console.log(blackjack)
    }
    else {
        message = "Shitt you are out of the game,Restart Now ! 😑"
        isalive = false
    }

    newMessage.textContent = message
}

function newcard() {
    if (isalive === true && blackjack === false) {
        console.log("draw a new card from deck")
        let card = getrandomnum()
        sum += card
        cards.push(card)
        console.log(cards)
        startgamee()
    }
}
