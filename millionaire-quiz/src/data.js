import json from "./questions.json"
export const questions  = json
export let chosenQuestions = [];
export function generateQuestions() {
    let chosenQuestions = [];
    while (chosenQuestions.length < 15) {
        const question = questions[Math.floor(Math.random() * questions.length)];
        if (!chosenQuestions.includes(question))
            chosenQuestions.push(question);
    }
    return chosenQuestions;
}
chosenQuestions = generateQuestions();
console.log(json);
console.log(questions);
