function initDownArrow() {
    const elDownArrow = document.getElementById("more-arrow");
    const elSecondSection = document.getElementsByTagName("section")[1];
    elDownArrow.onclick = () => {
        window.scrollTo(0, elSecondSection.offsetTop);
    };
    elDownArrow.style.cursor = 'pointer';
}

function init() {
    initDownArrow();
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", init);
} else {  // `DOMContentLoaded` has already fired
    init();
}
