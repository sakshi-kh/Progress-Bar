let number=document.querySelector("#num");
let counter=0;
setInterval(()=>{
    if(counter==75){
        clearInterval();
    }else{
    counter++;
    number.innerHTML=counter + "%";
    }
},35);
