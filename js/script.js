// stabilisco il prezzo al kilometro

const prezzoAlKm = 0.21;

// stabilisco sconto under18

const sconto18 = 0.80;

// stabilisco sconto over65

const sconto65 = 0.60;

// chiedo il chilometraggio

let chilometraggio = parseInt(prompt("quanti Km devi viaggiare?"));
console.log("il chilometraggio scelto dall'utente è:",chilometraggio);

// calcolo il prezzo in base alla distanza

let prezzoKm = prezzoAlKm * chilometraggio;
console.log("Il prezzo per il chilometraggio selezionato è:", prezzoKm);

// chiedo l'età

let etaUtente = parseInt(prompt("quanti anni hai?"));
console.log("l'età dell utente è:",etaUtente);

// calcolo se applicare sconti per l'età

if(etaUtente<18){

    prezzoKm = prezzoKm * sconto18;
    
   
}else if(etaUtente>=65){

    prezzoKm = prezzoKm * sconto65;
    

}

console.log("Il prezzo dopo l'applicazione di eventuali sconti e privo di tagli di decimali è", prezzoKm);

// taglio i decimali in eccesso

let prezzoFinale = Math.round(prezzoKm * 100) / 100;

// Do il prezzo finale

console.log("Il prezzo finale è",prezzoFinale);





