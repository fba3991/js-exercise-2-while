
/* let number = prompt('inserisci un numero da 1 a 10');
let i = 1;
while(i <=10){
   alert(number + 'x' +i+ "="+(number*i));
    i++
} */

/* let frase =prompt ('inserisci una frase');
let parolaDaTrovare=prompt('inserisci una parola da trovare nella frase');
let parolaDaSostituire=prompt('inserisci la parola con cui sostituire la parola trovata');
frase = frase.replace (parolaDaTrovare, parolaDaSostituire);
alert(frase);  */





/*  let url = prompt('inserisci un url');
if((url.startsWith ('http://' || 'https://')) && url.endsWith('.com')){
    alert('url valido');
} else{
    alert('url non valido');
} */


let punteggioUtente = 0;
let punteggioComputer = 0;
while (true) {
    // Lancia il dado per l'utente e il computer
    const dadoUtente = Math.floor(Math.random() * 6) + 1;
    const dadoComputer = Math.floor(Math.random() * 6) + 1;
    let vincitore = "nessuno";
    if (dadoUtente > dadoComputer) {
        vincitore = "utente";
        punteggioUtente++;
    } else if (dadoComputer > dadoUtente) {
        vincitore = "computer";
        punteggioComputer++;
    }
    // Mostra risultato del round
    alert("Utente ha lanciato: " + dadoUtente + "\nComputer ha lanciato: " + dadoComputer + "\nVincitore del round: " + vincitore +
        "\nPunteggio: Utente - " + punteggioUtente + ", Computer - " + punteggioComputer);
   
}



/* 
const maxNumber = parseInt(prompt("inserisci un numero massimo"));
const randomNumber = Math.floor(Math.random()* maxNumber);
let i = 0;
while(true){
    const guess =parseInt(prompt("indovina il numero tra 1 e " + maxNumber))
    i++;
    if(guess===randomNumber){
        alert('Congratulazioni! Hai indovinato il numero ' + randomNumber + ' in ' + i + ' tentativi.');
        break; 
    }else if (guess > randomNumber){
        alert('troppo alto!');
    }else("troppo basso!")



} */