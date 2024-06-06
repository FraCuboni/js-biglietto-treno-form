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
        let cpCode = Math.floor(Math.random() * 10000)

        // calc prezzo
        let price = kmValue * priceForKm;

        if(ageValue==="minor"){
            price = price * sale18;
            AgeValue = (' sconto minorenne')
            
        }else if(ageValue==="above 64"){
            price = price * sale65;
            AgeValue = (' sconto over65')

        }else{
            price = price;
            AgeValue = (' nessuno sconto')
        }

        // output prezzo 
        console.log(price);
        document.getElementById('nameOutput').innerHTML = nameValue;
        document.getElementById('saleOutput').innerHTML = "Il tuo sconto è:" + AgeValue;
        document.getElementById('coachOutput').innerHTML = "il tuo vagone è il numero:" + price.toFixed(2);
        document.getElementById('cpOutput').innerHTML = cpCode ;
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


