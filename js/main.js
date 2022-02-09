
alert('Controllo e-mail')

const emailList = ['mattiapuglisi@hotmail.it' , 'pipporossi@libero.com', 'simoneverdi@gmail.it' ]
const email = prompt('Inserisci email');
let find = false;

for(let i=0; i<emailList.length; i++){
    if(email == emailList[i]){
        find = true;
    }
}

if(find == true){
    alert('email trovata');
}else{
    alert('email non trovata');
}


alert('GIOCO DEI DADI')
const computerNum =  Math.floor( Math.random()*6 + 1);
const userNum =  Math.floor( Math.random()*6 + 1);

if(userNum > computerNum){
    alert(
        `Il numero dell'utente è: ${userNum}
         Il numero del computer è: ${computerNum}
                   Hai vinto`)
}
else{
    alert(
        `Il numero dell'utente è: ${userNum}
         Il numero del computer è: ${computerNum}
                    Hai perso`)
}
