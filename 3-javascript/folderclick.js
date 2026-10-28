document.addEventListener("DOMContentLoaded", function() {
    let hold = 0;
    const overlay = document.querySelector('.blur-overlay');
    const folders = document.querySelectorAll(".folder");
    folders.forEach(folder => {
        folder.addEventListener("click", function() {
            if (hold == 0) {
                overlay.classList.add('active');
                hold = 1;
            }
            else {
                overlay.classList.remove('active');
                hold = 0;
            }
        });
    });
});
