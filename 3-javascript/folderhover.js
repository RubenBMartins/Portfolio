document.addEventListener("DOMContentLoaded", function() {
    const folders = document.querySelectorAll(".folder");
    folders.forEach(folder => {
        folder.addEventListener("mouseenter", function() {
            this.src = "../1-visual_ressources/folderOpen.svg";
        });
        folder.addEventListener("mouseleave", function() {
            this.src = "../1-visual_ressources/folderClosed.svg";
        });
    });
});
