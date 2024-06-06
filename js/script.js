// input
const nameInput = document.querySelector(".nameinput");
const kmInput = document.querySelector(".kminput");
const ageInput = document.querySelector(".ageinput");

// button
const sendButton = document.querySelector(".sendbutton");
const resetButton = document.querySelector(".resetbutton");

// costanti km & sconti
const priceForKm = 0.21;
const sale18 = 0.80;
const sale65 = 0.60;


// interaz utente
sendButton.addEventListener("click",

    function(event){
        event.preventDefault();

        // do i valori alle
        let nameValue = nameInput.value;
        let kmValue = parseInt(kmInput.value, 10);
        let ageValue = ageInput.value;

        // calc prezzo
        let price = kmValue * priceForKm;

        if(ageValue==="minor"){
            price = price * sale18;
            
        }else if(ageValue==="above 64"){
            price = price * sale65;

        }else{
            price = price;
        }

        // output prezzo 
        console.log(price);
        document.getElementById('nameOutput').innerHTML = nameValue;
        document.getElementById('saleOutput').innerHTML = "Il tuo sconto è:" + price.toFixed(2);
        document.getElementById('coachOutput').innerHTML = "il tuo vagone è il numero:" + price.toFixed(2);
        document.getElementById('cpOutput').innerHTML = "codice cp:" + price.toFixed(2);
        document.getElementById('ticketPrice').innerHTML = "Prezzo del biglietto: €" + price.toFixed(2);
    
    }
);


  

resetButton.addEventListener('click',

    function(event){
        event.preventDefault();

        nameInput.value = "";
        kmInput.value = "";
        ageInput.value = "minor";
        document.getElementById('nameOutput').innerHTML = "";
        document.getElementById('ticketPrice').innerHTML = "";

    }
);


