console.log('Javascript is running!');

/* this is a JS block comment
the let statement creates a variable - a chunk of computer memory that can hold references to data that you want to save. we're storing a reference to an element on the page with this line - we're telling Javascript to look for the element with the ID we specify inside of the round brackets (the image tag with the Id of the bitmapGraphic)

document referes to the index.htnl poage; querySelctor is HOW JS  uses CSS to select elements on the page (called a method)

*/

//step #1 - select the elements you want the user to interact with
let Acordion = document.querySelector("#Acordion");
let Cymbals = document.querySelector("#Cymbals");
let ElectricGuitar = document.querySelector("#ElectricGuitar");
let Flute = document.querySelector("#Flute");
let Guitar = document.querySelector("#Guitar");
let Microphone = document.querySelector("#Microphone");
let SnareDrums = document.querySelector("#SnareDrums");
let MusicRecord = document.querySelector("#MusicRecord");
let Piano = document.querySelector("#Piano");
let Xylophone = document.querySelector("#Xylophone");

// step #3 - what happens when events are triggered?

// function logID() {
//     console.log(this.id);
// }
function logID() {
    alert("You have chosen Acordion!");
}
function Cymbal() {
    alert("You have chosen Cymbals!");
}
function ElectricGuitars() {
    alert("You have chosen Electric Guitar!");
}
function Flutes() {
    alert("You have chosen Flute!");
}
function Guitars() {
    alert("You have chosen Guitar!");
}
function Microphones() {
    alert("You have chosen Microphone!");
}
function SnareDrum() {
    alert("You have chosen Snare Drums!");
}
function MusicRecords() {
    alert("You have chosen Music Record!");
}
function Pianos() {
    alert("You have chosen Music Piano!");
}
function Xylophones() {
    alert("You have chosen Xylophone!");
}

// step #2 - how do you want the user to interact with the element?

Acordion.addEventListener('click', logID);
Cymbals.addEventListener('click', Cymbal);
ElectricGuitar.addEventListener('click', ElectricGuitars);
Flute.addEventListener('click', Flutes);
Guitar.addEventListener('click', Guitars);
Microphone.addEventListener('click', Microphones);
SnareDrums.addEventListener('click', SnareDrum);
MusicRecord.addEventListener('click', MusicRecords);
Piano.addEventListener('click', Pianos);
Xylophone.addEventListener('click', Xylophones);




