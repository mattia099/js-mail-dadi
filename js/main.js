


const emailList = ['mattiapuglisi@hotmail.it' , 'pipporossi@libero.com', 'simoneverdi@gmail.it' ]
const email = prompt('Inserisci email');
let find = false;
for(let i=0; i<emailList.length; i++){
    if(email == emailList[i] ){
        find = true;
    }
}

if(find==true){
    alert('email trovata');
}else{
    alert('email non trovata');
}

