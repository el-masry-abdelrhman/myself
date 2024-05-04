function scrollDown() {
    // Récupérer la hauteur de la fenêtre
    const windowHeight = window.innerHeight;
    
    // Faire défiler vers le bas d'une partie de la fenêtre (par exemple, la moitié de la hauteur de la fenêtre)
    window.scrollBy(0, windowHeight / 2);
  }

  function changerLangue(langue) {
    var elementsFr = document.querySelectorAll('.fr');
    var elementsEn = document.querySelectorAll('.en');
    var elements_titre_fr = document.querySelectorAll('.titre_fr');
    var elements_titre_en = document.querySelectorAll('.titre_en');

    if (langue === 'fr') {
        elementsFr.forEach(function(element) {
            element.style.display = 'block';
        });
        elementsEn.forEach(function(element) {
            element.style.display = 'none';
        });
        elements_titre_fr.forEach(function(element) {
            element.style.display = 'block';
        });
        elements_titre_en.forEach(function(element) {
            element.style.display = 'none';
        });
    } else if (langue === 'en') {
        elementsFr.forEach(function(element) {
            element.style.display = 'none';
        });
        elementsEn.forEach(function(element) {
            element.style.display = 'block';
        });
        elements_titre_fr.forEach(function(element) {
            element.style.display = 'none';
        });
        elements_titre_en.forEach(function(element) {
            element.style.display = 'block';
        });
    }
}