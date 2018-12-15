function downArrow() {
    const elDownArrow = document.querySelector("#more-arrow");
    const elSecondSection = document.querySelector("section")[1];
    elDownArrow.onclick = () => {
        window.scrollTo(0, elSecondSection.offsetTop);
    };
    elDownArrow.style.cursor = 'pointer';
}

function scrollSpy() {
    // init
    document.querySelector("nav a").setAttribute('class', 'active');
    const headerHeight = document.querySelector("header").style.height;
    const sections = {};
    for (section of document.querySelectorAll("section")) {
        sections[section.id] = section.offsetTop;
    };

    const update = () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (id in sections) {
            if (sections[id] <= scrollPosition + headerHeight) {
                document.querySelector('nav a.active').setAttribute('class', ' ');
                document.querySelector('nav a[href*=' + id + ']').setAttribute('class', 'active');
                
            }
        }
    };

    window.onscroll = update;
    update();
}

function init() {
    downArrow();
    scrollSpy();
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", init);
} else {  // `DOMContentLoaded` has already fired
    init();
}
