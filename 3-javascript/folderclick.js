document.addEventListener("DOMContentLoaded", function() {
    let hold = 0;
    const info = document.querySelector('.project-info');
    const overlay = document.querySelector('.blur-overlay');
    const folders = document.querySelectorAll(".folder");
    function openInfo() {
        overlay.classList.add('active');
        hold = 1;
        info.classList.remove('inactive');
        info.classList.add('active');
        info.classList.remove('posdown');
        info.classList.add('posup');
    }
    function closeInfo() {
        overlay.classList.remove('active');
        hold = 0;
        info.classList.remove('active');
        info.classList.add('inactive');
        info.classList.remove('posup');
        info.classList.add('posdown');
    }
    folders.forEach(folder => {
        folder.addEventListener("click", function(e) {
            e.stopPropagation(); 
            if (hold === 0) {
                openInfo();
            }
        });
    });
    if (overlay) {
        overlay.addEventListener("click", function() {
            if (hold === 1) {
                closeInfo();
            }
        });
    }
});
