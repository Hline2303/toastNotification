console.log("connecté !");

// Je sélectionne le bouton
const btn = document.querySelector(".btn");
// console.log(btn);
// Je sélectionnet stocke la div container-notifications
const containerNotifs = document.querySelector(".container-notifications");
// console.log(containerNotifs);

// Détection du clic
btn.addEventListener("click", function () {
  // console.log('Bouton cliqué !');
  // Je crée un élément
  const notifications = document.createElement("div");
  console.log(notifications);
  // Je donne un style à la div
  notifications.classList.add("toast");
  //   J'insère du contenu texte
  notifications.innerText = "Votre fichier est bien enregistré !";
  // console.log(notifications);
  //  J'accroche notifications à l'élément containerNotifs
  containerNotifs.appendChild(notifications);
  // A la fin du chrono, je retire la notification du DOM
  setTimeout(function () {
    notifications.remove();
  }, 2000);
}); 
