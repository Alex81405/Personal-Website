function background () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let body = document.querySelector('body');
    body.style.background = `rgb(${r}, ${g}, ${b})`;
};

let button = document.querySelector('button');
button.addEventListener('click', background);