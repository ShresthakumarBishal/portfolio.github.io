
const d = new Date();

var jp = document.querySelectorAll(".jp");
var en = document.querySelectorAll(".en");
const tb = document.getElementById('dropdown-jp');
const tb1 = document.getElementById('dropdown-en');
const fragment = window.location.hash;
var cb = document.getElementById('light-switch');

cb.addEventListener('change', () => {
    if (cb.checked) {

        document.body.classList.add('bg-light');
    } else {
        document.body.classList.remove('bg-light');

    }
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

tb.addEventListener('click', () => {
    for (a of jp) {
        a.style.display = 'block';
    }
    for (a of en) {
        a.style.display = 'none';
    }

});
tb1.addEventListener('click', () => {
    console.log('ok');
    for (a of jp) {
        a.style.display = 'none';
    }
    for (a of en) {
        a.style.display = 'block';
    }
});

if (fragment.substring(1) === "en") {
    for (a of jp) {
        a.style.display = 'none';
    }
    for (a of en) {
        a.style.display = 'block';
    }
}

document.getElementById("year").innerHTML = d.getFullYear();