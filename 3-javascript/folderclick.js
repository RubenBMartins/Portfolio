document.addEventListener("DOMContentLoaded", function() {
    let hold = 0;
    const info = document.querySelector('.project-info');
    const overlay = document.querySelector('.blur-overlay');
    const folders = document.querySelectorAll(".folder");

    // 1. Fonction pour ouvrir la fenêtre
    function openInfo() {
        overlay.classList.add('active');
        hold = 1;
        info.classList.remove('inactive');
        info.classList.add('active');
        info.classList.remove('posdown');
        info.classList.add('posup');
    }

    // 2. Fonction pour fermer la fenêtre
    function closeInfo() {
        overlay.classList.remove('active');
        hold = 0;
        info.classList.remove('active');
        info.classList.add('inactive');
        info.classList.remove('posup');
        info.classList.add('posdown');
    }

    // Clic sur un dossier -> Ouvre la fenêtre si elle est fermée
    folders.forEach(folder => {
        folder.addEventListener("click", function(e) {
            e.stopPropagation(); // Empêche le clic de se propager à l'overlay immédiatement
            if (hold === 0) {
                openInfo();
            }
        });
    });

    // Clic sur l'overlay d'arrière-plan -> Ferme la fenêtre
    if (overlay) {
        overlay.addEventListener("click", function() {
            if (hold === 1) {
                closeInfo();
            }
        });
    }
});
