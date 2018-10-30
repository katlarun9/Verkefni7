/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er');
  do {
    let fjoldi = 0;
    let timi = 0;
    let medal;
    let spila;
    let b = {};
    for(let i=1; i<=GAMES_TO_PLAY; i++){
      spila = play(); 
      console.log(spila);
      if(spila==0) {
        break;
      }
      if(spila.teljari == 1) {
        fjoldi++;
      }  
      
      timi = timi + spila.time;


    }
    medal = fjoldi/timi;
    if(spila !=0){
      alert('Þú svaraðir ' + fjoldi + ' af 10 dæmum rétt á ' + timi.toFixed(2) + " sekúndum \nMeðalrétt svör á sekúndu eru " + medal.toFixed(2));  
    }
    }while (confirm('Viltu spila aftur?'))

}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let startTime = new Date();
  let count = 0;
  let correct = ask();
  if (correct == true) {
    count++;
  }
  if(correct == 0) {
    return 0;
  }
  let endTime = new Date();
  let total = (endTime - startTime)/1000;

  let a = {
    time: total,
    teljari: count,
  }
  return a;
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const operators = ['+', '-', '/', '*'];
  const questions = operators[randomNumber(0, operators.length-1)];
  let number1;
  let number2;
  let b;

  switch(questions){
    case '+':
    number1 = randomNumber(1, 100);
    number2 = randomNumber(1, 100);
    b = prompt('Hvað er ' + number1 + '+' + number2 + "?");
    if(number1+number2 == b) {
      return true;
    }
    if (b === null) {
      alert('Hætt í leik');
      return 0;
    }
    break;

    case '-':
    number1 = randomNumber(1, 100);
    number2 = randomNumber(1, 100);
    b = prompt('Hvað er ' + number1 + " - " + number2 + "?");
    if(number1-number2 == b) {
      return true;
    }
    if (b === null) {
      alert('Hætt í leik');
      return 0;
    }
    break;

    case '*':
    number1 = randomNumber(1, 10);
    number2 = randomNumber(1, 10);
    b = prompt('Hvað er ' + number1 + " * " + number2 + "?");
    if(number1*number2 == b) {
      return true;
    }
    if (b === null) {
      alert('Hætt í leik');
      return 0;
    }
    break;

    case '/':
    number1 = randomNumber(2, 10);
    number2 = number1 * randomNumber(2, 10);
    b = prompt('Hvað er ' + number2 + " / " + number1 + "?");
    if(number2/number1 == b) {
      return true;
    }
    if (b === null) {
      alert('Hætt í leik');
      return 0;
    }
    break;
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
