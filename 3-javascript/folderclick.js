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
            let id = e.currentTarget.id;
            e.stopPropagation();
            if (hold === 0) {
                openInfo();
                switch(id) {
                    case "P1":
                        document.getElementById("projname").innerHTML = "<h1>Portfolio</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>The very website you're currently seeing!</b></p>
                                                                        <p>This is my portfolio, a website in which I will submit projects of mine, and introduce myself, as well as how I got here!</p>
                                                                        <p>Made to showcase our skills in learning HTML, CSS, and JavaScript, to put together our first school project of learning at Epitech. You will discover, here, who I am, my educational and professional background, as well as my projects and experiences.</p>
                                                                        <h2>Content</h2>
                                                                        <h3>Presentation</h3>
                                                                        <p>You will find a detailed explanation of who I am, and what my current goal is. You will also get to learn my skills, such as languages I can speak, and languages I have programming knowledge of. Lastly, you'll get to see my personal interests.</p>
                                                                        <h3>Background</h3>
                                                                        <p>My studies, and job positions are documented here. You will first see my educational background, and how I got to where I am today. Then, you will see where I've worked in the past, and present.</p>
                                                                        <h3>Projects</h3>
                                                                        <p>The page you're viewing currently. It hosts folders documenting each of my projects, both professional projects, and personal projects.</p>
                                                                        <h3>Contact</h3>
                                                                        <p>If you wish to access my socials, you may do so on this page. You will also have the possibility of sending me an email via the website itself.</p>
                                                                        <h2>Artistic direction</h2>
                                                                        <p>One of the key elements about this project was to give this portfolio an artistic direction. I've settled on the aesthetic you can see here, designed after the Windows 7 operating system, which proved to be very challenging, but also a very good learning experience</p>`;
                        document.getElementById("projfoot").innerHTML = `
                                                                        <table class="tablestyle">
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    <a href="https://github.com/RubenBMartins/Portfolio"><img id="githubLink" src="../1-visual_ressources/contactIcon2.svg" alt="Access Github Repository"></a>
                                                                                </th>
                                                                                <th class="tablesize">
                                                                                    <img class="exitButton" src="../1-visual_ressources/xIcon.svg" alt="Click to close project window">
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    GitHub
                                                                                </th>
                                                                                <th class="tablesize">
                                                                                    Exit
                                                                                </th>
                                                                            </tr>
                                                                        </table>
                                                                        `;
                        break;
                    case "P2":
                        document.getElementById("projname").innerHTML = "<h1>Robotic Arm</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of writing a program to control a robotic arm, via Arduino, with a digital interface built in Java!</b></p>
                                                                        <p>The intent of this project was to help people with motor disabilities to control a robotic hand with a digital interface on mobile to be able to play chess.</p>
                                                                        <h2>Programming the Arduino board</h2>
                                                                        <h3>Motor functions</h3>
                                                                        <p>We were given some basic code to start off from, documentation, and free access to the internet, in order to help with coding. Then, by looking at the board itself, knowing what output on the board handles which servomotor, I was able to make the robotic arm move around.<p>
                                                                        <h3>Setting boundaries</h3>
                                                                        <p>The servomotors couldn't rotate freely due to physical constraint, as well as weight distribution, and general angle limits. As such, angle boundaries had to be set for each servomotor.<p>
                                                                        <p>I had to ensure that the servomotors couldn't reach certain angles that would cause physical damage to the articulations</p>
                                                                        <h2>Physical maintenance</h2>
                                                                        <h3>Initial maintenance check</h3>
                                                                        <p>In the state it was given to us, some of the servomotors were mounted the wrong way around, which led the arm to have decreased mobility ranges, and a generally unpractical design. As such, we had to disassemble it, and reassemble it correctly</p>
                                                                        <h3>Periodical wearing maintenance</h3>
                                                                        <p>The bolts would come loose and cause issues periodically, necessitating additional time to ensuring the bolts are tightened correctly</p>`;
                        document.getElementById("projfoot").innerHTML = `
                                                                        <table class="tablestyle">
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    <img class="exitButton" src="../1-visual_ressources/xIcon.svg" alt="Click to close project window">
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    Exit
                                                                                </th>
                                                                            </tr>
                                                                        </table>
                                                                        `;
                        break;
                    case "P3":
                        document.getElementById("projname").innerHTML = "<h1>Dome House</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of designing a wooden mock-up for a dome-shaped house that could rotate depending on the seasons, in partnership with "Les Cordées de la réussite"!</b></p>
                                                                        <p>The objective of this rotating feature would be to align with the sun, paired with a smart design for windows, to have more, or less sun shining inside, respectively depending on colder, and warmer seasons.</p>
                                                                        <h2>3D modeling</h2>
                                                                        <p>The project first required the use of Solidworks, a 3D modeling CAD software, to shape the mock-up of the dome-shaped house. From designing the wood pieces that would then be laser cut, the aluminum pieces bent into place to house the motor, every constraint and ideas first went through this designing process.</p>
                                                                        <h2>Workshop</h2>
                                                                        <p>Following this process, we would then have to get the files of these pieces to multiple machines, and then be able to create these pieces. With these pieces, we could assemble the model, and ensure our decisions were correct</p>
                                                                        <h2>Commercial price quote</h2>
                                                                        <p>The idea was for a motor to spin the wooden base of the mock-up to allow it to spin, and showcase the mechanic of the model. To do that, we had to make a commercial price quote, and order the motor.</p>`;
                        document.getElementById("projfoot").innerHTML = `
                                                                        <table class="tablestyle">
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    <img class="exitButton" src="../1-visual_ressources/xIcon.svg" alt="Click to close project window">
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    Exit
                                                                                </th>
                                                                            </tr>
                                                                        </table>
                                                                        `;
                        break;
                    case "P4":
                        document.getElementById("projname").innerHTML = "<h1>Candela Production Line</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of retrofitting a production line by Astriane, the Candela production line!</b></p>
                                                                        <p>Programming, 3D modeling, workshop interventions, this project has it all.</p>
                                                                        <p>This production line is divided in two machines, both of which I've worked on to some extent, as it was a class project.</p>
                                                                        <h2>Candela 1</h2>
                                                                        <p>This machine takes paraffin, optional colored dyes, and compresses it into a candle shape.</p>
                                                                        <h2>Candela 2</h2>
                                                                        <p>This machine takes the solidified paraffin, inserts the wick, the aluminum cover, and delivers it inside boxes.</p>
                                                                        <h2>The project</h2>
                                                                        <h3>Workshop</h3>
                                                                        <p>Disassembling, reassembling, getting measures, and placing new pieces, required physical work at the workshop. This aspect was crutial to getting the proper data for 3D modeling mock-ups of each machine from the production line.</p>
                                                                        <h3>3D modeling</h3>
                                                                        <p>I was put in charge of the 3D model of Candela 2, being very experiences with Solidworks. I was able to assemble the machine digitally, handle its constraints, and animate it to showcase how it works. Taking measures in the workshop was crutial to ensure the machine was accurate, with a certain leeway of precision.</p>
                                                                        <h3>Programming</h3>
                                                                        <p>I was tasked to handle the programming of the <b>P</b>rogrammable <b>L</b>ogic <b>C</b>ontroller (PLC), so it could communicate with the <b>H</b>uman-<b>M</b>achine <b>I</b>nterface (HMI), and ensure that HMI input would actually update the state of the machine, so that it could be operated without needing to manually turn on switches in the electrical panel.</p>`;
                        document.getElementById("projfoot").innerHTML = `
                                                                        <table class="tablestyle">
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    <img class="exitButton" src="../1-visual_ressources/xIcon.svg" alt="Click to close project window">
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    Exit
                                                                                </th>
                                                                            </tr>
                                                                        </table>
                                                                        `;
                        break;
                    case "P5":
                        document.getElementById("projname").innerHTML = "<h1>Music Application Melody</h1>";
                        document.getElementById("projdesc").innerHTML = `<p><b>This project consists of programming an application that can play music tracks, and display information about the music file, in Python, using the Pygame module!</b></p>
                                                                        <p>The initial objective stems down from a personal reason, that being, having a complete library of thousands of music tracks on mobile, but no way to play them on my computer, reliably, in playlists.</p>
                                                                        <p>This music app is planned to connect to any device, or take any locally stored file, to design playlists, or play audio from another device from its native audio output.</p>
                                                                        <h2>Initial idea</h2>
                                                                        <p>Initially, this project didn't have the bluetooth aspect in mind, as connecting a phone via USB is possible to access the files.</p>
                                                                        <p>However, Python cannot interpret other devices as local files, needing complex workarounds to make it work even remotely similarly.</p>
                                                                        <h2>Bluetooth</h2>
                                                                        <p>Microsoft store has a free app available called Bluetooth Audio Receiver. From this app, I was able to gather that Bluetooth would work perfectly for this project. As such, after finishing the local file aspect of the app, the next plan is to find a way to add Bluetooth connectivity.</p>`;
                        document.getElementById("projfoot").innerHTML = `
                                                                        <table class="tablestyle">
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    <a href="https://github.com/RubenBMartins/Melody"><img id="githubLink" src="../1-visual_ressources/contactIcon2.svg" alt="Access Github Repository"></a>
                                                                                </th>
                                                                                <th class="tablesize">
                                                                                    <img class="exitButton" src="../1-visual_ressources/xIcon.svg" alt="Click to close project window">
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="tablesize">
                                                                                    GitHub
                                                                                </th>
                                                                                <th class="tablesize">
                                                                                    Exit
                                                                                </th>
                                                                            </tr>
                                                                        </table>
                                                                        `;
                        break;
                    default:
                        document.getElementById("projname").innerHTML = "<h1>Project Name</h1>";
                        document.getElementById("projdesc").innerHTML = "Project Description";
                        document.getElementById("projfoot").innerHTML = "Project Footer";
                }
            }
        });
    });
    if (overlay) {
        overlay.addEventListener("click", function(e) {
            if (e.target === overlay && hold === 1) {
                closeInfo();
            }
        });
    }
    document.addEventListener("click", function(e) {
        const closeButton = e.target.closest(".exitButton");

        if (closeButton && hold === 1) {
            e.preventDefault();
            e.stopPropagation();
            closeInfo();
        }
    });
});
