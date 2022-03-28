var attemptCounter = 1;


a = Math.floor(Math.random() * 100);
console.log(a);


let checkButtonId= document.getElementById("check-button");
let messageInput = document.getElementById("message");
let attemptNum = document.getElementById("attempt_num");
let estimated=document.getElementById('number');
let resetButton= document.getElementById('reset-button');
console.log(estimated.value);
let entered = document.getElementById("entered");
resetButton.className="buttons2";

// messageInput.innerText= "_";         



checkButtonId.addEventListener('click', ()=>{
    if (isNaN(estimated.value)) { 
        messageInput.innerText= "Lütfen sayı giriniz";     
    }     
    else{  
        
    if (estimated.value>a) {
        messageInput.innerText= "Please enter a smaller number..."; 
        entered.innerText=`The last number you entered ${estimated.value}`      
    } 
    else if(estimated.value<a) {
        messageInput.innerText= "Please enter a bigger number...";  
        entered.innerText=`The last number you entered ${estimated.value}`      
      
    }
    else {
        messageInput.innerText= `Congratulations, You guessed in ${attemptCounter} attempts`;
        entered.innerText=`The last number you entered ${estimated.value}`     

        document.body.className = "confetti"
        resetButton.className="buttons";

        

    } 
    estimated.value="";
attemptNum.innerText=attemptCounter ++; 

}
 


});

resetButton.addEventListener("click", () =>{
    a = Math.floor(Math.random() * 100);
console.log(a);
attemptCounter=1;
estimated.value="";
attemptNum.innerText="";
messageInput.innerText= " "; 
entered.innerText=""  
document.body.className = "#"
resetButton.className="buttons2";




}
)

