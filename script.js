const questions = [
    {
        question: "Qual é o principal objetivo da comunicação não-verbal?",
        options: [
            "Transmitir mensagens através de palavras",
            "Expressar emoções e atitudes sem usar palavras",
            "Escrever documentos formais",
            "Fazer apresentações em público"
        ],
        correct: 1,
        difficulty: "Fácil",
        youtubeLink: "https://youtu.be/gHZoSR2RV7c?si=isAgeReXVE3ebQ7L"
    },
    {
        question: "O que é considerado uma barreira à comunicação eficaz?",
        options: [
            "Escutar ativamente",
            "Falar de forma clara",
            "Ruídos e distrações",
            "Usar linguagem corporal"
        ],
        correct: 2,
        difficulty: "Fácil",
        youtubeLink: "https://youtu.be/PSZFKw_ua_U?si=zbV42HDjketMiH0T"
    },
    {
        question: "Qual técnica ajuda a melhorar a comunicação assertiva?",
        options: [
            "Evitar o contato visual",
            "Ser agressivo nas respostas",
            "Usar a técnica do 'Eu'",
            "Ignorar os sentimentos do outro"
        ],
        correct: 2,
        difficulty: "Médio",
        youtubeLink: "https://youtu.be/-G1jhqZ7qW8?si=opag3jihJC8EQxFo"
    },
    {
        question: "Na comunicação, o que é feedback?",
        options: [
            "É uma resposta para confirmar o entendimento",
            "É interromper quem está falando",
            "É discordar de tudo que foi dito",
            "É mudar o assunto"
        ],
        correct: 0,
        difficulty: "Fácil",
        youtubeLink: "https://youtu.be/9GiafcoDf6E?si=N_g67bi9yZT2GRbJ"
    },
    {
        question: "Qual é a diferença entre comunicação verbal e não-verbal?",
        options: [
            "A comunicação verbal é falada, a não-verbal é escrita",
            "A comunicação verbal usa palavras, a não-verbal usa gestos e expressões",
            "A comunicação verbal é sempre mais importante",
            "A comunicação não-verbal só acontece em reuniões"
        ],
        correct: 1,
        difficulty: "Médio",
        youtubeLink: "https://youtu.be/Gb_D0fRBXSY?si=E_hruwnnIWRbn97I"
    },
    {
        question: "O que é escuta ativa?",
        options: [
            "Ouvir sem prestar atenção",
            "Esperar a vez para falar",
            "Prestar atenção plena ao interlocutor",
            "Interromper para expressar opinião"
        ],
        correct: 2,
        difficulty: "Difícil",
        youtubeLink: "https://youtu.be/9n7bx9g0jC0?si=anSDPGc8soM2bPYW"
    },
    {
        question: "Qual é um exemplo de comunicação assertiva?",
        options: [
            "Achar que o interlocutor sempre está errado",
            "Usar uma postura passiva para evitar conflitos",
            "Expressar pensamentos de forma clara e respeitosa",
            "Evitar qualquer tipo de comunicação"
        ],
        correct: 2,
        difficulty: "Médio",
        youtubeLink: "https://youtu.be/MpTkz870zWw?si=zGcvJQk-IPj5X4gs"
    },
    {
        question: "Qual destes não é um componente da comunicação?",
        options: [
            "Mensagem",
            "Interlocutor",
            "Barreira",
            "Armazenamento"
        ],
        correct: 3,
        difficulty: "Fácil",
        youtubeLink: "https://youtu.be/-G1jhqZ7qW8?si=opag3jihJC8EQxFo"
    },
    {
        question: "Para uma comunicação eficaz, é importante:",
        options: [
            "Interromper o outro constantemente",
            "Focar apenas no que você quer dizer",
            "Manter uma linguagem corporal adequada",
            "Ignorar as reações do interlocutor"
        ],
        correct: 2,
        difficulty: "Fácil",
        youtubeLink: "https://youtu.be/-G1jhqZ7qW8?si=opag3jihJC8EQxFo"
    },
    {
        question: "Qual é o papel da empatia na comunicação?",
        options: [
            "Ignorar os sentimentos do outro",
            "Ajudar a entender a perspectiva do outro",
            "Falar mais sobre si mesmo",
            "Evitar contato visual"
        ],
        correct: 1,
        difficulty: "Difícil",
        youtubeLink: "https://youtu.be/aPs6q5vqnFs?si=6D86nwLOCSZKsq_u"
    }
];

let currentQuestion = 0;
let score = 0;
let canAnswer = true;
let playerName = '';

function startQuiz() {
    playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert('Por favor, insira seu nome para começar!');
        return;
    }

    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    renderQuestion();
}

function renderQuestion() {
    const questionData = questions[currentQuestion];
    const quizContainer = document.getElementById('quizContainer');

    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h1>Quiz de Comunicação</h1>
            <span class="score">Pontuação: ${score}</span>
        </div>
        <p class="question">${questionData.question}</p>
        <div class="difficulty-badge ${getDifficultyClass(questionData.difficulty)}">${questionData.difficulty}</div>
        <div class="options">
            ${questionData.options.map((option, index) => `
                <div class="option" onclick="handleAnswer(${index})">${option}</div>
            `).join('')}
        </div>
        <div class="feedback" id="feedback"></div>
        <button class="next-btn" id="nextBtn" onclick="nextQuestion()">Próxima Pergunta</button>
        <div class="youtube-resources">
            <h2>Recursos adicionais:</h2>
            <a href="${questionData.youtubeLink}" target="_blank">Assista no YouTube</a>
        </div>
    `;
}

function handleAnswer(selectedIndex) {
    if (!canAnswer) return;

    canAnswer = false;
    const questionData = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');

    if (selectedIndex === questionData.correct) {
        options[selectedIndex].classList.add('correct', 'pulse');
        feedback.innerHTML = 'Correto!';
        score++;
    } else {
        options[selectedIndex].classList.add('wrong', 'pulse');
        options[questionData.correct].classList.add('correct', 'pulse');
        feedback.innerHTML = 'Errado. Tente novamente na próxima!';
    }

    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    canAnswer = true;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    let motivationalMessage = '';

    if (percentage === 100) {
        motivationalMessage = "Excelente trabalho! Você acertou todas as perguntas!";
    } else if (percentage >= 80) {
        motivationalMessage = "Ótimo desempenho! Você tem um bom entendimento sobre comunicação.";
    } else if (percentage >= 50) {
        motivationalMessage = "Bom esforço! Continue aprimorando suas habilidades.";
    } else {
        motivationalMessage = "Não desanime! Aprender é um processo, continue praticando!";
    }

    const youtubeLinks = questions.map(q => `<li><a href="${q.youtubeLink}" target="_blank">${q.question}</a></li>`).join('');

    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h1>Quiz de Comunicação</h1>
            <p class="question">Parabéns, ${playerName}! Você completou o quiz!</p>
            <span class="score">Pontuação Final: ${score} de ${totalQuestions} (${percentage}%)</span>
            <p class="motivational-message">${motivationalMessage}</p>
        </div>
        <h2>Recursos adicionais para revisar:</h2>
        <ul class="youtube-resources">
            ${youtubeLinks}
        </ul>
        <button class="start-btn retry-btn" onclick="restartQuiz()">Refazer Quiz</button>
    `;
}

function restartQuiz() {
    // Redefine as variáveis de controle
    currentQuestion = 0;
    score = 0;
    canAnswer = true;

    // Redefine o conteúdo do quiz e exibe a tela inicial
    document.getElementById('quizContainer').innerHTML = `
        <div class="player-name-container">
            <h1>Quiz de Comunicação</h1>
            <p class="welcome-text">Bem-vindo! Por favor, insira seu nome para começar:</p>
            <input type="text" id="playerName" class="player-name-input" placeholder="Seu nome aqui" maxlength="30">
            <button class="start-btn" onclick="startQuiz()">Começar Quiz</button>
        </div>
    `;
}



function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case 'Fácil': return 'difficulty-easy';
        case 'Médio': return 'difficulty-medium';
        case 'Difícil': return 'difficulty-hard';
        default: return '';
    }
}
