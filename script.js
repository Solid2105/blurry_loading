const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) clearInterval(interval);
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, inp_min, inp_max, outp_min, outp_max) => {
    return((num - inp_min) * (outp_max - outp_min)) / (inp_max - inp_min) + outp_min;
}