// script.js
// Sélectionner le conteneur où les cartes seront ajoutées
const container = document.querySelector(".container");

// Boucle pour générer les cartes en fonction des données dans `data`
data.forEach((quiz, index) => {
  // Création d'une carte
  const card = document.createElement("div");
  card.classList.add("card");

  // Vérification si le quiz est marqué comme "fait" dans le localStorage
  const quizKey = quiz.title;
  const isCompleted = localStorage.getItem(quizKey) !== null;

  // Ajouter une classe CSS spéciale si le quiz est complété
  if (isCompleted) {
    card.classList.add("completed");
  }

  // Création du titre de la carte
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `Quizz ${index + 1}`;

  // Création du contenu de la carte
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardContent.textContent = quiz.title;

  // Ajouter les éléments à la carte
  card.appendChild(cardTitle);
  card.appendChild(cardContent);

  // Ajouter la carte au conteneur
  container.appendChild(card);

  // Ajouter un écouteur de clic pour rediriger vers l'URL
  card.addEventListener("click", () => {
    // Rediriger vers la page associée
    window.location.href = quiz.url;
  });
});
