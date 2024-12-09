const quizData = {
  quizTitle: "Les boucles ♻️",
  questions: [
    {
      question: "Quels sont les éléments que l'on retrouve dans une boucle ?",
      options: [
        "Initialisation",
        "Changement",
        "Incrémentation",
        "Condition d'arrêt",
      ],
      correctAnswers: ["Initialisation", "Changement", "Condition d'arrêt"],
      successMessage:
        "Bien joué ! On doit toujours avoir les 3 éléments : initialisation, changement, condition d'arrêt. L'incrémentation n'est pas forcément obligatoire.",
      failureMessage:
        "On doit toujours avoir les 3 éléments : initialisation, changement, condition d'arrêt. Par contre, l'incrémentation n'est pas forcément obligatoire, par exemple si la condition d'arrêt se base sur un type booléen.",
    },
    {
      question:
        "Quelle est la différence entre une boucle (while/for) et une condition (if) ?",
      options: [
        "Une boucle est appelée tant que la condition d'arrêt n'a pas été atteinte",
        "Une condition n'est vérifiée qu'une seule fois pour déterminer si elle est vraie ou fausse",
        "Les indentations ne sont pas les mêmes",
        "La boucle ne peut avoir qu'une seule condition d'arrêt",
        "La condition fait partie de la boucle",
        "Question piège",
      ],
      correctAnswers: [
        "Une boucle est appelée tant que la condition d'arrêt n'a pas été atteinte",
        "Une condition n'est vérifiée qu'une seule fois pour déterminer si elle est vraie ou fausse",
      ],
      successMessage:
        "Bien joué ! \"While\" signifie \"tant que\", donc l'intérieur d'une boucle sera toujours exécuté tant que la condition d'arrêt n'a pas été atteinte. \"If\" n'est vérifié qu'une seule fois.",
      failureMessage:
        '"While" signifie "tant que", donc l’intérieur d’une boucle sera toujours exécuté tant que la condition d’arrêt n’a pas été atteinte. "If" n’est vérifié qu’une seule fois. Les indentations ne dépendent pas du fait que ce soit une boucle ou une condition.',
    },
    {
      question:
        "Comment savoir où se termine la portée d'une boucle en Python ?",
      options: [
        "Les espaces",
        "Les indentations",
        'Mettre un "endwhile" pour montrer que le if se termine',
        "Ce n'est pas possible",
      ],
      correctAnswers: ["Les indentations"],
      successMessage:
        "Très bien ! Comme pour les conditions, c'est grâce aux indentations que Python sait où se termine une boucle.",
      failureMessage:
        "Comme pour les conditions, c'est grâce aux indentations que Python sait où se termine une boucle.",
    },
  ],
};
