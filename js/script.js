
// Sender bruger til profilsiden efter login
function login() {
    window.location.href= "profil.html";
}

// Sender brugere til opret bruger-siden 
function goToOpret() {
    window.location.href= "opret.html";
}

function opretBruger() {
    window.location.href= "feed.html";
}

function goToLogin() {
    window.location.href= "index.html";
}

// Opdaterer tidpsunktet i statutbaren hvert sekund
setInterval(() => {
    document.querySelector(".tid").innerHTML =
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
}, 1000);