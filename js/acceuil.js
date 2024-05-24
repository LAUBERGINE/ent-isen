window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const name_firstname = urlParams.get('name');

    if (token) {
        const notesDataURL = "https://api-ent.isenengineering.fr/v1/agenda";

        fetch(notesDataURL, {
            method: 'GET',
            headers: {
                'Token': token
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau détectée');
                }
                return response.json();
            })
            .then(data => {
                prochainCours(data);
            })
            .catch(error => {
                console.error('Erreur lors de la requête : ', error);
            });
    }
    var name_firstname_split = name_firstname.split('.');
    const name = document.getElementById("name");
    const first_name = document.getElementById("first-name");
    first_name.innerText = "Prénom : " + strUcFirst(name_firstname_split[0].trim());
    name.innerText = "Nom : " + strUcFirst(name_firstname_split[1].trim());
};

function isEventOngoing(event) {
    const now = new Date();
    const start = new Date(event.start);
    const end = new Date(event.end);
    return start <= now && now <= end;
}

function prochainCours(data){
    const currentEvent = data.find(isEventOngoing);
    const prochainCoursDiv = document.getElementById("matiere-prochain-cours");
    const prochainCoursInfoDiv = document.getElementById("info-prochain-cours");
    var heureCours = document.createElement("p");
    var matiereCours = document.createElement("p");
    var salleCours = document.createElement("p");
    if (currentEvent) {
        var aSplit = currentEvent.title;
        var mesElements = aSplit.split('-');
        var heureStart = mesElements[0].trim();
        var heureEnd = mesElements[1].trim();
        var matiere = mesElements[2].trim();
        var salle = mesElements[5].trim();
        salleCours.innerText = "Salle : " + salle;
        salleCours.style.paddingLeft = "50px";
        matiereCours.innerText = matiere;
        matiereCours.style.paddingTop = "40px";
        heureCours.innerText = heureStart + " -> " + heureEnd;
    } else {
        matiereCours.innerText = "Aucun événement en cours";
    }
    prochainCoursDiv.appendChild(matiereCours);
    prochainCoursInfoDiv.appendChild(heureCours);
    prochainCoursInfoDiv.appendChild(salleCours);
}

function strUcFirst(a) {
    return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
  }
    