const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let askGuess = () => {
    rl.question("Enter a guess: ", num => {
       let answer = Number(num)
        checkGuess(answer)
        rl.close()
    })

}
askGuess()

const secretNumber = 1;

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
