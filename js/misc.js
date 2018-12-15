
// Add functionality to down arrow
const elDownArrow = document.getElementById("more-arrow");
const elSecondSection = document.getElementsByTagName("section")[1];
elDownArrow.onclick = () => {
    window.scrollTo(0, elSecondSection.offsetTop);
};
elDownArrow.style.cursor = 'pointer';
