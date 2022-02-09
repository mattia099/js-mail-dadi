
//EMAIL
const emailList = ['mattiapuglisi@hotmail.it' , 'pipporossi@libero.com', 'simoneverdi@gmail.it' ]
const input = document.getElementById('input-email');
const button = document.getElementById('conferma');

button.addEventListener('click', function(){
    let find = false;
    const email = input.value;
    if(!email)
    {
        alert('inserisci email');
    }
    else{
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

    }
    console.log(email)
})






//DADI

const buttonGioca = document.getElementById('gioca');
const sectionDadi = document.getElementById('dadi')
buttonGioca.addEventListener('click', function(){
    const computerNum =  Math.floor( Math.random()*6 + 1);
    const userNum =  Math.floor( Math.random()*6 + 1);
    sectionDadi.innerHTML += "<h3> Il numero del computer è: "+ computerNum +"</h3>";
    sectionDadi.innerHTML += "<h3> Il tuo numero è: "+ userNum +"</h3>";
    
    if(userNum == computerNum){
        sectionDadi.innerHTML += "<h2>Hai pareggiato</h2>";
    }
    else if(userNum > computerNum){
        sectionDadi.innerHTML += "<h2>Hai vinto</h2>";
    }else{
        sectionDadi.innerHTML += "<h2>Hai perso</h2>";
    }

        
    
})

