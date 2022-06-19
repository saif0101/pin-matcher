// generate pin and display pin

function displayBlock(id){
    document.getElementById(id).style.display= "block";

}
function displayNone(id){
    document.getElementById(id).style.display= "none";

}

const pinGenerate = document.getElementById("pin-generate")
pinGenerate.addEventListener("click",function(){
    var pinNumber = Math.floor((Math.random() * 9000) + 1000);
    document.getElementById("display-pin").value = pinNumber;
    document.getElementById("display-inputPin").value = '';
    displayBlock("attempt");
    
    // emptyValue("display-inputPin");

     
})

// take pin from user

function pinButton(id){
    let historyValue = document.getElementById("display-inputPin").value;
    let givenPin = document.getElementById(id).innerHTML;
    document.getElementById("display-inputPin").value = historyValue + givenPin;

}
//  clear btn

function clearBtn (){
        document.getElementById("display-inputPin").value = "";

}

function cleanLast(){
    let historyValue = document.getElementById("display-inputPin").value;
    let removePin =  historyValue.substr(0,historyValue.length -1);
    document.getElementById("display-inputPin").value = removePin;
}

// submit button and display match & unmatched notification

function submitBtn(){
    let preGenPin = document.getElementById("display-pin").value;
    let preInPin = document.getElementById("display-inputPin").value;
    if( preGenPin == preInPin){
      displayBlock("matched");
      displayNone("unmatched");
      displayNone("attempt");
    }
    else{
        displayBlock("unmatched");
        displayNone("matched");
        displayBlock("attempt");

    }
}
   
    
   
    
