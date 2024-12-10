document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const quizTitleElement = document.getElementById("quiz-title");
  const quizQuestionsContainer = document.getElementById("quiz-questions");
  const submitButton = document.getElementById("submit-btn");
  const resetButton = document.getElementById("reset-btn");

  // Définir le titre du quiz
  quizTitleElement.querySelector("span").textContent = quizData.quizTitle;

  const localStorageKey = quizData.quizTitle;

  // Charger l'état sauvegardé depuis localStorage
  function loadSavedState() {
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (!savedData) return;

    savedData.forEach((questionData, questionIndex) => {
      const inputs = Array.from(
        document.querySelectorAll(
          `input[data-question-index="${questionIndex}"], textarea[data-question-index="${questionIndex}"]`
        )
      );

      inputs.forEach((input) => {
        if (input.tagName === "TEXTAREA") {
          // Restaurer la réponse texte
          input.value = questionData.checked || "";
          input.classList.add(
            questionData.isCorrect ? "text-green-500" : "text-red-500"
          );
        } else {
          console.log(questionData);
          // Restaurer les réponses multiples
          if (questionData.checked.includes(input.value)) {
            input.checked = true;
          }
          if (questionData.correct.includes(input.value) && !input.checked) {
            input.parentElement.classList.add("text-green-300");
          } else if (
            input.checked &&
            questionData.correct.includes(input.value)
          ) {
            input.parentElement.classList.add("text-green-600");
          } else if (input.checked) {
            input.parentElement.classList.add("text-red-600");
          }
        }
      });

      // Restaurer les messages de retour
      const feedbackElement =
        quizQuestionsContainer.children[questionIndex].querySelector(
          ".message"
        );
      feedbackElement.textContent = questionData.message;
      feedbackElement.classList.add(
        "show",
        questionData.isCorrect ? "text-green-500" : "text-red-500"
      );
    });
  }

  // Sauvegarder l'état actuel dans localStorage
  function saveState(data) {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }

  // Générer les questions dynamiquement
  quizData.questions.forEach((question, questionIndex) => {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("mb-4");

    const questionTitle = document.createElement("h2");
    questionTitle.textContent = `${questionIndex + 1}. ${question.question}`;
    questionTitle.classList.add("mb-2", "bold-color");
    questionContainer.appendChild(questionTitle);

    if (question.options) {
      // Si la question a des options, créer des cases à cocher
      question.options.forEach((option) => {
        const optionLabel = document.createElement("label");
        optionLabel.classList.add("block", "mb-2");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.dataset.questionIndex = questionIndex;
        checkbox.classList.add("mr-2");

        optionLabel.appendChild(checkbox);
        optionLabel.appendChild(document.createTextNode(option));
        questionContainer.appendChild(optionLabel);
      });
    } else {
      // Si pas d'options, ajouter une zone de texte
      const textarea = document.createElement("textarea");
      textarea.setAttribute("rows", 4);
      textarea.setAttribute("cols", 50);
      textarea.dataset.questionIndex = questionIndex;
      textarea.classList.add("textarea-answer", "border", "rounded", "w-full");
      questionContainer.appendChild(textarea);
    }

    const feedbackMessage = document.createElement("div");
    feedbackMessage.classList.add("mt-2", "text-sm", "message");
    questionContainer.appendChild(feedbackMessage);

    quizQuestionsContainer.appendChild(questionContainer);
  });

  // Charger l'état sauvegardé à l'initialisation
  loadSavedState();

  // Gérer le clic sur le bouton "Soumettre"
  submitButton.addEventListener("click", () => {
    const results = [];

    quizData.questions.forEach((question, questionIndex) => {
      const correctAnswers = question.correctAnswers;
      let isCorrect = true;
      let userAnswer = "";
      let feedbackMessage = "";

      if (question.options) {
        const selectedOptions = Array.from(
          document.querySelectorAll(
            `input[data-question-index="${questionIndex}"]:checked`
          )
        );
        const allOptions = Array.from(
          document.querySelectorAll(
            `input[data-question-index="${questionIndex}"]`
          )
        );

        userAnswer = selectedOptions.map((option) => option.value);
        selectedOptions.forEach((option) => {
          if (correctAnswers.includes(option.value)) {
            option.parentElement.classList.add("text-green-600");
          } else {
            option.parentElement.classList.add("text-red-600");
            isCorrect = false;
          }
        });

        allOptions.forEach((option) => {
          if (correctAnswers.includes(option.value) && !option.checked) {
            option.parentElement.classList.add("text-green-300");
          }
        });

        if (
          userAnswer.length !== correctAnswers.length ||
          !userAnswer.every((answer) => correctAnswers.includes(answer))
        ) {
          isCorrect = false;
        }

        feedbackMessage = isCorrect
          ? question.successMessage
          : question.failureMessage;

        const feedbackElement =
          quizQuestionsContainer.children[questionIndex].querySelector(
            ".message"
          );
        feedbackElement.textContent = feedbackMessage;
        feedbackElement.classList.add(
          "show",
          isCorrect ? "text-green-500" : "text-red-500"
        );
      } else {
        const textarea = document.querySelector(
          `textarea[data-question-index="${questionIndex}"]`
        );
        userAnswer = textarea.value.trim();
        isCorrect = true;
        feedbackMessage = isCorrect
          ? question.successMessage
          : question.failureMessage;

        textarea.classList.add(isCorrect ? "text-green-500" : "text-red-500");

        const feedbackElement =
          quizQuestionsContainer.children[questionIndex].querySelector(
            ".message"
          );
        feedbackElement.textContent = feedbackMessage;
        feedbackElement.classList.add(
          "show",
          isCorrect ? "text-green-500" : "text-red-500"
        );
      }

      results.push({
        checked: userAnswer,
        correct: correctAnswers,
        isCorrect,
        message: feedbackMessage,
      });
    });

    // Désactiver les champs après soumission
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.disabled = true;
    });

    saveState(results);
  });

  // Gérer le clic sur le bouton "Réinitialiser"
  resetButton.addEventListener("click", () => {
    localStorage.removeItem(localStorageKey);
    location.reload();
  });
});
