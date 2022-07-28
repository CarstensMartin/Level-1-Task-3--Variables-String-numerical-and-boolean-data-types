// Declare variables
let Mothername = prompt("What is your mother' name?:");
let Streetname = prompt("What is the street name you grew up on?:");
let FavColour = prompt("What was your favourite colour as a child?:");
let Age = Number(prompt("How old are you?:"));
let Randomnumber = Number(prompt("Pick a random number between 1 and 10:"));

// Do calculations
let Bestfriend = Randomnumber;
let Namebestfriend = (Mothername + Streetname);
let Marry = Math.round(Age / Randomnumber);
let Children = (Age % Randomnumber);
let Dyehair = (Age - Randomnumber);

// Display to console
console.log(`In ${Bestfriend} years you are going to meet your best friend named ${Namebestfriend}.
You will get married in ${Marry} years and have ${Children} children.
In ${Dyehair} years you are going to dye your hair ${FavColour}.`);