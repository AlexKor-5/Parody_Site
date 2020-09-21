let init = () => {
    let mainBtn = document.querySelectorAll(`[data-home-btn]`);
    let dropoutBtn = document.querySelectorAll(`[data-dropout]`);
    let _RedCol = document.querySelector(`.specialRed`);
    let cssRedColor;

    let mainAction = () => {

    }
    let hideDropDown = (index) => {
        dropoutBtn[index].style.opacity = 0;
        mainBtn[index].style.backgroundColor = `transparent`;
    }
    let showDropDown = (index) => {
        dropoutBtn[index].style.opacity = 1;
        mainBtn[index].style.backgroundColor = cssRedColor;
    }

    let main = (() => {
        mainBtn.forEach((element, index) => {
            element.addEventListener('mouseover', () => { showDropDown(index) }, false);
            element.addEventListener('mouseout', () => { hideDropDown(index) }, false);
        });
        let t = getComputedStyle(_RedCol);
        cssRedColor = t.backgroundColor;

    })();

}
window.addEventListener('load', init, false);