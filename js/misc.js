function scrollSpy() {
    // init
    document.querySelector('nav a').setAttribute('class', 'active');

    const headerHeight = document.querySelector('header').clientHeight;
    const sections = document.querySelectorAll('section');

    const update = () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let offset = scrollPosition + headerHeight;

        let newActive = null;
        for (section of sections) {
            if (section.offsetTop <= offset) {
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

function enableEmailLink() {
    let emailA = document.getElementById("email");
    emailA.setAttribute("href", "mailto:polarizedions@gmail.com");
}

function init() {
    scrollSpy();
    enableEmailLink();
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', init);
}
else {  // `DOMContentLoaded` has already fired
    init();
}
