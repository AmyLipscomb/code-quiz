//Allows you to manipulate the html via JavaScript
const startBtn=document.querySelector("#startBtn");
const heroEl=document.querySelector(".hero");
const qContainer=document.querySelector("#question-container");
const qHel=document.querySelector("#quiz-heading");
const btnHolder=document.querySelector("#button-holder");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const index=0;

function startQuiz(){
    qContainer.classList.replace("hide","show");
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
})

//After this function, create a function to check the answer. Which is going to take a parameter.
//This function is going to be called insided of the btnHolder, and I'm going to write 'UserChoice' within the startQuiz parentheses
//Then make an if statement