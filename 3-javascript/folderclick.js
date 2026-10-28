document.addEventListener("DOMContentLoaded", function() {
    let hold = 0;
    var target = 'P1';
    const info = document.querySelector('.project-info');
    const overlay = document.querySelector('.blur-overlay');
    const folders = document.querySelectorAll(".folder");
    folders.forEach(folder => {
        folder.addEventListener("click", function() {
            if (hold == 0) {
                overlay.classList.add('active');
                hold = 1;
                info.classList.remove('inactive');
                info.classList.add('active');
                info.classList.remove('posdown');
                info.classList.add('posup');
                
                // "this" fait directement référence à l'image cliquée
                if (this.id === target) {
                    console.log("test");
                }
            }
            else {
                overlay.classList.remove('active');
                hold = 0;
                info.classList.remove('active');
                info.classList.add('inactive');
                info.classList.remove('posup');
                info.classList.add('posdown');
            }
        });
    });
});
