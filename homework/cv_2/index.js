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
        let present = 0;

        for (let i = 0; i < sections.length; i++) {
            sections[i].style = `visibility: visible;
                                position = absolute;
                                transition-duration: 0.5s;`;
            if (sections[i] == sectionPresent) present = i;
        }

        sectionPresent.style.transform = "scale(0.85)";
        sectionPresent.style.top = "255px";
        sectionPresent.style.zIndex = 3;

        if (sections[present + 1]) {
            sections[present + 1].style.transform = "scale(0.8)";
            sections[present + 1].style.top = "125px";
            sections[present + 1].style.zIndex = 2;

        } else {
            sections[0].style.transform = "scale(0.8)";
            sections[0].style.top = "275px";
            sections[0].style.zIndex = 2;
        }

        if (sections[present + 2]) {
            sections[present + 2].style.transform = "scale(0.75)";
            sections[present + 2].style.top = "169px";
            sections[present + 2].style.zIndex = 1;
        }

        for (let i = 0; i < homeAreas.length; i++) {
            homeAreas[i].addEventListener("click", function() {
                restoreSection("section-home");
                document.querySelector(".section-home").id = "section-present";
                document.querySelector("body").style.overflow = "hidden";
            });
        }

        for (let i = 0; i < aboutAreas.length; i++) {
            aboutAreas[i].addEventListener("click", function() {
                restoreSection("section-about");
                document.querySelector(".section-about").id = "section-present";
                document.querySelector("body").style.overflow = "visible";
                console.log("test");
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