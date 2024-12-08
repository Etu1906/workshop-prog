// Données du quiz
const quizData = {
  quizTitle: "Quiz sur JavaScript",
  questions: [
    {
      question: "Quels sont les types de données primitifs en JavaScript ?",
      options: ["String", "Object", "Boolean", "Undefined"],
      correctAnswers: ["String", "Boolean", "Undefined"],
      successMessage: "Bravo, vous avez bien identifié les types primitifs !",
      failureMessage: "non non",
    },
    {
      question: "Quelle méthode permet de parcourir un tableau ?",
      options: ["forEach", "map", "reduce", "filter"],
      correctAnswers: ["forEach", "map", "filter"],
      successMessage: "Bien joué, vous connaissez les bonnes méthodes !",
      failureMessage:
        "Certaines méthodes ne sont pas adaptées. Essayez encore.",
    },
  ],
};
