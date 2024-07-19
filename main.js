import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    name: 'sentence',
    type: 'input',
    message: 'please enter your sentence here:'
});
let word = userInput.sentence.trim().split(" ");
console.log(word);
console.log(`your word count has ${word.length} words`);
