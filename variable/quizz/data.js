const quizData = {
  quizTitle: "Quiz sur les variables",
  questions: [
    {
      question: "Comment déclarer une variable avec des nombres à virgule ?",
      options: ["a : float = 5.6", "a : int = 5.6", "a = 5.6", "a : str = 5.6"],
      correctAnswers: ["a : float = 5.6", "a = 5.6"],
      successMessage:
        "Bien joué ! 'float' est le type pour les nombres à virgule flottante. Cependant, il est toujours possible d'utiliser le typage dynamique en Python.",
      failureMessage:
        "'float' est le type pour les nombres à virgule flottante. Cependant, il est toujours possible d'utiliser le typage dynamique en Python.",
    },
    {
      question: "Comment déclarer des strings (str)?",
      options: [
        'En utilisant des guillemets doubles "..."',
        "En utilisant des guillemets simples '...'",
        "En utilisant des backticks `...`",
        "Toutes les réponses sont correctes",
      ],
      correctAnswers: [
        'En utilisant des guillemets doubles "..."',
        "En utilisant des guillemets simples '...'",
      ],
      successMessage: "Bien joué ! on peut utiliser soit \"...\" ou '...'",
      failureMessage:
        "Et non, les syntaxes correctes sont soit \"...\" ou '...'",
    },
  ],
};
