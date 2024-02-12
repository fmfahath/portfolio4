let btn = document.querySelector('.toggle');
let icon = document.querySelector('.toggle i');
let body = document.querySelector('.hero-header');

btn.onclick = function () {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    }
    else {
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
    }
}