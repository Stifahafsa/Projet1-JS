const personnes = [
    { nom: "ALAMI", age: 33, estMember: true},
    {nom: "FATIHI", age: 24, estMember: false},
    {nom: "RAJI", age: 45, estMember: true},
    {nom: "RAMI", age: 37, estMember: false}
];

// le nouveau tableau members qui filter seul estMember === true puis la methode map pour afficher juste les noms des personnes filtres
var members = personnes.filter(function(person){
    return person.estMember === true;
})
.map(function(person){
    return person.nom
})

console.log(members)

