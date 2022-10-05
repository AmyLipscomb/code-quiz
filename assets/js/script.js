//Allows you to manipulate the html via JavaScript //Accessing the HTML elements
const startBtn=document.querySelector("#startBtn");
const heroEl=document.querySelector(".hero");
const qContainer=document.querySelector("#question-container");
const qHel=document.querySelector("#quiz-heading");
const btnHolder=document.querySelector("#button-holder");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector('#btn5'); //to connect the high score button from html to js


const highScoreForm=document.querySelector("#highScore-page");

var index=0;
//^const variables can never change. So, had to change the index to a var instead.



function startQuiz(){
    qContainer.classList.replace("hide","show");
    renderKeys();
    countdown();
}

function renderKeys(){
    qHel.textContent=questionsArr[index].question;
    btn1.textContent=questionsArr[index].opt1;
    btn2.textContent=questionsArr[index].opt2;
    btn3.textContent=questionsArr[index].opt3;
    btn4.textContent=questionsArr[index].opt4;
    btn1.setAttribute("value",questionsArr[index].opt1);
    btn2.setAttribute("value",questionsArr[index].opt2);
    btn3.setAttribute("value",questionsArr[index].opt3);
    btn4.setAttribute("value",questionsArr[index].opt4);
}


function qAnswer(){
    qContainer.classList.replace("hide","show");
    qHel.textContent=questionsArr[index].correct;
    btn1.textContent=questionsArr[index].opt1;
    btn2.textContent=questionsArr[index].opt2;
    btn3.textContent=questionsArr[index].opt3;
    btn4.textContent=questionsArr[index].opt4;
    btn1.setAttribute("value",questionsArr[index].opt1);
    btn2.setAttribute("value",questionsArr[index].opt2);
    btn3.setAttribute("value",questionsArr[index].opt3);
    btn4.setAttribute("value",questionsArr[index].opt4);
} //Created this function to check the answer. Checked the site, and it's not doing anything. Need to look back at this.

startBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("click");
    heroEl.classList.add("hide");
    startQuiz() //call the function
})

btnHolder.addEventListener("click",(event)=>{
    event.preventDefault();
    const userChoice=this.event.target.value;
    console.log(userChoice);
    if(userChoice==questionsArr[index].correct){
        console.log("correct");
    }
    else{
        console.log("incorrect");
    }
    if (index >=questionsArr.length-1){
        document.querySelector("#question-container").classList.add("hide"); //Removes the elements within the question container. Want to add the hide class, to hide the question form.
        
        console.log(highScoreForm);
        highScoreForm.classList.remove("hide"); //Displays the form.


        return;
    }
    index++
    renderKeys() 
})

btn5.addEventListener("click",function(event){
    event.preventDefault();
    var remainingScore=timeLeft;
    localStorage.setItem
    highScoreForm.classList.remove("hide");
    
})












//After this function, create a function to check the answer. Which is going to take a parameter.
//This function is going to be called insided of the btnHolder, and I'm going to write 'UserChoice' within the startQuiz parentheses
//Then make an if statement

//when they click on the button is that a correct answer or not

//look at Mod 4 Acitivity 26 (Local Storage Tools)