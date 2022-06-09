const fixedBlock = document.querySelector(".filters-price"),
    filters = document.querySelector(".filters");
container = document.querySelector(".container"),
    offsetLeft = container.offsetLeft + 15,
    filtersOffSetTop = filters.offsetTop,
    filterWidth = filters.offsetWidth;
smalloffset = 20;
const fixedscrollblock = () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > (filtersOffSetTop - smalloffset) && scrollDistance <= (filters.offsetHeight + filtersOffSetTop)) {
        fixedBlock.style.left = `${offsetLeft}px`
        fixedBlock.style.width = `${filterWidth}px`
        fixedBlock.classList.remove('absolute');
        fixedBlock.classList.add("fixed");
    } else {
        fixedBlock.style.left = "0px";
        fixedBlock.style.width = `100%`
        fixedBlock.classList.remove("fixed");
    }
    if (scrollDistance >= (filtersOffSetTop - smalloffset) + filters.offsetHeight - fixedBlock.offsetHeight) {
        fixedBlock.classList.add("absolute");
        fixedBlock.style.left = "0px";
        fixedBlock.style.width = `100%`
        fixedBlock.classList.remove("fixed");
    }
};
window.addEventListener("scroll", fixedscrollblock);