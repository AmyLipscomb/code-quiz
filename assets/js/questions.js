//Questions I want to ask (should have at least 10):

// 1. Which operator is based on value and type? 
// -Answer Choices: (a) == ; (b) === (*correct answer); (c) || ; (d) &&

// 2. Which option is true?
// -Answer Choices: (a) 0 == "0" (*correct answer); (b) 0 === "0" ; (c) 0 < 0; (d) 0 > 1; 

// 3. Which choice is an example of the primative type, string?
// -Answer Choices: (a) 15; (b) true ; (c) false; (d) "1128" (*correct answer); 

// 4. An array has to include which operator?
// -Answer Choices: (a) && ; (b) === ; (c) [] (*correct answer); (d) ==;

// 5. Which is false about an array?
// -Answer Choices: (a) It uses [] ; (b) It can hold multiple variables (boolean, number, string) ; (c) The first element will always be one (*correct answer- because the first element will always be zero)

const questionsArr=[
    { //Question 1
        question:"Which operator is based on value and type?",
        opt1:"== ",
        opt2: "=== ",
        opt3: " ||",
        opt4: "&&",
        correct:"=== "
    },

    { //Question 2
        question:"Which option is true?",
        opt1:"0=='0' ",
        opt2: "0==='0' ",
        opt3: " 0 < 0",
        opt4: "0 > 1",
        correct:"0=='0' "
    },

    { //Question 3
        question:"Which choice is an example of the primative type, string?",
        opt1:" 15 ",
        opt2: " true ",
        opt3: "false",
        opt4: " '1128' ",
        correct:" '1128' "
    },

    { //Question 4
        question:"An array must include which operator?",
        opt1:" &&  ",
        opt2: " === ",
        opt3: " [ ] ",
        opt4: " == ",
        correct:" [ ] "  
    },

    { //Question 5
        question:"Which statement is false about an array?",
        opt1:" It uses [] ",
        opt2: " It can hold multiple variables (boolean, number, string)  ",
        opt3: " The first element will always be one ",
        opt4: " This question was created in JS utilizing an array",
        correct:" The first element will always be one "
    },

    { //Question 6
        question:"Useful ways to debug are the following:",
        opt1:" console.log ",
        opt2: " command + f ",
        opt3: " Call methods in devTools  ",
        opt4: "All of the above.",
        correct: "All of the above."
    },


    { //Question 7
        question:" What order is necessary to create an element?",
        opt1:" Create, Modify, Append ",
        opt2: " Append, Create, Modify ",
        opt3: " Modify, Create, Append",
        opt4: " Create, Append, Modify",
        correct:" Create, Modify, Append "
    },

    { //Question 8
        question:" Which is an example of the primative type, boolean?",
        opt1:" 'i don't know' ",
        opt2: " 5 ",
        opt3: " true ",
        opt4: " '5' ",
        correct:" true "
    },


    { //Question 9
        question:" Which is an example of the primative type, number?",
        opt1:" 60 ",
        opt2: " '60' ",
        opt3: " 'you're almost finished!' ",
        opt4: " '12345' ",
        correct:" 60 "
    },


    { //Question 10
        question:" In order to make a variable global, where should the variable be placed in relation to the function?",
        opt1:" Within the function ",
        opt2: " Outside of the function ",
        opt3: " Below the function ",
        opt4: " Beside the function ",
        correct:" Outside of the function "
    },



]