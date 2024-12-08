const quizData = {
  quizTitle: "Quiz sur les conditions",
  questions: [
    {
      question:
        "'variable: int = 4';  \
    '(variable > 3 and variable < 5)'",
      options: ["vrai", "faux"],
      correctAnswers: ["vrai"],
      successMessage:
        "Bravo ! Note qu'on peut écrire cette condition sous la forme `if 3 < variable < 5`, ce qui est spécifique à Python. Cette syntaxe est exclusive à ce langage !",
      failureMessage:
        "Cette condition se traduit par `if 3 < variable < 5` où `variable = 4`. Cette syntaxe est possible mais uniquement en Python.",
    },
    {
      question:
        "'variable: int = 4;'  \
    '(variable == 3 or variable != 5)'",
      options: ["vrai", "faux"],
      correctAnswers: ["vrai"],
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
