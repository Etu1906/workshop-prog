// Données du quiz adaptées
const quizData = {
  quizTitle: "Programmer? 💻",
  questions: [
    {
      question:
        'Dans quel cas peut-on dire que "programmer" est utile dans la vie courante ?',
      options: [
        "Créer un plan pour organiser ses tâches",
        "Mémoriser les numéros de téléphone",
        "Écrire une lettre sans structure",
        "Laisser ses actions au hasard",
      ],
      correctAnswers: ["Créer un plan pour organiser ses tâches"],
      successMessage:
        "Bien joué ! Programmer, c'est avant tout organiser des actions pour atteindre des objectifs précis.",
      failureMessage:
        "Il faut comprendre que programmer, c'est surtout une manière structurée d'organiser ses tâches pour atteindre un but.",
    },
    {
      question:
        "En quoi la programmation peut-elle améliorer l'efficacité dans une entreprise ?",
      options: [
        "En rendant les employés inutiles",
        "En permettant d'automatiser des tâches répétitives",
        "En supprimant tous les problèmes rencontrés au travail",
        "En empêchant toute erreur humaine",
      ],
      correctAnswers: ["En permettant d'automatiser des tâches répétitives"],
      successMessage:
        "Correct ! L'automatisation grâce à la programmation permet de gagner du temps et d'augmenter la productivité.",
      failureMessage:
        "Pas tout à fait ! La programmation aide surtout à automatiser des tâches répétitives pour optimiser l'efficacité.",
    },
    {
      question:
        "Pourquoi un ordinateur ne peut-il pas fonctionner sans processeur ?",
      options: [
        "Parce qu'il ne pourra pas afficher d’images",
        "Parce qu’il ne peut pas exécuter les instructions des programmes",
        "Parce qu’il ne pourrait pas être allumé",
        "Parce qu’il ne pourrait pas stocker des données",
      ],
      correctAnswers: [
        "Parce qu’il ne peut pas exécuter les instructions des programmes",
      ],
      successMessage:
        "Exact ! Le processeur est le cerveau de l'ordinateur, exécutant les instructions des programmes.",
      failureMessage:
        "Un ordinateur sans processeur ne peut pas fonctionner car il ne peut pas exécuter les instructions des programmes.",
    },
    {
      question:
        "Si vous deviez expliquer à un ami pourquoi programmer un ordinateur est similaire à organiser un voyage, comment le feriez-vous ?",
      correctAnswers: [
        "planifier des actions pour atteindre un objectif",
        "organiser des étapes",
      ],
      successMessage:
        "Un exemple serait, Programmer un ordinateur, c'est comme organiser un voyage : vous commencez par définir une destination (le résultat attendu), planifiez chaque étape nécessaire pour y arriver (les instructions du programme), et vérifiez que tout est en ordre avant de partir (tester et déboguer le code).",
      failureMessage:
        "Ce n'est pas tout à fait ça. Programmer, c'est un peu comme organiser un voyage : chaque étape est essentielle pour atteindre l'objectif final.",
    },
  ],
};
