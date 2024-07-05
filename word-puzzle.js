/** Övning 6 */
console.log(`%cÖvning 6: Word puzzle`, "font-weight:bold");

// Regler
// Du får enbart byta ut en bokstav åt gången.
// Varje ord som bildas måste vara ett korrekt engelskt ord, dvs. det måste finnas i variabeln vid namn ordbok.
// Exempel

// I detta exempel så ska vi få FOUR att bli FIVE. Observera att själva spelet är på engelska.

// FOUR (startord)
// FOUL (Bytte ut R till L)
// FOOL (Bytte ut U till O)
// FOOT (Bytte ut L till T)
// FORT (Bytte ut O till R)
// FORE (Bytte ut T till E)
// FIRE (Bytte ut O till I)
// FIVE (Slutord)

let firstWord = "four".toUpperCase();
let lastWord = "five".toUpperCase();
// let firstWord = "eye".toUpperCase();
// let lastWord = "lid".toUpperCase();


console.log(`TODO: ${firstWord} -> ${lastWord}`);

let enkelOrdlista = [
  "four",
  "foul",
  "fool",
  "foot",
  "fort",
  "fore",
  "fire",
  "five",
];

//let ordlista = enkelOrdlista;
let wordLength = 4;
let ordlista = subsetSameLengthWords(nouns,wordLength);
ordlista = ordlista.concat(subsetSameLengthWords(verbs,wordLength));
ordlista = ordlista.concat(subsetSameLengthWords(adjectives,wordLength));


// eye

//console.log("3-letters: ",subsetSameLengthWords(verbs,3));
//console.log("3-letters: ",subsetSameLengthWords(adjectives,3));



// console.log(ordlista);
console.log(firstWord);
// console.log(findWordsOneLetterDiff(firstWord, ordlista));

let isMatch = true;
let ord = firstWord;
let ordStege = [ord];
while (isMatch) {
  let oneLetterDiffWords = findWordsOneLetterDiff(ordStege, ordlista);
  if (oneLetterDiffWords.length > 0) {
    // console.log("m: ",oneLetterDiffWords);
    if (oneLetterDiffWords.length == 1) {
      ordStege.push(oneLetterDiffWords[0]);
    } else {
      console.log("Help me choose!");
      console.log(oneLetterDiffWords);
      isMatch = false;
      break;
    }
  } else {
    console.log("no next word in dictionary");
    isMatch = false;
    break;
  }
  console.log(ordStege);
  ord = oneLetterDiffWords.pop();
  // isMatch = false;
}

if (ordStege[ordStege.length - 1] === lastWord) {
  console.log("Last word is correct: ", lastWord);
}
console.log("And the ordstege is: ", ordStege);


////////////

function findWordsOneLetterDiff(ordstege, ordlista) {
  for (let h = 0; h < ordStege.length; h++) {
    ordStege[h] = ordStege[h].toUpperCase();
  }
  // ord = ord.toUpperCase();
  let oneLetterDiffWords = [];
  for (let i = 0; i < ordlista.length; i++) {
    ordlista[i] = ordlista[i].toUpperCase();
    isSameLength = true;
    for (let f = 0; f < ordStege.length; f++) {
      if (ordlista[i].length !== ordStege[0].length) {
        isSameLength = false;
        // console.log("f : ",ordlista[i]);
      }
    }
    isAllreadyUsed = false;
    for (let g = 0; g < ordStege.length; g++) {
      if (ordlista[i] === ordStege[g]) {
        isAllreadyUsed = true;
        // console.log("fun3f: ",ordStege[g]);
      }
    }
    if (!isAllreadyUsed && isSameLength) {
      let lettersInCommon = ord.length;
      for (let k = 0; k < ord.length; k++) {
        if (ordlista[i][k] === ord[k]) {
          lettersInCommon--;
        }
      }
      if (lettersInCommon == 1) {
        oneLetterDiffWords.push(ordlista[i]);
      }
    }
  }
  return oneLetterDiffWords;
}

function subsetSameLengthWords(ordlista,nbrOfLetters){
    let newList = [];
    for (let i = 0; i < ordlista.length; i++) {
        if(ordlista[i].length == nbrOfLetters){
            newList.push(ordlista[i]);
        }
    }
    return newList;
}

// Testa med detta pussel:

// EYE (startord)

// LID (Slutord)
