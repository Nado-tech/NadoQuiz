
const topics = {
    "general-knowledge": [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Accra", "Calabar"],
        answer: "Abuja"
      }
    ],
    "science": [
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "H2SO4"],
        answer: "H2O"
      },
      {
        question: "Which planet is closest to the sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
      },
      {
        question: "What is the process by which plants convert sunlight to energy?",
        options: ["Photosynthesis, radiation, evaporation, condensation"],
        answer: "Photosynthesis"
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: "300,000 km/s"
      },
      {
        question: "What phone company produced the 3310?",
        options: ["Nokia", "Samsung", "Apple", "Sony"],
        answer: "Nokia"
    }
    ],
    "history": [
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1941", "1950"],
        answer: "1945"
      }
    ],
    "riddles": [
      {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        options: ["A tree", "An echo", "A shadow", "A river"],
        answer: "An echo"
      },
      {
        question: "The more you take, the more you leave behind. What am I?",
        options: ["Footsteps", "Time", "Breath", "Memories"],
        answer: "Footsteps"
      },
      {
        question: "What has keys but can't open locks?",
        options: ["A map", "A piano", "A door", "A book"],
        answer: "A piano"
      }
    ],
    "bible-riddles": [
      {
        question: "I am a feast of farewell of wine and bread, my legacy of sipping and dining lives on. What am I?",
        options: ["The Last Supper", "The Sermon on the Mount", "Bethlehem", "Garden of Eden"],
        answer: "The Last Supper"
      },
      {
        question: "A hill where lessons were taught, teaching mercy and love. The kingdom was received. What am I?",
        options: ["Mount horeb", "The Sermon on the Mount", "Bethlehem", "Garden of Eden"],
        answer: "The Sermon on the Mount"
      },
      {
        question: "In this small town, the first wail of a king among kings was heard in a lowly manger tale. Where am I?",
        options: ["Zion", "Samaria", "Bethlehem", "Jerusalem"],
        answer: "Bethlehem"
      },
        {
            question: "Once a utopia for the first of humankind, a single choice made us all go blind. Where am I?",
            options: ["Garden of Eden", "Jericho", "Bethlehem", "Jerusalem"],
            answer: "Garden of Eden"
        },
        {
            question: "I am the place where the law was given, a mountain of fire and smoke. Where am I?",
            options: ["Mount Sinai", "Mount Horeb", "Mount Zion", "Mount of Olives"],
            answer: "Mount Sinai"
        },
        {
            question: "parted for passage, soon waters returned; Pharaoh's force, in its depths, adjourned. What am I?",
            options: ["The Red Sea", "The Dead Sea", "The Jordan River", "The Nile River"],
            answer: "The Red Sea"
        },
        {
            question: "In my leaves, I hold many truths and a guide for the ages. Within me lies the wisdom of sages. What am I?",
            options: ["The Bible", "The Quran", "The Torah", "The Book of Mormon"],
            answer: "The Bible"
        },
        {
            question: "I was the gift given to Jesus that symbolised his kingship. What am I?",
            options: ["Gold", "Frankincense", "Myrrh", "Silver"],
            answer: "Gold"
        },
        {
            question: "Carved in stone, not for ardonement, two tablets from the mount offered the law of peace. What am I?",
            options: ["The Ten Commandments", "The Sermon on the Mount", "The Torah", "The Quran"],
            answer: "The Ten Commandments"
        },
        {
            question: "Where could you find Solomon’s temple?",
            options: ["On the side of his head", "In Jerusalem", "In Bethlehem", "In Egypt"],
            answer: "In Jerusalem"
        },
        {
            question: "He is not a person or an animal but He has a face. Who is he?",
            options: ["God", "Jesus", "The Holy Spirit", "The Devil"],
            answer: "God"
        }
    ],
    "sports": [
        {
            question: "What does FIFA stand for in English?",
            options: ["International Federation of Football Association", "International Federation of Association Football", "International Federation of Football and Athletics", "International Federation of Football and Athletics"],
            answer: "International Federation of Association Football"
        },
        {
            question: "Which country has won the most World Cups?",
            options: ["Brazil", "Germany", "Argentina", "Italy"],
            answer: "Brazil"
        }
       
        ]
  };
  
  let currentTopic = "";
  let currentQuestionIndex = 0;
  let score = 0;
  
  const topicSelection = document.getElementById("topic-selection");
  const quizContainer = document.getElementById("quiz");
  const quizTopic = document.getElementById("quiz-topic");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const previousButton = document.getElementById("previous-button");
  const quitButton = document.getElementById("quit-button");
  const resultElement = document.getElementById("result");
  
  document.getElementById("general-knowledge").addEventListener("click", () => startQuiz("general-knowledge"));
  document.getElementById("science").addEventListener("click", () => startQuiz("science"));
  document.getElementById("history").addEventListener("click", () => startQuiz("history"));
  document.getElementById("riddles").addEventListener("click", () => startQuiz("riddles"));
    document.getElementById("bible-riddles").addEventListener("click", () => startQuiz("bible-riddles"));
    document.getElementById("sports").addEventListener("click", () => startQuiz("sports"));

  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < topics[currentTopic].length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  });

  previousButton.addEventListener("click", () => {
    currentQuestionIndex--;
    if (currentQuestionIndex < topics[currentTopic].length) {
        loadQuestion();
    } else {
        return (currentQuestionIndex = 0);
    }
    });

    quitButton.addEventListener("click", () => {
        quizContainer.classList.add("hidden");
        topicSelection.classList.remove("hidden");
    });
  
  function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    topicSelection.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    quizTopic.textContent = `Topic: ${topic.replace("-", " ").toUpperCase()}`;
    loadQuestion();
  }
  
  function loadQuestion() {
    const question = topics[currentTopic][currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
    resultElement.textContent = "";
  }
  
  function checkAnswer(selectedOption) {
    const question = topics[currentTopic][currentQuestionIndex];
    if (selectedOption === question.answer) {
      score++;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = `Wrong! The correct answer is ${question.answer}.`;
    }
  }
  
  function endQuiz() {
    quizContainer.classList.add("hidden");
    topicSelection.classList.remove("hidden");
    alert(`Quiz ended! Your score is ${score}/${topics[currentTopic].length}`);
  }