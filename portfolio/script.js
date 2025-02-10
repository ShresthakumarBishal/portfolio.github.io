
const d = new Date();

var jp = document.querySelectorAll(".jp");
var en = document.querySelectorAll(".en");
const tb = document.getElementById('dropdown-jp');
const tb1 = document.getElementById('dropdown-en');
const fragment = window.location.hash;
var cb = document.getElementById('light-switch');


cb.addEventListener('change', () => {
    document.body.classList.toggle('bg-light', cb.checked);
});

function openForm() {
    document.getElementById("myForm").style.opacity = 1;
    document.getElementById("myForm").style.transform = "translateX(0)";
}

function closeForm() {
    document.getElementById("myForm").style.opacity = 0;
    document.getElementById("myForm").style.transform = "translateX(300px)";
}

tb.addEventListener('click', () => {
    for (a of jp) {
        a.style.display = 'block';
    }
    for (a of en) {
        a.style.display = 'none';
    }
    addHashToLinks('jp');
});
tb1.addEventListener('click', () => {
    for (a of jp) {
        a.style.display = 'none';
    }
    for (a of en) {
        a.style.display = 'block';
    }
    addHashToLinks('en');
});

if (fragment.substring(1) === "jp") {
    tb.click();
}

function addHashToLinks(ln) {
    var links = document.querySelectorAll('.card a');

    links.forEach(function (link) {
        if (link.href.includes('#')) {
            link.href = link.href.split('#')[0] + '#' + ln;
        } else {
            link.href = link.href + '#' + ln;
        }
    });
}

document.getElementById("year").innerHTML = d.getFullYear();