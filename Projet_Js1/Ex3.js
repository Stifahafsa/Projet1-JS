const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS', frais: 500 },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS', frais: 650 },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS', frais: 700 },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS', frais: 750 }   
];

// Fonction pure pour ajouter une inscription
const pureAppendInscription = (currentInscriptions, newInscription) => {
    return currentInscriptions.concat(newInscription);  // Utilise concat pour créer un nouveau tableau
};

// Exemple d'utilisation
const nouvelleInscription = { id: 14, nom: 'FATIHI', filiere: 'DEVOWFS', frais: 800 };
const nouvellesInscriptions = pureAppendInscription(inscriptions, nouvelleInscription);

console.log(nouvellesInscriptions);


console.log(inscriptions);  // Le tableau original reste inchangé



// Calculer la somme des frais

const totalFrais = inscriptions.reduce((Total, inscription) => {
    return Total + inscription.frais;
}, 0);  // Initialiser le total à 0

console.log(totalFrais);  
