// import fitColumns from 'isotope-fit-columns';

selectSection(scaleSection, restoreSection);
slideShowTestimonial();
document.querySelector(".section-home").id = "section-present";
document.querySelector(".section-home").style = `display: block; z-index: 6;`;
document.getElementById("setting-theme-icon").addEventListener("click", function() {
    toggleButton("setting-themes", "setting-theme-show");
    document.querySelector(".yellow").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#f5ae52');
        document.getElementById("setting-themes").classList.remove("setting-theme-show");
    });
    document.querySelector(".red").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#d94c48');
        document.getElementById("setting-themes").classList.remove("setting-theme-show");
    });
    document.querySelector(".green").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#6ac045');
        document.getElementById("setting-themes").classList.remove("setting-theme-show");
    });
    document.querySelector(".blue").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#34a3e1');
        document.getElementById("setting-themes").classList.remove("setting-theme-show");
    });
    document.querySelector(".purple").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#bb68c8');
        document.getElementById("setting-themes").classList.remove("setting-theme-show");
    });
    document.querySelector(".sky").addEventListener("click", function() {
        document.documentElement.style.setProperty('--text-color-4', '#6ff9ff');
        document.getElementById("setting-themes").classList.remove("setting-theme-show");
    })
})

document.getElementById("setting-theme-icon").addEventListener("click", () => {
    toggleButton("setting-themes", "close-setting-themes");
})

jQuery(document).ready(function($) {
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item'
    });
    

    $('.portfolio-menu li').click(function(event) {
        var type = $(this).data('type');

        $('.portfolio-menu li').css({"background-color": "transparent", "color": "var(--text-color-3)"});
        $(this).css({"background-color": "var(--text-color-4)", "color": "#000"});
    
        type = '.' + type;
        $('.grid').isotope({
            filter: type
            // filter: type,
            // layoutMode: 'fitColumns'

        })
    })

    
});

function toggleButton(idToggle, classToggle) {
    let element = document.getElementById(idToggle);
    element.classList.toggle(classToggle);
}

function changeButton() {
    document.getElementById("line-1").classList.remove("line-1-after");
    document.getElementById("line-2").classList.remove("line-2-after");
    document.getElementById("line-3").classList.remove("line-3-after");

}

async function selectSection(scaleSection, restoreSection) {
    var buttonSelect = document.querySelector("#btn-select-section");

    buttonSelect.addEventListener("click", async function() {
        let buttonOpen = document.querySelector(".btn-open");

        toggleButton("line-1", "line-1-after");
        toggleButton("line-2", "line-2-after");
        toggleButton("line-3", "line-3-after");

        topFunction();

        if (!buttonOpen) {
            await scaleSection();
            buttonSelect.classList.add = "btn-open";
        } else {
            // await restoreSection("section-home");
            buttonSelect.addEventListener("click", async () => {
                await restoreSection("section-present");
            })
            // document.querySelector("#btn-select-section").classList.remove("btn-open");
        }
    });

}

function topFunction() {
    // ngan chan khong cho trang load lai vi tri cu
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // cuon len dau trang
    window.scrollTo(0,0);
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

        sectionPresent.classList.add("section-present");
        sections[secondSection].classList.add("section-second");
        sections[thirdSection].classList.add("section-third");

        // custom click on home areas
        for (let i = 0; i < homeAreas.length; i++) {
            homeAreas[i].addEventListener("click", function() {
                restoreSection("section-home");
                changeButton();
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
                changeButton();
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
                changeButton();
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
                // jQuery('.portfolio-menu .all').click();
                // $('.grid').isotope({
                //     filter: '.grid-item'
                // })
                
                restoreSection("section-portfolio");
                changeButton();
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
                changeButton();
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
                changeButton();
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
        sections[i].classList.remove("section-present");
        sections[i].classList.remove("section-second");
        sections[i].classList.remove("section-third");
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

function validateContact1() {
    // let clientName = document.querySelector(".client-name");
    // let clientEmail = document.querySelector(".client-email");
    // let textMess = document.querySelector(".text-message");

    // if ()

    let inputs = document.querySelectorAll(".mess-box input");
    for (let i = 0; i < inputs.length; i++) {
        // inputs[i].classList.remove("error");
        // if (inputs[i].value == "") inputs[i].classList.add("error");
        console.log("errrrororo: " + inputs[i].value);
        inputs[i].style = "border-bottom: 2px solid #fff;"
        if (inputs[i].value == "") {
            inputs[i].style = "border-bottom: 2px solid #a62d00;"
        }
    }
}

function validateContact(inputName) {
    let input = document.querySelector(".mess-box " + inputName);
    input.style = "border-bottom: 2px solid #fff;"
    if (input.value == "") {
        input.style = "border-bottom: 2px solid #a62d00;"
    }
}

function slideShowTestimonial() {
    const config = {
        type: 'carousel',
        perView: 2
    }
    new Glide('.glide', config).mount();
}