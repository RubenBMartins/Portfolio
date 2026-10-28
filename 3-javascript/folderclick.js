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
            let id = e.target.id;
            e.stopPropagation(); 
            if (hold === 0) {
                openInfo();
                switch(id) {
                    case "P1":
                        document.getElementById("projname").innerHTML = "<h1>Portfolio</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>The very website you're currently seeing!</b></p>
                                                                        <p>This is my portfolio, a website in which I will submit projects of mine, and introduce myself, as well as how I got here!</p>`;
                        break;
                    case "P2":
                        document.getElementById("projname").innerHTML = "<h1>Robotic Hand</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of writing a program to control a robotic hand, via Arduino, with a digital interface built in Java!</b></p>
                                                                        The intent of this project was to help people with motor disabilities to control a robotic hand with a digital interface on mobile to be able to play chess.`;
                        break;
                    case "P3":
                        document.getElementById("projname").innerHTML = "<h1>Dome House</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of designing a wooden mock-up for a Dome House that could rotate depending on the seasons, in partnership with "Les Cordées de la réussite"!</b></p>
                                                                        <p>The objective of this rotating feature would be to align with the sun, paired with a smart design for windows, to have more, or less sun shining inside, respectively depending on colder, and warmer seasons.</p>`;
                        break;
                    case "P4":
                        document.getElementById("projname").innerHTML = "<h1>Candela Production Line</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of retrofitting a production like by Astriane, the Candela production line!</b></p>
                                                                        <p>Programming, 3D modeling, workshop interventions, this project has it all.</p>
                                                                        <p>This production line is divided in two machines.</p>
                                                                        <p><h2>Candela 1</h2>
                                                                        This machine takes paraffin, optional colored dyes, and compresses it into a candle shape.
                                                                        <h2>Candela 2</h2>
                                                                        This machine takes the solidified paraffin, inserts the wick, the aluminum cover, and delivers it inside boxes.</p>`;
                        break;
                    case "P5":
                        document.getElementById("projname").innerHTML = "<h1>Music Application Melody</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of programming an application that can play music tracks, and display information about the music file, in Python, using the Pygame module!</b></p>
                                                                        <p>The initial objective stems down from a personal reason, that being, having a complete library of thousands of music tracks on mobile, but no way to play them on my computer, reliably, in playlists.</p>
                                                                        <p>This music app is planned to connect to any device, or take any locally stored file, to design playlists, or play audio from another device from its native audio output.</p>`;
                        break;
                    default:
                        document.getElementById("projname").innerHTML = "<h1>Project Name</h1>";
                        document.getElementById("projdesc").innerHTML = "Project Description";
                }
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
