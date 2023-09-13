const sentences = [
    {
        mainText: "Der Lehrer unterrichtet (der) Schüler. (Учитель обучает ученика.)",
        verificationText: "den"
    },
    {
        mainText: "Die Katze jagt (die) Maus. (Кошка гоняется за мышью.)",
        verificationText: "die"
    },
    {
        mainText: "Der Gärtner pflanzt (der) Blumen. (Садовник сажает цветы.)",
        verificationText: "die"
    }
];

let currentIndex = 0;
const sentenceElement = document.getElementById("sentence");
const articleInput = document.getElementById("articleInput");

// Устанавливаем начальную ширину поля ввода
articleInput.style.width = "5ch";

function displaySentence() {
    sentenceElement.innerHTML = sentences[currentIndex].mainText;
}

function adjustInputWidth() {
    const textLength = articleInput.value.length;
    articleInput.style.width = `${Math.max(5, textLength)}ch`; // Минимальная ширина - 5 символов
}

function checkAnswer() {
    const userAnswer = articleInput.value.trim();
    const correctAnswer = sentences[currentIndex].verificationText;

    if (userAnswer === correctAnswer) {
        articleInput.style.backgroundColor = "#c1e7c1"; // Светло-зеленый
        currentIndex++;

        if (currentIndex < sentences.length) {
            setTimeout(() => {
                articleInput.style.backgroundColor = "";
                articleInput.value = "";
                articleInput.style.width = "5ch"; // Возвращаем начальную ширину
                displaySentence();
            }, 1000);
        } else {
            sentenceElement.textContent = "Тренировка завершена!";
            articleInput.disabled = true;
        }
    } else {
        articleInput.style.backgroundColor = "#ffcccc"; // Светло-красный
    }
}

displaySentence();
articleInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    } else {
        // При каждом нажатии клавиши проверяем и корректируем ширину поля ввода
        adjustInputWidth();
    }
});
