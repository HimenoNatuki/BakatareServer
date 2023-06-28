function homeback() {
    location.href = "/";
}

setInterval(function () {
    document.getElementById("d2").innerHTML = new Date().toLocaleString();
}, 1000);

function sirakamihubukichan(){
    document.location.href= "kusa2/index.html"
}

let sirakamihubuki = document.getElementById('scretimg');
sirakamihubuki.addEventListener('click',sirakamihubukichan)