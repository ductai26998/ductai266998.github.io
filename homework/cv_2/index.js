selectSection(scaleSection, restoreSection);
document.querySelector(".section-home").id = "section-present";
document.querySelector(".section-home").style = `display: block; z-index: 6;`;
document.getElementById("setting-theme-icon").addEventListener("click", function() {
    document.getElementById("setting-themes").style.right = "0";
    document.querySelector(".yellow").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#f5ae52');
        document.getElementById("setting-themes").style.right = "-178px";
    });
    document.querySelector(".red").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#d94c48');
        document.getElementById("setting-themes").style.right = "-178px";
    });
    document.querySelector(".green").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#6ac045');
        document.getElementById("setting-themes").style.right = "-178px";
    });
    document.querySelector(".blue").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#34a3e1');
        document.getElementById("setting-themes").style.right = "-178px";
    });
    document.querySelector(".purple").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#bb68c8');
        document.getElementById("setting-themes").style.right = "-178px";
    });
    document.querySelector(".sky").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#6ff9ff');
        document.getElementById("setting-themes").style.right = "-178px";
    })
})

function selectSection(scaleSection, restoreSection) {
    let buttonSelect = document.querySelector("#btn-select-section");

    buttonSelect.addEventListener("click", async function() {
        let buttonOpen = document.querySelector(".btn-open");

        if (!buttonOpen) {
            await scaleSection();
            document.querySelector("#btn-select-section").classList.add = "btn-open";
            console.log("test222");
        } else {
            await restoreSection("section-home");
            document.querySelector("#btn-select-section").classList.remove("btn-open");
        }

        // if (buttonSelect.classList.contains("btn-open")) {
        //     document.querySelector("#btn-select-section").classList.remove("btn-open");
        // } else {
        //     document.querySelector("#btn-select-section").classList.add = "btn-open";
        // }
    });

}

function scaleSection() {
    return new Promise(function() {
        console.log("scale");

        let sections = document.querySelectorAll(".section");
        let sectionPresent = document.querySelector("#section-present");
        let homeAreas = document.querySelectorAll(".home-area");
        let aboutAreas = document.querySelectorAll(".about-area");
        let resumeAreas = document.querySelectorAll(".resume-area");
        let portfolioAreas = document.querySelectorAll(".portfolio-area");
        let blogsAreas = document.querySelectorAll(".blogs-area");
        let contactAreas = document.querySelectorAll(".contact-area");

        let headerMenu = document.querySelector(".menu");
        let headerLinks = document.querySelector(".social-links");
        let headerCopy = document.querySelector(".copy");

        document.querySelector("body").style.overflow = "hidden";

        // tao animation header center
        headerMenu.style = `animation-name: menu-show;
                            animation-duration: 1s;
                            animation-timing-function: ease-in;
                            animation-fill-mode: forwards;`;
        headerLinks.style = `animation-name: social-links-show;
                            animation-duration: 1s;
                            animation-timing-function: ease-in;
                            animation-fill-mode: forwards;`;
        headerCopy.style = `animation-name: copy-show;
                            animation-duration: 1s;
                            animation-timing-function: ease-in;
                            animation-fill-mode: forwards;`;
        // phong to thu nho section 
        let present = 0;
        let secondSection = 1;
        let thirdSection = 2;
        

        for (let i = 0; i < sections.length; i++) {
            if (sections[i] == sectionPresent) present = i;
        }

        if (present < 4) {
            secondSection = present + 1;
            thirdSection = present + 2;
        } else if (present == 4) {
            secondSection = present + 1;
            thirdSection = 0;
        } else {
            secondSection = 0;
            thirdSection = 1;
        }

        hiddenAllSection(sections);

        sections[present].style = `display: block;
                            position = absolute;
                            transition-duration: 0.5s;
                            cursor: pointer;`;
        sections[secondSection].style = `display: block;
                            position = absolute;
                            transition-duration: 0.5s;
                            cursor: pointer;`;
        sections[thirdSection].style = `display: block;
                            position = absolute;
                            transition-duration: 0.5s;
                            cursor: pointer;`;

        sectionPresent.style.transform = "scaleX(0.85)";
        sectionPresent.style.top = "355px";
        sectionPresent.style.height = "100%";
        sectionPresent.style.overflow = "hidden";
        sectionPresent.style.zIndex = 5;

        sections[secondSection].style.top = "320px";
        sections[secondSection].style.height = "100%";
        sections[secondSection].style.overflow = "hidden";
        sections[secondSection].style.transform = "scaleX(0.8)";
        sections[secondSection].style.zIndex = 4;

        sections[thirdSection].style.transform = "scaleX(0.75)";
        sections[thirdSection].style.top = "285px";
        sections[thirdSection].style.zIndex = 3;

        // custom click on home areas
        for (let i = 0; i < homeAreas.length; i++) {
            homeAreas[i].addEventListener("click", function() {
                restoreSection("section-home");
                document.querySelector(".section-home").id = "section-present";
                document.querySelector("body").style.overflow = "hidden";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                hiddenAllSection(sections);
                homeAreas[1].style = "display: block; transition: 0.5s;"
                homeAreas[1].style.cursor = "auto";
            });
        }

        //custom click on about areas
        for (let i = 0; i < aboutAreas.length; i++) {
            aboutAreas[i].addEventListener("click", function() {
                restoreSection("section-about");
                document.querySelector(".section-about").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                hiddenAllSection(sections);
                aboutAreas[1].style = "display: block; transition: 0.5s;"
                aboutAreas[1].style.cursor = "auto";
                aboutAreas[1].style.height = "auto";
            });

        }

        //custom click on resume areas
        for (let i = 0; i < resumeAreas.length; i++) {
            resumeAreas[i].addEventListener("click", function() {
                restoreSection("section-resume");
                document.querySelector(".section-resume").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                hiddenAllSection(sections);
                resumeAreas[1].style = "display: block; transition: 0.5s;"
                resumeAreas[1].style.cursor = "auto";
                resumeAreas[1].style.height = "auto";
            });

        }

        // custom click on portfolio areas
        for (let i = 0; i < portfolioAreas.length; i++) {
            portfolioAreas[i].addEventListener("click", function() {
                restoreSection("section-portfolio");
                document.querySelector(".section-portfolio").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                hiddenAllSection(sections);
                portfolioAreas[1].style = "display: block; transition: 0.5s;"
                portfolioAreas[1].style.cursor = "auto";
                portfolioAreas[1].style.height = "auto";
            });

        }

        // custom click on blogs-areas
        for (let i = 0; i < blogsAreas.length; i++) {
            blogsAreas[i].addEventListener("click", function() {
                restoreSection("section-blogs");
                document.querySelector(".section-blogs").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                hiddenAllSection(sections);
                blogsAreas[1].style = "display: block; transition: 0.5s;"
                blogsAreas[1].style.cursor = "auto";
                blogsAreas[1].style.height = "auto";
            });

        }

        //custom click on contact-areas
        for (let i = 0; i < contactAreas.length; i++) {
            contactAreas[i].addEventListener("click", function() {
                restoreSection("section-contact");
                document.querySelector(".section-contact").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                hiddenAllSection(sections);
                contactAreas[1].style = "display: block; transition: 0.5s;"
                contactAreas[1].style.cursor = "auto";
                contactAreas[1].style.height = "auto";
            });

        }
    })

}

function restoreSection(sectionName) {
    let section = document.querySelector("." + sectionName);

    document.querySelector("#section-present").removeAttribute("id");
    section.style.position = "absolute";
    section.style.transform = "scale(1)";
    section.style.top = "0px";
    section.style.transitionDuration = "0.5s";
    section.style.zIndex = 10;
}

function hiddenAllSection(sections) {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style = "display: none;"
    }
}

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

// function changeButtonSelect() {
//     let buttonSelect = document.querySelector("#btn-select-section");
//     let buttonClose = document.querySelector("#btn-close-select");

//     if (buttonSelect) {
//         console.log("sec");
//         buttonSelect.id = "btn-close-select";
//         document.querySelector(".header-right-line-1").style = `position: absolute;
//                                                                 top: 50%;
//                                                                 left: 50%;
//                                                                 transform: translate(-50%, -50%) rotate(45deg);`;
//         document.querySelector(".header-right-line-2").style = `display: none;`;
//         document.querySelector(".header-right-line-3").style = `position: absolute;
//                                                                 top: 50%;
//                                                                 left: 50%;
//                                                                 transform: translate(-50%, -50%) rotate(-45deg);`;

//     } else {
//         console.log("clo");
//         buttonClose.id = "btn-select-section";
//         document.querySelector(".header-right-line-1").style = ``;
//         document.querySelector(".header-right-line-2").style = ``;
//         document.querySelector(".header-right-line-3").style = ``;

//     }
// }