// input
const nameInput = document.querySelector(".nameinput");
const kmInput = document.querySelector(".kminput");
const ageInput = document.querySelector(".ageinput");



// button
const sendButton = document.querySelector(".sendbutton");


// interaz utente
sendButton.addEventListener("click",

    function(){
        let nameValue = nameInput.value;
        let kmValue = parseInt(kmInput.value, 10);
        let ageValue = ageInput.value;

        console.log("Nome inserito:", nameValue, kmValue, ageValue);


        


    }
);




// stabilisco il prezzo al kilometro

// stabilisco sconto under18


// stabilisco sconto over65


// chiedo il chilometraggio


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
    
    
    
    
    
    
