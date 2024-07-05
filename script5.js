/** Övning 5: Splita nota*/
console.log(`%cÖvning 5`, "font-weight:bold");

// mata in summan, antal vänner och
// sedan dricks (som skrivs i decimalform d.v.s 10% blir 0.10),
// och får då tillbaks hur mycket varje person i sällskapet skall betala.

let summan = prompt("Summan:");
let antalVänner = prompt("Antal vänner:");
let dricks = prompt("Dricks (i decimalform d.v.s 10% blir 0.10)");

console.log(
  `Om en nota på ${summan} kr inklusive ${dricks * 100
  }% dricks, ska delas mellan ${antalVänner} %csvenska vänner`,
  'font-weight:bold',
  `så betalar varje person ${splitaNotan(summan, antalVänner, dricks)}`
);

function splitaNotan(sum, nbrOfFriends, tip) {
    tip = Number(tip);
  return (sum * (1 + tip)) / nbrOfFriends;
}
