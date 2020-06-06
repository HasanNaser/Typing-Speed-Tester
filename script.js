const ORGIN = document.querySelector("#origin-text");
const INPUT_ENTERED = document.querySelector("#entered-text");
const CLOCK = document.querySelector("#clock");
const BTN_RESET = document.querySelector("#reset-btn");

let x =[0,0,0,0]; 
let started = false;
let interval =0; 

function runTimer(){
    CLOCK.innerHTML = addZeroToFirst(x[0])+":"+addZeroToFirst(x[1])+":"+addZeroToFirst(x[2]);
    x[0]=Math.floor((x[3]/100)/60);
    x[1]=Math.floor((x[3]/100) - (x[0]*60)); 
    x[2]=Math.floor((x[3]) -(x[1]*100) -(x[0]*6000))
    x[3]++;
}

function addZeroToFirst(value){
    return value<=9? "0"+value : value;
}

function startTest(e){
    let enteredTextLenght = INPUT_ENTERED.value.length;
    if(enteredTextLenght === 0 && !started){
       interval = setInterval(runTimer,10);
       started = true;
    }
}

function checkSpell(){
    let enteredText = INPUT_ENTERED.value;
    let originText = ORGIN.innerHTML;
    let currentMatch  =originText.substring(0,enteredText.length);
  
    if(enteredText === originText)  {
        INPUT_ENTERED.style.borderColor ="rgb(49, 182, 49)";
        clearInterval(interval);
    }  
    else
    {
        if(currentMatch === enteredText){
            INPUT_ENTERED.style.borderColor ="blue"; 
        }
        else{
            INPUT_ENTERED.style.borderColor ="orange";
        } 
    }  
}

function restTest(){
      x =[0,0,0,0]; 
      started = false;
      clearInterval(interval);
      interval =0;
      CLOCK.innerHTML = "00:00:00";
      INPUT_ENTERED.value = "";
      INPUT_ENTERED.style.borderColor ="gray"; 
}

INPUT_ENTERED.addEventListener("keypress",startTest,false);
INPUT_ENTERED.addEventListener("keyup",checkSpell,false);
BTN_RESET.addEventListener("click",restTest,false);

