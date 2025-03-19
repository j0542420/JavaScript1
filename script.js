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

    btnClickMe.onclick = function(){
        // window.alert('Hello');
        header.style.color =  "red";
        footer.style.colot = "blue";
        container.style.visiability = "hidden";
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