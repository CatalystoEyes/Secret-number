
let secretNumber = Math.trunc(Math.random()* 20) + 1

console.log(`The secret number: ${secretNumber}`)

let messageText = function(message) {
    document.querySelector('.message').textContent = message}

let centerNumber = document.querySelector('.number')

let score = 10
let highScore = 0

document.querySelector(".check").addEventListener('click', function(){
    let guessNumber = Number(document.querySelector(".guess").value)

    if(!guessNumber){
        messageText("Вы ввели пустую строку!")
    }else if(guessNumber === secretNumber){
        messageText("✔️Вы угадали!")
        centerNumber.textContent = guessNumber
        document.body.style.cssText = `
        background: -webkit-linear-gradient(45deg, rgb(0, 255, 154), rgb(0, 255, 64));
        background: -moz-linear-gradient(45deg, rgb(0, 255, 154), rgb(0, 255, 64));
        background: linear-gradient(45deg, rgb(0, 255, 154), rgb(0, 255, 64));
        `
        centerNumber.style.cssText = "border-color: #00CC66;"
        secretNumber = undefined
        if(score > highScore){
            highScore = score
            let highscoreText = document.querySelector(".highscore").textContent = highScore        
        }
    } else if (guessNumber !== secretNumber){
        if (guessNumber > secretNumber){
            messageText("Секретное число меньше!")
            score--
            document.querySelector(".score").textContent = score
        } else if ((guessNumber < secretNumber)){
            messageText("Секретное число больше!")
            score--
            document.querySelector(".score").textContent = score
        }}
        if(score < 1){
            messageText("❌Вы проиграли!")
            document.body.style.cssText = `
            background: -webkit-linear-gradient(0deg, rgb(255, 30, 30), rgb(255, 90, 43));
            background: -moz-linear-gradient(0deg, rgb(255, 30, 30), rgb(255, 90, 43));
            background: linear-gradient(0deg, rgb(255, 30, 30), rgb(255, 90, 43));
            `
            centerNumber.style.cssText = "border-color: #FF6347;"
            score = 1
            secretNumber = undefined
        }

        document.querySelector('.again').addEventListener("click", function(){
            secretNumber = Math.trunc(Math.random()* 10) + 1
            centerNumber.textContent = '?'
            document.querySelector(".score").textContent = 10
            score = 10
            document.body.style.cssText = `
            background: radial-gradient(
                circle,
                rgba(35, 34, 41, 1) 51%,
                rgba(56, 59, 60, 1) 100%
              );`
            centerNumber.style.cssText = "border-color: rgb(122, 122, 122)"
            messageText("Начните угадывать...")
            document.querySelector(".guess").value = ""
        })
    }) 


