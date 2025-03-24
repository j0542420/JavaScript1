    // display alert good afternoon
    window.alert("Good Afternoon");
    //declare the variable to hold the div element
    let container = document.getElementById("container");
    //getElementById is the method to locate the element by the ID
    // container is an element, is a div in this case
    // set the content of element  
    container.innerHTML = "This is the container place";
    //change color style to red
    container.style.color = "red";


    //add new wlwmwnt p into the page
    document.write("<p>This is new paragraph<p>");

    //declare a variable to hold the header
    let header = document.getElementsByTagName("h1")[0];

    //declare a variable to hold the footer
    let footer = document.getElementsByTagName("h1")[1];
    
    //declare a variable to hold button element
    let button = document.getElementById("btnClickMe");
    //btnClickMe is an HTML element, an object
    //get ElementById is a method of document object

    btnClickMe.oncancel = function(){ // onclick is a property
        // window.alert('Hello');
        header.style.color =  "red";
        footer.style.colot = "blue";
        //container.style.visiability = "hidden";
        img.src = "flower.png";
        //assign the text to input element
        username.value = container.innerText; // change value of input text
        //assign value of input element to out element
        container.innerText = container.innerText;
        //container.innerText = "some text";
    }
//handle mouse over event header
header.onmouseover = function(){
    header.style.color = "red";
}

//handle mouse over event header
header.onmouseout = function(){
    header.style.color = "black";
}

//declare a variable to work on text input user name
let username = document.getElementById("username");
username.onchange = function(){
    container.innerHTML += username.value;
}
// 4 ways to associate a handler to an events

// 1. inline associate
//<button id="btnClickMe" onclick = "window.alert('clicked');">Click Me</button>

// 2. associate the onclick to an annonymus function
//btnClickMe.onClick = function() {
// window.alert("hello")
// }

// 3. associate a non-annonymus function to onclick

// function handleClick()
// {
//     window.alert('clicked');
// }
// btnClickMe.onclick= handleClick;

// 4. user the method
// document.addEventListener('click', handleClick );

// function handleClick()
// {
//     window.alert('clicked');
// }

// 5. arrow function 
//btnClickMe.onclick = ()=>(window.alert('clicked');)

//declare global variable
let x=5;
let PI = 3.14; // declare global constant

let amptString = "";
//let specialString = 'I\'m fine'; or
let specialString = "I'm fine";

btnClickMe.onclick = handleClick2;
function handleClick()
{
    window.alert(x);
}

function handleClick2()
{
    window.alert(y);
}