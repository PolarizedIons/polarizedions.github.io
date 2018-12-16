function downArrow() {
    const elDownArrow = document.querySelector("#more-arrow");
    const elSecondSection = document.querySelectorAll("section")[1];
    elDownArrow.onclick = () => {
        window.scrollTo(0, elSecondSection.offsetTop);
    };
    elDownArrow.style.cursor = 'pointer';
}

function scrollSpy() {
    // init
    document.querySelector("nav a").setAttribute('class', 'active');
    const headerHeight = document.querySelector("header").clientHeight;
    const sections = document.querySelectorAll("section");

    const update = () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        let newActive = null;
        for (section of sections) {
            if (section.offsetTop <= scrollPosition + headerHeight ) {
                newActive = section;
            }
            else {
                break;
            }
        }

        document.querySelector('nav a.active').setAttribute('class', ' ');
        document.querySelector('nav a[href*=' + newActive.id + ']').setAttribute('class', 'active');
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
