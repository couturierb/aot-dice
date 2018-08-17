function roll() {
    let element = document.getElementById("cube");
    let newElem = element.cloneNode(true);
    newElem.style.animation = `${getAnimationName()} 2s cubic-bezier(0.19, 1, 0.22, 1) forwards`;
    // newElem.style["animation-name"] = getAnimationName();
    // newElem.style["animation-duration"] = "2s";
    // newElem.style["animation-timing-function"] = "linear";
    // newElem.style["animation-fill-mode"] = "forwards";
    // newElem.classList.add("bounce2");
    element.parentNode.replaceChild(newElem, element);
}

const getAnimationName = () => {
    switch (random()) {
        case 0 :
            // document.getElementById("resume-front").innerText++;
            return "spinToFront";
            break;
        case 1 :
            // document.getElementById("resume-back").innerText++;
            return "spinToBack"
            break;
        case 2 :
            // document.getElementById("resume-right").innerText++;
            return "spinToRight"
            break;
        case 3 :
            // document.getElementById("resume-left").innerText++;
            return "spinToLeft"
            break;
        case 4 :
            // document.getElementById("resume-top").innerText++;
            return "spinToTop"
            break;
        case 5 :
            // document.getElementById("resume-bottom").innerText++;
            return "spinToBottom"
            break;
    }
}

const random = () => Math.floor(Math.random() * Math.floor(6));