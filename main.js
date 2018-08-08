const animation = [
    {name : 'spinToFront', occurence : 0},
    {name : 'spinToBack', occurence : 0},
    {name : 'spinToRight', occurence : 0},
    {name : 'spinToLeft', occurence : 0},
    {name : 'spinToTop', occurence : 0},
    {name : 'spinToBottom', occurence : 0}
];

function roll() {
    let rand = Math.floor(Math.random() * Math.floor(6));
    let element = document.getElementById("cube");
    let newElem = element.cloneNode(true);

    animation[rand].occurence++;
    newElem.style.animation = `${animation[rand].name} 2s cubic-bezier(0.19, 1, 0.22, 1) forwards`;
    element.parentNode.replaceChild(newElem, element);
}




(function() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./sw.js')
                 .then(function() { console.log("Service Worker Registered"); });
    }
})();