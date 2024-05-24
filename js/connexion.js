function performLogin() {
    const url = 'https://api-ent.isenengineering.fr/v1/token';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `{"username":"${username}","password":"${password}"}`,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur réseau détectée');
        }
        return response.text(); 
    })
    .then(html => {
        window.location.href = `acceuil.html?name=${username}&token=${html}`;
    })
    .catch(error => {
        console.error('Erreur lors de la requête : ', error);
    });
}