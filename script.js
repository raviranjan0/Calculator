let display = document.querySelector(".display");
let buttons = Array.from(document.getElementsByClassName(".operator"));


const calculate = (val) => {

    //handling the keyboard buttons
    if(val == "Backspace"){
      val = "DEL";
    }
    if(val == "Enter"){
      val = "=";
    }
    if(val == "Delete"){
      val = "AC";
    }
  
  
    if(val === "AC"){
      display.innerText = "";
    }
    else if(val === "="){
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    }
    else if(val == "DEL"){
      display.innerText = display.innerText.slice(0, -1);
    }
    else if(val == 'EXP'){
      display.innerText += 'e';
    }
    else{
      display.innerText += val;
    }
  };
  
  buttons.map((btn) => {
    btn.addEventListener("click", (e)=>{
      calculate(e.target.innerText);
    });
  });
  


const keyBoard = function(evt){

    const keyButtons = ['1','2','3','4','5','6','7','8','9','0','+','-' ,'*','/','.', '%',"Backspace","Enter", "Delete"];

    if(keyButtons.includes(evt.key)){
        calculate(evt.key);
      }
    
    }
    
    document.addEventListener("keyup", keyBoard);