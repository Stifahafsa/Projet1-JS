let inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
];

//Fonction PureInsert qui ajoute une inscription dans le tableau 

function pureInsert(id, nom, filiere, position) {
    const newInscription = { id, nom, filiere };
    
    // Inserer la nouvelle inscription à la position préférée 
    inscriptions.splice(position, 0, newInscription);
}

// Exemple:
pureInsert(14, 'STIFA', 'DEVOWFS', 2); // la nouvelle inscription a ajouté à la position 2
console.log(inscriptions);


/*------------------------------------------------------------------*/


//Fonction qui permet de supprimer une inscription qui se trouve dans une position dans les tableaux d'inscription

function pureDeleteByPosition(position) {
    // Verifier si la position est valide
    if (position >= 0 && position < inscriptions.length) {
        inscriptions.splice(position, 1); 
    } else {
        console.log('Position invalide'); 
    }
}

// Exemple:
pureDeleteByPosition(0); 
console.log(inscriptions);


/*------------------------------------------------------------------*/


//Fonction qui permet de supprimer une inscription par id 

function pureDeleteByID(id) {

    
    const index = inscriptions.findIndex(inscription => inscription.id === id);
    
    
    if (index !== -1) {
        inscriptions.splice(index, 1); // Remove the inscription at the found index
    } else {
        console.log('Inscription avec l\'ID', id, 'inexistante'); 
    }
}

//Exemple:

pureDeleteByID(11); 
console.log(inscriptions);


/*------------------------------------------------------------------*/


//Fonction qui permet de modifier une inscription dans le tableau 

function pureUpdateByPosition(id, nom, filiere, position) {
    
    if (position >= 0 && position < inscriptions.length) {
        
        inscriptions[position] = { id, nom, filiere };
    } else {
        console.log('Position invalide'); 
    }
}

// Example usage:
pureUpdateByPosition(14, 'LOUKILI', 'DEVOWFS', 1); 
console.log(inscriptions);




/*------------------------------------------------------------------*/


//Fonction qui permet de modifier une inscription dans le tableau des inscriptions par id passee comme parametre


function pureUpdateByID(id, nom, filiere) {
    
    const index = inscriptions.findIndex(inscription => inscription.id === id);
    
   
    if (index !== -1) {
        
        inscriptions[index].nom = nom;
        inscriptions[index].filiere = filiere;
    } else {
        console.log('Inscription avec l\'ID', id, 'inexistante'); 
    }
}

// Exemple:
pureUpdateByID(12, 'NAJIM', 'DEVOWFS'); 
console.log(inscriptions);
    