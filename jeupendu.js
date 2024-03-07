const prompt = require("prompt-sync")()
//fonction rondomize
function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
let words = [
    "apache", "tradition", "octopus", "gorille", "sandwich", "hockey", "pendu", "regalade", "cornichon", "tarpin", "fada", "paixdieu"
];
let essai = 10;
let lettre = null
let hideword = "";
let game = 0
let count = 0
//intro
console.log("Bienvenu dans ce jeu du Pendu! Vous connaissez?Je vous explique tout! L'ordinateur va choisir au hasard un mot, votre but est de retrouver ce mot en proposant des lettres. Vous avez 11 tentatives pour découvrir quel mot est caché car si vous échouez votre covins sera pendu!");
game = parseInt(prompt("Voulez-vous faire une partie? Oui (1), Non (2)"));
while (game == 1) {
    // differente variable
    words = [
        "apache", "tradition", "octopus", "gorille", "sandwich", "hockey", "pendu", "regalade", "cornichon", "tarpin", "fada", "paixdieu"
    ];
    essai = 10;
    lettre = null
    hideword = "";
    game = 0
    //choix du mot aleatoirement
    random = randomize(0, words.length - 1)
    console.log("Voici le mot que vous devez trouver! Choisissez une lettre à la fois et choisissez bien!");
    // cacher le mot a faire deviner
    for (let i = 0; i < words[random].length; i++) {
        hideword = hideword + "_"
    }
    console.log(hideword);

    // jeu

    while (hideword != words[random] && essai > 0) {
        lettre = false
        choice = prompt("Choisi une lettre a verifier : ");
        let indexes = [];

        for (let i = 0; i < words[random].length; i++) {
            if (choice == words[random][i]) {
                lettre = true
                indexes.push(i)
            }
        }
        for (let i = 0; i < indexes.length; i++) {
            hideword = hideword.substring(0, indexes[i]) + choice + hideword.substring([indexes[i] + 1])
        }
        indexes = [];
        console.log(hideword);
        if (lettre != true) {
            console.log(`Cette lettre est incorect! Il te reste ${--essai} essai(s)`);
            if (essai < 1) {
                console.log("Perdu, tu as utilisé toutes tes chances!");
                console.log("Vous avez " + (count -= 1) + " points");
            }
        }

    }
    if (hideword = words[random] && essai > 0) {
        console.log("GG! Tu as trouver le mot!");
        console.log("Vous avez " + (count += 1) + " points");
    }
    game = parseInt(prompt("Voulez-vous rejouer? Oui (1), Non (2)"))
}
if (game != 1) {
    console.log("Petit Joueur!");
}