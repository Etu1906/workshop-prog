const quizData = {
  quizTitle: "Les conditions 🚦",
  questions: [
    {
      question: 'Traduit : Quel est le signe pour dire "supérieur ou égal" ?',
      options: [">", "<", ">=", "=<", "<="],
      correctAnswers: [">="],
      successMessage:
        'Bravo ! C\'est bien ">=" qui signifie "supérieur ou égal".',
      failureMessage: 'C\'est ">=" qui signifie "supérieur ou égal".',
    },
    {
      question: 'Le terme "or" signifie :',
      options: [
        "Une des 2 conditions doit être vraie",
        "Les 2 conditions doivent être vraies",
        "La condition de droite doit être vraie",
        "Aucune des réponses",
        "Question piège",
      ],
      correctAnswers: ["Une des 2 conditions doit être vraie"],
      successMessage:
        'Exactement ! "or" signifie "ou", donc une des 2 conditions doit être vraie.',
      failureMessage:
        'Ce n\'est pas une question piège, "or" signifie "ou", donc une des 2 conditions doit être vraie.',
    },
    {
      question: "Comment faire une comparaison de 2 valeurs ?",
      options: ["=", "==", "==="],
      correctAnswers: ["=="],
      successMessage:
        'Exactement ! "=" est utilisé pour l\'affectation de valeur, "==" pour la comparaison.',
      failureMessage:
        '"=" est utilisé pour l\'affectation de valeur, "==" pour la comparaison.',
    },
    {
      question:
        "La syntaxe est-elle correcte ? `a = 5; if ((a <= 10) == True)`",
      options: ["Oui", "Non"],
      correctAnswers: ["Oui"],
      successMessage:
        'Excellent ! "(a <= 10)" est une comparaison qui retourne un booléen, donc la comparaison est valide.',
      failureMessage:
        '"(a <= 10)" est une comparaison qui retourne un booléen, donc la comparaison est valide.',
    },
    {
      question: "Comment savoir où se termine la portée du if en Python ?",
      options: [
        "Les espaces",
        "Les indentations",
        'Mettre un "endif" pour montrer que le if se termine',
        "Ce n'est pas possible",
      ],
      correctAnswers: ["Les indentations"],
      successMessage:
        "Très bien ! L'indentation est le décalage horizontal du code pour refléter sa structure hiérarchique.",
      failureMessage:
        "En Python, l'indentation est très importante. Python se base sur l'indentation pour connaître la portée des if, mais aussi des boucles (à venir).",
    },
    {
      question:
        "`variable: int = 4;`  \
    `(variable > 3 and variable < 5)`",
      options: ["Vrai", "Faux"],
      correctAnswers: ["Vrai"],
      successMessage:
        "Bravo ! Note qu'on peut écrire cette condition sous la forme `if 3 < variable < 5`, ce qui est spécifique à Python. Cette syntaxe est exclusive à ce langage !",
      failureMessage:
        "Cette condition se traduit par `if 3 < variable < 5` où `variable = 4`. Cette syntaxe est possible, mais uniquement en Python.",
    },
    {
      question:
        "`variable: int = 4;`  \
    `(variable == 3 or variable != 5)`",
      options: ["Vrai", "Faux"],
      correctAnswers: ["Vrai"],
      successMessage:
        "Et oui ! `4` est bien différent de `5`, même s'il n'est pas égal à `3`.",
      failureMessage:
        "`4` est bien différent de `5`, même s'il n'est pas égal à `3`.",
    },
    {
      question: "Quel est le type de `variable = (2 != 5 and 5 == 5)` ?",
      options: ["int", "bool", "boll", "boool"],
      correctAnswers: ["bool"],
      successMessage:
        "Et oui ! Le type est bien `bool`, qui correspond à un booléen, prenant soit `True` soit `False`.",
      failureMessage:
        "Le type est `bool`, qui correspond à un booléen, prenant soit `True` soit `False`.",
    },
  ],
};
