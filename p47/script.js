const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Highly Technical Markup Language",
        correct: "a"
    },
    {
        question: "What is the most commonly used programming language?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Javascript",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Creative Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a"
    },
    {
        question: "Which company developed the Python programming language?",
        a: "Google",
        b: "Facebook",
        c: "Apple",
        d: "Guido van Rossum (independent developer)",
        correct: "d"
    },
    {
        question: "Which data type is used to store a single character in Python?",
        a: "string",
        b: "int",
        c: "char",
        d: "boolean",
        correct: "a"
    },
    {
        question: "What is the primary function of a database management system?",
        a: "Create web pages",
        b: "Manage data",
        c: "Write computer programs",
        d: "Provide Internet access",
        correct: "b"
    },
    {
        question: "Which programming language is often used for data analysis and machine learning?",
        a: "Python",
        b: "Java",
        c: "C#",
        d: "PHP",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnsers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = quizData[currentQuiz].a
    b_text.innerText = quizData[currentQuiz].b
    c_text.innerText = quizData[currentQuiz].c
    d_text.innerText = quizData[currentQuiz].d
}

function deselectAnsers() {
    answerEls.forEach((ans) => {
        ans.checked = false;
    })
}

function getSelected() {
    let answer
    answerEls.forEach((ans) => {
        // accedemos a la propiedad id como si fuera un objeto
      if(ans.checked) {answer = ans.id}
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer === quizData[currentQuiz].correct) {
        score++
    }
    currentQuiz++
    if (currentQuiz <= quizData.length - 1) {
        loadQuiz()
    } else {
        quiz.innerHTML = `<h2>Your answered ${score} out of ${quizData.length} questions correctly.</h2>
        <button onClick="location.reload()">Reload</button>`
    }
})