// Données du quiz
const quizData = {
  quizTitle: "Premier pas 🎉",
  questions: [
    {
      question: "Quel typage Python utilise-t-il ?",
      options: ["typage statique", "typage dynamique"],
      correctAnswers: ["typage dynamique"],
      successMessage:
        "Correct ! Python utilise un typage dynamique, mais on peut contrôler le typage avec des outils comme mypy.",
      failureMessage:
        "N'oublie pas, Python utilise un typage dynamique, mais on peut contrôler le typage avec des outils comme mypy.",
    },
    {
      question: "Quelle syntaxe de commentaire est valide en Python ?",
      options: [
        "// mon commentaire",
        "/* mon commentaire */",
        "# mon commentaire",
        "## mon commentaire",
        "### mon commentaire",
      ],
      correctAnswers: [
        "# mon commentaire",
        "## mon commentaire",
        "### mon commentaire",
      ],
      successMessage:
        "Correct ! En Python, les commentaires commencent par un #.",
      failureMessage: "Et oui tant que ça commence par # c'est un commentaire.",
    },
    {
      question:
        "Quelle manière d'afficher un message Hello world dans la console est valide en Python ?",
      options: [
        "print 'Hello world'",
        "print('Hello world')",
        'print("Hello world" )',
        "print( 'hello' ) print('world')",
      ],
      correctAnswers: ["print('Hello world')", 'print("Hello world" )'],
      successMessage:
        "Bien joué, 'print' marche à la fois pour '' et \"\" , pour print( 'hello' ) print('world') cela affichera world à la ligne",
      failureMessage:
        "Et oui, 'print' marche à la fois pour '' et \"\", pour print( 'hello' ) print('world') cela affichera world à la ligne",
    },
  ],
};
