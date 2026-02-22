const movies = [
    {
        title: "Arcane",
        img: "image/Arcane.png",
        genre: "Animés",
        dateAjout: "2026-02-17",
        synopsis: "Au milieu du conflit entre les villes jumelles de Piltover et Zaun, deux sœurs se battent dans les camps opposés d'une guerre technologique.",
        type: "serie",
        rating: 4.5,
        badge: "HD",
        episodes: [{ name: "Bande-annonce", url: "BD/Arcan.mp4" }]
    },
    {
        title: "Mission: Impossible - The Final Reckoning",
        img: "image/The final.png",
        genre: "Action",
        dateAjout: "2026-02-18",
        synopsis: "Ethan Hunt et son équipe de l'IMF se lancent dans leur mission la plus périlleuse à ce jour.",
        type: "film",
        rating: 5,
        badge: "HD",
        video: "BD/Mission.mp4"
    },
    {
        title: "The Witches",
        img: "image/The witch.png",
        genre: "SF & Fantastique",
        dateAjout: "2026-02-17",
        synopsis: "Une adolescente se retrouve dans un village où les sorcières sont chassées et où elle découvre qu'elle est elle-même une sorcière.",
        type: "serie",
        rating: 3,
        badge: "HD",
        episodes: [
            { name: "Version Originale (VO) - Anglais", url: "Film/The Witches.mp4" },
            { name: "Version Française (VF)" },
        ]
    },
    {
        title: "Stranger Things",
        img: "image/stranger Things.png",
        genre: ["SF & Fantastique", "Horreur"],
        dateAjout: "2026-02-17",
        synopsis: "Quand un jeune garçon disparaît, une petite ville découvre un mystère impliquant des expériences secrètes.",
        type: "serie",
        rating: 4.5,
        badge: "HD",
        episodes: [{ name: "Bande-annonce", url: "Bd/Stranger Things.mp4" }]
    },
    {
        title: "L'Ange et le Mal (couleur)",
        img: "image/Ange du mal.png",
        genre: "Western",
        dateAjout: "2026-02-19",
        isClassic: true,
        synopsis: "Un hors-la-loi très recherché et blessé est recueilli par un père et sa fille, Temperance. Elle fait tout pour essayer de le transformer en honnête homme mais le bandit s'est lancé dans une mission qu'il ne peut arrêter...",
        type: "serie",
        rating: 5,
        episodes: [{ name: "Version Originale (VO)", url: "Film/Ange du mal.mp4" },
        { name: "Version Française (VF)", }
        ]
    },
    {
        title: "Les 12 travaux d'Asterix",
        img: "image/Les 12.png",
        genre: ["Action", "Jeunnesse"],
        dateAjout: "2026-02-20",
        isClassic: true,
        synopsis: "Asterix et Obélix sont envoyés par Getafix pour accomplir les 12 travaux les plus périlleux de la Gaule.",
        type: "film",
        rating: 4.5,
        video: "Film/Les 12 travaux d'Asterix.mp4"
    },
    {
        title: "Asterix chez les bretons",
        img: "image/Chez les bretont.png",
        genre: ["Action", "Jeunnesse"],
        dateAjout: "2026-02-20",
        synopsis: "Les Romains menés par Jules César conquièrent l’île de Grande-Bretagne. Toute ? Non ! Car là aussi, un petit village résiste à l’envahisseur et envoie Jolitorax, un lointain cousin d’Astérix, quérir chez les irréductibles Gaulois de la potion magique pour les aider dans leur combat.",
        type: "film",
        rating: 5,
        video: "Film/Asterix chez les bretont.mp4"
    },
    {
        title: "Asterix et la suprise de Cesar",
        img: "image/Asterix et la suprise de Cesar.png",
        genre: ["Action", "Jeunnesse"],
        dateAjout: "2026-02-20",
        synopsis: "Lorsque Falbala et Tragicomix sont kidnappés, celui qui leur a porté atteinte n’imagine pas qu’il vient de réveiller la colère du village gaulois. D’autant qu’Obélix est amoureux de Falbala…",
        type: "film",
        rating: 5,
        video: "Film/Asterix et la suprise de Cesar.mp4"
    },
    {
        title: "Asterix et Cleopatre",
        img: "image/Asterix et Cleopatre.png",
        genre: ["Action", "Jeunnesse"],
        dateAjout: "2026-02-20",
        isClassic: true,
        synopsis: "Cléopâtre fait le pari de construire un palais en un temps record, afin de montrer à César la grandeur du peuple égyptien. L’architecte Numérobis est chargé des travaux. Celui‐ci fait appel à Panoramix le druide, qui arrive en Égypte pour lui prêter main forte, accompagné de sa célèbre potion et de Astérix et Obélix !",
        type: "film",
        rating: 5,
        video: "Film/Asterix et Cleopatre.mp4"
    },
    {
        title: "Le tombeau des lucioles",
        img: "image/Le tombeau des lucioles.png",
        genre: "Horreur",
        dateAjout: "2026-02-21",
        isClassic: true,
        synopsis: "Japon, été 1945. Après le bombardement de Kobe, Seita, un adolescent, et sa petite sœur Setsuko, se retrouvent orphelins. Ils tentent de survivre par leurs propres moyens dans une nation en ruine, cherchant refuge dans un abri désaffecté illuminé par des lucioles.",
        type: "film",
        rating: 5,
        video: "Film/Le tombeau des lucioles.mp4"
    },
];

const container = document.getElementById('trending');
const videoPlayer = document.getElementById('video-player');
let estEnAttente = false;

function verifierConnexion() {
    if (estEnAttente) return;

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');
    const loginBtn = document.querySelector('#login-page button');

    if (user === "pi" && pass === "ad") {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
        document.getElementById('search-container').style.display = 'block';
        displayMovies(movies);
    } else {
        estEnAttente = true;
        errorMsg.style.display = 'block';
        errorMsg.innerText = "Identifiants incorrects. Veuillez patienter 1 seconde...";
        if (loginBtn) loginBtn.style.opacity = "0.5";

        setTimeout(() => {
            estEnAttente = false;
            if (loginBtn) loginBtn.style.opacity = "1";
            errorMsg.innerText = "Identifiants incorrects.";
        }, 1000);
    }
}

function displayMovies(list) {
    container.innerHTML = "";
    list.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card"; // Utilisation de classe pour le style
        card.style.position = "relative";
        card.style.display = "inline-block";
        card.style.margin = "10px";
        card.style.overflow = "hidden";
        card.style.borderRadius = "8px";

        const img = document.createElement('img');
        img.src = movie.img;
        img.style.width = "200px";
        img.style.display = "block";
        img.style.cursor = "pointer";
        img.onclick = () => showMovieDetails(movie);

        const aujourdhui = new Date();
        const dateFilm = new Date(movie.dateAjout);
        const diffJours = (aujourdhui - dateFilm) / (1000 * 60 * 60 * 24);

        if (diffJours <= 30) {
            const newBadge = document.createElement('div');
            newBadge.innerText = "NOUVEAU";
            newBadge.style.position = "absolute";
            newBadge.style.top = "10px";
            newBadge.style.left = "-25px";
            newBadge.style.background = "#0071eb";
            newBadge.style.color = "white";
            newBadge.style.fontSize = "9px";
            newBadge.style.fontWeight = "bold";
            newBadge.style.padding = "2px 25px";
            newBadge.style.transform = "rotate(-45deg)";
            newBadge.style.pointerEvents = "none";
            card.appendChild(newBadge);
        }

        if (movie.badge) {
            const smallBadge = document.createElement('div');
            smallBadge.innerText = movie.badge;
            smallBadge.style.position = "absolute";
            smallBadge.style.bottom = "8px";
            smallBadge.style.right = "8px";
            smallBadge.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            smallBadge.style.color = "white";
            smallBadge.style.fontSize = "10px";
            smallBadge.style.fontWeight = "bold";
            smallBadge.style.padding = "2px 6px";
            smallBadge.style.borderRadius = "3px";
            smallBadge.style.border = "1px solid rgba(255, 255, 255, 0.5)";
            card.appendChild(smallBadge);
        }

        card.appendChild(img);
        container.appendChild(card);
    });
}

// --- LOGIQUE ATTENTE NAVIGATEUR ---
function preparerEtLancer(url) {
    videoPlayer.pause();
    videoPlayer.src = url;
    videoPlayer.load();

    // On attend que le navigateur ait assez de données (Événement natif)
    videoPlayer.oncanplaythrough = () => {
        videoPlayer.play();
        console.log("Flux prêt, lecture lancée.");
        // On nettoie l'événement pour ne pas le déclencher en boucle
        videoPlayer.oncanplaythrough = null;
    };
}

function showMovieDetails(movie) {
    document.getElementById('accueil-content').style.display = 'none';
    document.getElementById('section-categories').style.display = 'none';
    document.getElementById('movie-details').style.display = 'block';

    document.getElementById('details-title').innerText = movie.title;
    document.getElementById('details-synopsis').innerText = movie.synopsis;

    afficherNotation(movie.rating);

    const listContainer = document.getElementById('list-container');
    const episodesArea = document.getElementById('episodes-area');
    listContainer.innerHTML = "";

    if (movie.type === "serie") {
        episodesArea.style.display = "block";
        movie.episodes.forEach(ep => {
            const btn = document.createElement('button');
            btn.innerText = ep.name;
            btn.style.padding = "10px";
            btn.style.background = "#333";
            btn.style.color = "white";
            btn.style.border = "none";
            btn.style.textAlign = "left";
            btn.style.cursor = "pointer";
            btn.onclick = () => preparerEtLancer(ep.url);
            listContainer.appendChild(btn);
        });
        preparerEtLancer(movie.episodes[0].url);
    } else {
        episodesArea.style.display = "none";
        preparerEtLancer(movie.video);
    }
}

function afficherNotation(noteActuelle) {
    const etoilesContainer = document.getElementById('rating-container');
    etoilesContainer.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.innerText = "⭐";
        star.style.cursor = "pointer";
        star.style.fontSize = "1.5rem";
        star.style.opacity = i <= noteActuelle ? "1" : "0.3";
        star.onclick = () => {
            alert("Merci d'avoir noté " + i + "/5 !");
            afficherNotation(i);
        };
        etoilesContainer.appendChild(star);
    }
}

function retourAccueil() {
    document.getElementById('accueil-content').style.display = 'block';
    document.getElementById('movie-details').style.display = 'none';
    document.getElementById('section-categories').style.display = 'none';
    document.getElementById('row-title').innerText = "Top-tendances";
    videoPlayer.pause();
    displayMovies(movies);
}

function filtrerParGenre(genre) {
    const filtered = movies.filter(m => m.genre === genre);
    displayMovies(filtered);
    document.getElementById('row-title').innerText = genre;
    document.getElementById('accueil-content').style.display = 'block';
    document.getElementById('section-categories').style.display = 'none';
}

function afficherPageCategories() {
    document.getElementById('accueil-content').style.display = 'none';
    document.getElementById('movie-details').style.display = 'none';
    document.getElementById('section-categories').style.display = 'block';
}

const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) => {
        return (
            movie.title.toLowerCase().includes(searchString) ||
            (Array.isArray(movie.genre) ? movie.genre.join(" ").toLowerCase().includes(searchString) : movie.genre.toLowerCase().includes(searchString))
        );
    });

    const titleDisplay = document.getElementById('row-title');
    titleDisplay.innerText = searchString === "" ? "Top-tendances" : `Résultats pour : ${searchString}`;
    displayMovies(filteredMovies);
});