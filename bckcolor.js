(function(){
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==='green'){
            body.style.backgroundColor="seagreen";
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor="#dcd32b";
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor="lightskyblue";
        }
        if(e.target.id==='white'){
            body.style.backgroundColor="white";
        }
        if(e.target.id==='orange'){
            body.style.backgroundColor="#eaab17";
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor="#ca17ca";
        }


    })
})
})();