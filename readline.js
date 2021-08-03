const ReadLine = require('readline');
const readwrite = ReadLine.createInterface({ input: process.stdin, output: process.stdout });

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let answer = num1 + num2;



readwrite.on("close", () => 'Thank you for playing this game! \n');

readwrite.question(`What is the result of ${num1} + ${num2} \n `,
    (userInput) => {

        if (userInput.trim() == answer) {
            console.log(" The answer is correct !!!\n");
            readwrite.close();
        }
        else {
            readwrite.setPrompt(" Please your answer is incorrect\n");
            readwrite.prompt();
            readwrite.on("line", (attempt) => {
                if (attempt.trim() == answer) {
                    readwrite.close();
                } else {
                    readwrite.setPrompt(" Please your answer is incorrect\n");
                    readwrite.prompt();
                }
            });

        }
    });
