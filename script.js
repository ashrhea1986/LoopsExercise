// 1
for (i=1; i<=7; i++){
    console.log(i);
};

// 2
for (i=5; i<=25; i+=4){
    console.log(i);
};

// 3a 
const wizards = [
    "Harry Potter",
    "Hermonie Granger", 
    "Ron Weasley"
];

// 3b
for (mainCharacters of wizards){
    console.log(mainCharacters);
};

// 4a 
let harryPotterMovies = 0; 

// 4b 
while (harryPotterMovies < 8){
    harryPotterMovies++;
}
// 4c
console.log(harryPotterMovies);

// Bonus 

// 5a 
const hogwartsHouses = [
    "Griffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
]

// 5b
for (names of hogwartsHouses){
    for (letters of names){
        console.log(letters);
    }
}

// 6a 
const quote = [
    "Yer", 
    "A",
    "Wizard",
    "Harry"
];

// 6b 
//let whatAreYou = quote.join(' ');
//console.log(whatAreYou);
let whatAreYou = "";
while (quote !== whatAreYou){
    console.log(quote.join(" "));
    break;
}