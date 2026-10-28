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
    const zoomButtons = document.querySelectorAll(".zoomsmall");
    zoomButtons.forEach(button => {
        const img = button.querySelector("img");
        
        if (!img) {
            return;
        }
        button.addEventListener("mouseenter", function(e) {
            e.stopPropagation();
            try {
                if (typeof openInfo === "function") {
                    openInfo();
                } else {
                    console.warn("Warning : openInfo() isn't globally defined.");
                }
            } catch (error) {
                console.error("openInfo() error :", error);
            }
            if (currentHtml === "index.html") {
                            switch(this.id) {
                case "button1":
                    img.src = "1-visual_ressources/nav1o.svg";
                    break;
                case "button2":
                    img.src = "1-visual_ressources/nav2o.svg";
                    break;
                case "button3":
                    img.src = "1-visual_ressources/nav3o.svg";
                    break;
                case "button4":
                    img.src = "1-visual_ressources/nav4o.svg";
                    break;
                case "button5":
                    img.src = "1-visual_ressources/nav5o.svg";
                    break;
            }
            } else {
            switch(this.id) {
                case "button1":
                    img.src = "../1-visual_ressources/nav1o.svg";
                    break;
                case "button2":
                    img.src = "../1-visual_ressources/nav2o.svg";
                    break;
                case "button3":
                    img.src = "../1-visual_ressources/nav3o.svg";
                    break;
                case "button4":
                    img.src = "../1-visual_ressources/nav4o.svg";
                    break;
                case "button5":
                    img.src = "../1-visual_ressources/nav5o.svg";
                    break;
            }
        }
        });
        button.addEventListener("mouseleave", function() {
            switch(this.id) {
                case "button1":
                    img.src = "../1-visual_ressources/nav1g.svg";
                    break;
                case "button2":
                    img.src = "../1-visual_ressources/nav2g.svg";
                    break;
                case "button3":
                    img.src = "../1-visual_ressources/nav3g.svg";
                    break;
                case "button4":
                    img.src = "../1-visual_ressources/nav4g.svg";
                    break;
                case "button5":
                    img.src = "../1-visual_ressources/nav5g.svg";
                    break;
            }
        });
    });
});
