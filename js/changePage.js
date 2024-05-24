const urlParams = new URLSearchParams(window.location.search);
const Ptoken = urlParams.get('token');
const Pname_firstname = urlParams.get('name');

const note = document.getElementById("notes");
const retard = document.getElementById("retard");
const planning = document.getElementById("planning");
const home = document.getElementById("home");
const compte = document.getElementById("compte");

note.addEventListener("click", function () {
    window.location.href = `notes.html?name=${Pname_firstname}&token=${Ptoken}`;
});
retard.addEventListener("click", function () {
    window.location.href = `absences.html?name=${Pname_firstname}&token=${Ptoken}`;
});
planning.addEventListener("click", function () {
    window.location.href = `planning.html?name=${Pname_firstname}&token=${Ptoken}`;
});
home.addEventListener("click", function () {
    window.location.href = `acceuil.html?name=${Pname_firstname}&token=${Ptoken}`;
});
compte.addEventListener("click", function () {
    window.location.href = `index.html`;
});