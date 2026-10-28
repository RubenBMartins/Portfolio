document.addEventListener("DOMContentLoaded", function() {
    let hold = 0;
    var target = 'P1';
    const overlay = document.querySelector('.blur-overlay');
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", function() {
            if (hold == 0) {
                overlay.classList.add('active');
                hold = 1;
                
                // "this" fait directement référence à l'image cliquée
                if (this.id === target) {
                    const newDiv = document.createElement("div");
                    const newContent = document.createTextNode("Hi there and greetings!");
                    newDiv.appendChild(newContent);
                    
                    // Insère le div juste avant l'image dans la case du tableau (th)
                    this.parentNode.insertBefore(newDiv, this);
                }
            }
            else {
                overlay.classList.remove('active');
                hold = 0;
            }
        });
    });
});
