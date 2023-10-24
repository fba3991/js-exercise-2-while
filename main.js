/* let num = prompt('inserisci un numero da 1 a 10');
let i  = 1;
while( i <=10 ) {
 alert( num + 'x' + i + '=' + (num * i ));
 i++ ;
} 
  */
/* let frase = prompt('scrivi una frase');
let parola1 = prompt('inscerisci parola da sostituire');
let parola2 = prompt('inscerisci sostituo');
frase = frase.replace  (parola1, parola2);
alert(frase); */

/* let url = prompt('inserisci un url');
if((url.startsWith ('http://' || 'https://')) && url.endsWith('.com')){
    alert('url valido');
} else{
    alert('url non valido');
} */

/* let vittoriePc = 0;
let vittorieG = 0;
let gioco = 'si';
alert('lancia il dado');
while (gioco === 'si') {

    let dadoPc = Math.ceil(Math.random() * 6);
    let dadoG = Math.ceil(Math.random() * 6);
    alert(' giocatore: ' + dadoG + ' ' + ' pc: ' + dadoPc);
    if (dadoG > dadoPc) {
        alert('hai vinto');
        vittorieG++;
    }
    else if (dadoG < dadoPc) {
        alert('hai perso');
        vittoriePc++;
    }
    else {
        alert('pareggio');
    }
    alert(' punteggio: tu = ' + vittorieG + ' pc = ' + vittoriePc);
    let gioco = prompt('vuoi continuare a giocare?');
    if (gioco != 'si') {
        break;
    }
} */

/* let vittoriePc = 0;
let vittorieG = 0;
let gioco = prompt('Vuoi giocare a dadi?')

while (gioco == 'si'  gioco == 'Si'  gioco == 'SI') {

    alert('Lancia il dado');

    let dadoPc = Math.ceil(Math.random() * 6);
    let dadoG = Math.ceil(Math.random() * 6);

    alert(' TU: ' + dadoG + '  PC: ' + dadoPc);

    if (dadoG > dadoPc) {
        alert('Hai Vinto');
        vittorieG++;
    }

    else if (dadoG < dadoPc) {
        alert('Hai Perso');
        vittoriePc++;
    }

    else {
        alert('Pareggio');
    }

    alert('Punteggio: TU = ' + vittorieG + '  PC = ' + vittoriePc);
    gioco = prompt('Vuoi continuare a giocare?');

} */

