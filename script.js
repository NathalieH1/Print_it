const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];



// Comptez le nombre d'éléments dans le tableau slides
const numberOfSlides = slides.length;

// Sélectionnez l'élément contenant les points indicateurs
const indicatorsContainer = document.querySelector('.dots');

// Vérifiez si l'élément a été trouvé avant de continuer
if (indicatorsContainer) {
	// Créez les points indicateurs en fonction du nombre d'éléments dans le tableau
	for (let i = 0; i < numberOfSlides; i++) {
		const indicator = document.createElement('div');
		indicator.classList.add('dot');

		// Ajoutez un attribut data-index pour connaître l'index associé au clic
		indicator.setAttribute('data-index', i);

		// Ajoutez la classe .dot_selected au premier point indicateur
		if (i === 0) {
			indicator.classList.add('dot_selected');
		}

		// Ajoutez le point indicateur à l'élément contenant les indicateurs
		indicatorsContainer.appendChild(indicator);
	}

	// Ajoutez un Event Listener pour les points indicateurs
	indicatorsContainer.addEventListener('click', (event) => {
		const clickedIndex = event.target.getAttribute('data-index');
		// Ajoutez ici la logique pour afficher la slide correspondante
		console.log(`Clic sur l'indicateur ${clickedIndex}`);
	});
} else {
	console.error("L'élément avec la classe 'dots' n'a pas été trouvé.");
}



// Index de la diapositive actuelle
 currentIndex = 0;

// Fonction pour mettre à jour l'affichage en fonction de l'index actuel
function updateSlide() {
	// Sélectionne l'image et le texte à mettre à jour
	const bannerImage = document.querySelector('#banner .banner-img');
	const tagLine = document.querySelector('#banner p');

	// Met à jour l'image et le texte en fonction de l'index actuel
	bannerImage.src = slides[currentIndex].image;
	tagLine.innerHTML = slides[currentIndex].tagLine;

	// Met à jour les points indicateurs
	updateIndicators();
}

// Fonction pour mettre à jour les points indicateurs
function updateIndicators() {
	const indicators = document.querySelectorAll('.dots .dot');

	// Supprime la classe .dot_selected de tous les points
	indicators.forEach((indicator) => {
		indicator.classList.remove('dot_selected');
	});

	// Ajoute la classe .dot_selected au point correspondant à l'index actuel
	indicators[currentIndex].classList.add('dot_selected');
}





// Sélection des flèches par leurs identifiants
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');

// Ajout des Event Listeners pour le clic sur les flèches
leftArrow.addEventListener('click', function () {
    // Logique à exécuter lors du clic sur la flèche gauche
    console.log("Flèche gauche cliquée !");
    
    // Décrémente l'index (passe à la diapositive précédente)
    currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides;

    // Met à jour l'affichage
    updateSlide();
});

rightArrow.addEventListener('click', function () {
    // Logique à exécuter lors du clic sur la flèche droite
    console.log("Flèche droite cliquée !");
    
    // Incrémente l'index (passe à la diapositive suivante)
    currentIndex = (currentIndex + 1) % numberOfSlides;

    // Met à jour l'affichage
    updateSlide();

	// Vérifie si l'index est revenu à 0 (première diapositive) et ajuste l'index si nécessaire
    if (currentIndex === 0) {
        currentIndex = numberOfSlides - 1;
    }
});
