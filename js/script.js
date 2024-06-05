// input
const nameInput = document.querySelector(".nameinput");
const kmInput = document.querySelector(".kminput");



// button
const sendButton = document.querySelector(".sendbutton");


// interaz utente
sendButton.addEventListener("click",

    function(){
        let nameValue = nameInput.value;
        let kmValue = parseInt(kmInput.value, 10);
        console.log("Nome inserito:", nameValue, "chilometraggio inserito:", kmValue);


        
        console.log("il chilometraggio dell utente è:",kmValue);


    }
);




// stabilisco il prezzo al kilometro

const prezzoAlKm = 0.21;

// stabilisco sconto under18

const sconto18 = 0.80;

// stabilisco sconto over65

const sconto65 = 0.60;

// chiedo il chilometraggio

let chilometraggio = 10;
console.log("il chilometraggio scelto dall'utente è:",chilometraggio);

// calcolo il prezzo in base alla distanza

let prezzoKm = prezzoAlKm * chilometraggio;
console.log("Il prezzo per il chilometraggio selezionato è:", prezzoKm);

// chiedo l'età


// calcolo se applicare sconti per l'età

// if(etaUtente<18){

//     prezzoKm = prezzoKm * sconto18;
    
    
// }else if(etaUtente>=65){

//     prezzoKm = prezzoKm * sconto65;
    

// }

// console.log("Il prezzo dopo l'applicazione di eventuali sconti e privo di tagli di decimali è", prezzoKm);

// // taglio i decimali in eccesso

// let prezzoFinale = Math.round(prezzoKm * 100) / 100;

// // Do il prezzo finale

// console.log("Il prezzo finale è",prezzoFinale);
    
    
    
    
    
    
