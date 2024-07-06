// Quiz data with questions and correct answers
const quizData = {
    q1: 'a',
    q2: 'b',
};


// Function to submit the quiz and calculate the score
function submitQuiz() {
    let score = 0;

    // Retrieve user's answers from the form inputs
    const userAnswer = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
    };

    // Check if user has selected an answer for each question
    if (!userAnswer.q1 || !userAnswer.q2) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Compare user's answers with correct answers and calculate score
    for (let question in quizData) {
        if (quizData.hasOwnProperty(question)) {
            if (quizData[question] === userAnswer[question].value) {
                score++;
            }
        }
    }

    // Display the score on the webpage
    document.getElementById('score').innerHTML = 'Score: ' + score;
}
