const questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
    answer: 0
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  if (!document.getElementById("question")) return;

  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  if (selected === questions[currentQuestion].answer) score++;
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    localStorage.setItem("score", Math.round((score / questions.length) * 100));
    window.location.href = "result.html";
  } else {
    loadQuestion();
  }
}

window.onload = loadQuestion;
