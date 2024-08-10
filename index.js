var inputBox=document.querySelector("input");
var errorText=document.querySelector(".invalid");
var errorIcon=document.querySelector(".invalid-icon")

function check(){
    var email=inputBox.value
    var count=0;
    for (let char of email){
        if (char==='@'){
            count+=1
        } 
    }

    if (count!=1){
        errorIcon.style.display="block";
        errorText.style.display="block";
    }
    else{
        errorIcon.style.display="none";
        errorText.style.display="none";
    }
}
