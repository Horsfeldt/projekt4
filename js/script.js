
// Sender brugeren til profilsiden efter login
function login() {
    window.location.href= "profil.html";
}

// Sender brugeren til opret bruger-siden 
function goToOpret() {
    window.location.href= "opret.html";
}

// Sender brugeren til feed-siden
function opretBruger() {
    window.location.href= "feed.html";
}

// Sender brugeren tilbage til logind-siden
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