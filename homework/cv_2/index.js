selectSection(scaleSection, restoreSection);
document.querySelector(".section-home").id = "section-present";

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
        

        for (let i = 0; i < sections.length; i++) {
            sections[i].style = `visibility: visible;
                                position = absolute;
                                transition-duration: 0.5s;
                                cursor: pointer;`;
            if (sections[i] == sectionPresent) present = i;
        }

        sectionPresent.style.transform = "scaleX(0.85)";
        sectionPresent.style.top = "355px";
        sectionPresent.style.zIndex = 2;

        if (sections[present + 1]) {
            sections[present + 1].style.transform = "scaleX(0.8)";
            sections[present + 1].style.top = "320px";
            sections[present + 1].style.zIndex = 1;

        } else {
            sections[0].style.transform = "scaleX(0.8)";
            sections[0].style.top = "320px";
            sections[0].style.zIndex = 1;
        }

        // if (sections[present + 2]) {
        //     sections[present + 2].style.transform = "scaleX(0.75)";
        //     sections[present + 2].style.top = "285px";
        //     sections[present + 2].style.zIndex = 0;
        // } else {
        //     sections[1].style.transform = "scaleX(0.75)";
        //     sections[1].style.top = "285px";
        //     sections[1].style.zIndex = 0;   
        // }

        for (let i = 0; i < homeAreas.length; i++) {
            homeAreas[i].addEventListener("click", function() {
                restoreSection("section-home");
                document.querySelector(".section-home").id = "section-present";
                document.querySelector("body").style.overflow = "hidden";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                homeAreas[1].style.cursor = "auto";
            });
        }

        for (let i = 0; i < aboutAreas.length; i++) {
            aboutAreas[i].addEventListener("click", function() {
                restoreSection("section-about");
                document.querySelector(".section-about").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                headerMenu.style = ``;
                headerLinks.style = ``;
                headerCopy.style = ``;
                aboutAreas[1].style.cursor = "auto";
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
//         document.querySelector(".header-right-line-2").style = `visibility: hidden;`;
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