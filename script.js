const sentencePairs = [
    {
        mainText: "(das Buch) Sie liest (___) Buch. - Она читает свою книгу.",
        verificationText: "ihr"
      },
      {
        mainText: "(der Kugelschreiber) Er benutzt (___) Kugelschreiber. - Он использует свою ручку.",
        verificationText: "seinen"
      },
      {
        mainText: "(die Brille) Sie trägt (___) Brille. - Она носит свои очки.",
        verificationText: "ihre"
      },
      {
        mainText: "(der Rucksack) Er packt (___) Rucksack. - Он пакует свой рюкзак.",
        verificationText: "seinen"
      },
      {
        mainText: "(der Schlüssel) Sie verliert (___) Schlüssel. - Она теряет свой ключ.",
        verificationText: "ihren"
      },

      {
        mainText: "(der Tisch) Er deckt (___) Tisch. - Он накрывает свой стол.",
        verificationText: "seinen"
      },
      {
        mainText: "(die Blumen) Sie gießt (___) Blumen. - Она поливает свои цветы.",
        verificationText: "ihre"
      },
      {
        mainText: "(der Computer) Er verwendet (___) Computer. - Он использует свой компьютер.",
        verificationText: "seinen"
      },
      {
        mainText: "(das Auto) Sie wäscht (___) Auto. - Она моет свою машину.",
        verificationText: "ihr"
      },
      {
        mainText: "(der Hund) Er füttert (___) Hund. - Он кормит свою собаку.",
        verificationText: "seinen"
      },
      {
        mainText: "(die Katze) Sie streichelt (___) Katze. - Она гладит свою кошку.",
        verificationText: "ihre"
      },
      {
        mainText: "(der Garten) Er pflegt (___) Garten. - Он ухаживает за своим садом.",
        verificationText: "seinen"
      },
      {
        mainText: "(die Jacke) Sie trägt (___) Jacke. - Она носит свою куртку.",
        verificationText: "ihre"
      },
      {
        mainText: "(das Handy) Er benutzt (___) Handy. - Он пользуется своим смартфоном.",
        verificationText: "sein"
      },
      {
        mainText: "(der Stuhl) Er schiebt (___) Stuhl. - Он передвигает свой стул.",
        verificationText: "seinen"
      }
      
      
      
      
];

let sentenceOrder = shuffleArray([...Array(sentencePairs.length).keys()]);

const sentenceDisplay = document.getElementById("sentenceDisplay");
const textInput = document.getElementById("textInput");
const verificationMessage = document.getElementById("verificationMessage"); // Добавлено

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getNextSentence() {
    if (sentenceOrder.length === 0) {
        sentenceOrder = shuffleArray([...Array(sentencePairs.length).keys()]);
    }
    const nextIndex = sentenceOrder.pop();
    return sentencePairs[nextIndex];
}

function displayRandomSentence() {
    const nextSentencePair = getNextSentence();
    const nextSentence = nextSentencePair.mainText;
    const verificationText = nextSentencePair.verificationText;
    sentenceDisplay.textContent = nextSentence;
    textInput.value = "";
    textInput.style.backgroundColor = '';
    textInput.dataset.verificationText = verificationText;
    verificationMessage.textContent = ''; // Очищаем сообщение при смене предложения
}

sentenceDisplay.addEventListener("click", () => {
    displayRandomSentence();
});

textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const inputText = event.target.value.trim();
        const verificationText = event.target.dataset.verificationText;
        
        // Выводим проверочное сообщение после каждой попытки ввода
        if (inputText === verificationText) {
            textInput.style.backgroundColor = 'lightgreen';
            verificationMessage.style.color = 'green';
            //verificationMessage.textContent = `${verificationText}`;
            // Добавляем класс стиля для проверочного сообщения
            verificationMessage.classList.add("verification-message");
            // Ждем немного и переходим к следующему предложению
            setTimeout(() => {
                displayRandomSentence();
                verificationMessage.textContent = ''; // Удаляем сообщение после смены предложения
            }, 1000); // Ждем 1 секунду перед сменой предложения
        } else {
            textInput.style.backgroundColor = 'salmon';
            verificationMessage.style.color = 'red';
            verificationMessage.textContent = `${verificationText}`;
            // Добавляем класс стиля для проверочного сообщения
            verificationMessage.classList.add("verification-message");
        }
    }
});
// Инициализация первого предложения
displayRandomSentence();
