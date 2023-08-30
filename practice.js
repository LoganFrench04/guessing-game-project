const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let askGuess = () => {
    rl.question("Enter a guess: ", num => {
        let answer = Number(num)
        // checkGuess(answer)
        if (checkGuess(answer)) {
            console.log('You win!')
            rl.close()
        } else {
            askGuess()
        }
        //rl.close()
    })

}
askGuess()

let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const secretNumber = randomInRange(0, 100);

let checkGuess = (num) => {
    if (num > secretNumber) {
        console.log('Too high.')
        return false;
    }
    if (num < secretNumber) {
        console.log("Too low.")
        return false;
    } else {
        console.log('Correct!');
        return true
    }
}

// console.log(randomInRange(15, 20)); // 16
// console.log(randomInRange(15, 20)); // 17
// console.log(randomInRange(15, 20)); // 20
