import json from "./questions.json"
/*class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
const questions = [
    new Question(
        "What is the capital of France?",
        ["London", "Paris", "Berlin", "Madrid"],
        "Paris"
    ),
    new Question(
        "Who is CEO of Tesla?",
        ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
        "Elon Musk"
    ),
    new Question(
        "The iPhone was created by which company?",
        ["Apple", "Intel", "Amazon", "Microsoft"],
        "Apple"
    ),
    new Question(
        "How many Harry Potter books are there?",
        ["1", "4", "6", "7"],
        "7"
    ),
    new Question(
        "What is the name of the main character in the Lord of the Rings?",
        ["Harry Potter", "Frodo Baggins", "Tony Stark", "Luke Skywalker"],
        "Frodo Baggins"
    ),
    new Question(
        "What is actually Electricity?",
        ["A flow of electrons", "Matter", "Nothing", "Dark Matter"],
        "A flow of electrons"
    ),
    // generate a chemistry question

    new Question(
        "What is the chemical formula of water?",
        ["H2O", "H2O2", "H2O3", "H2O4"],
        "H2O"
    ),
    new Question(
        "What is the chemical formula of carbon dioxide?",
        ["CO2", "CO3", "CO4", "CO5"],
        "CO2"
    ),
    new Question(
        "What is the chemical formula of carbon monoxide?",
        ["CO", "CO2", "CO3", "CO4"],
        "CO"
    ),
    new Question(
        "What is the chemical formula of carbon?",
        ["C", "C2", "C3", "C4"],
        "C"
    ),
    new Question(
        "What is the chemical formula of oxygen?",
        ["O", "O2", "O3", "O4"],
        "O2"
    ),
    new Question(
        "What is the chemical formula of hydrogen?",
        ["H", "H2", "H3", "H4"],
        "H2"
    ),
    new Question(
        "What is the chemical formula of nitrogen?",
        ["N", "N2", "N3", "N4"],
        "N2"
    ),
    //generate a physics question
    new Question(
        "What is the formula for the speed of light?",
        ["c = f x λ", "c = λ x f", "c = f / λ", "c = λ / f"],
        "c = f x λ"
    ),
    new Question(
        "What is the formula for the speed of sound?",
        ["v = f x λ", "v = λ x f", "v = f / λ", "v = λ / f"],
        "v = f / λ"
    ),
    //generate a biology question
    new Question(
        "What is the name of the largest organ in the human body?",
        ["Skin", "Heart", "Brain", "Liver"],
        "Skin"
    ),
    new Question(
        "What is the name of the largest bone in the human body?",
        ["Femur", "Tibia", "Humerus", "Fibula"],
        "Femur"
    ),
    new Question(
        "What is the name of the largest muscle in the human body?",
        ["Biceps", "Triceps", "Quadriceps", "Gluteus Maximus"],
        "Gluteus Maximus"
    ),
    //generate a geography question
    new Question(
        "What is the capital of the United States?",
        ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
        "Washington, D.C."
    ),
    new Question(
        "What is the capital of the United Kingdom?",
        ["London", "Birmingham", "Manchester", "Liverpool"],
        "London"
    ),
    new Question(
        "What is the capital of Germany?",
        ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        "Berlin"
    ),
    new Question(
        "What is the capital of Italy?",
        ["Rome", "Milan", "Naples", "Turin"],
        "Rome"
    ),
    //generate a history question
    new Question(
        "What year did World War II end?",
        ["1945", "1944", "1943", "1942"],
        "1945"
    ),
    new Question(
        "What year did World War I end?",
        ["1918", "1917", "1916", "1915"],
        "1918"
    ),
    new Question(
        "What year did the Vietnam War end?",
        ["1975", "1974", "1973", "1972"],
        "1975"
    ),
    new Question(
        "What year did the Korean War end?",
        ["1953", "1952", "1951", "1950"],
        "1953"
    ),
    new Question(
        "What year did the Cold War end?",
        ["1991", "1990", "1989", "1988"],
        "1991"
    ),
    new Question(
        "What is the name of the programming language used to create this website?",
        ["JavaScript", "Python", "C#", "Java"],
        "JavaScript"
    ),


    //generate an literature question
    new Question(
        "Who wrote the novel 'The Lord of the Rings'?",
        ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
        "J.R.R. Tolkien"
    ),

    new Question(
        "What is the name of the library used to create this website?",
        ["React", "Angular", "Vue", "Svelte"],
        "React"
    ),



];
*/
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
//console.log(JSON.stringify(questions));