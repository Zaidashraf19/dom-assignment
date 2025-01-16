// DARK AND LIGHT MODE
const body = document.querySelector ("body");
function dark(){
    body.style.backgroundColor = "black"
    body.style.color = "white"
}
function light(){
    body.style.backgroundColor = "white"
    body.style.color = "black"
}


// ADD TO CARD BUTTON
var h1 = document.querySelector ("#count")
var num = 0
function increase () {
    num += 1
    h1.innerHTML = num
}
function decrease () {
    if (num < 1 ){
        alert ("NOT POSSIBLE")
    } else {
        num -= 1 
        h1.innerHTML = num
    }
}


//Q1)  WORD CHANGE
var div = document.querySelector ("#heading")
function change () {
    div.innerHTML = "CLICKED"
}


//Q2) OUTPUT SHOW
var fullname = document.querySelector ("#fullname") 
var output = document.querySelector ("#output")
function getvalue() {
    const FULLNAME = fullname.value.toUpperCase()
    output.innerHTML = "OUTPUT: " +  FULLNAME
    fullname.value = ""   
}



//Q3) PASSWORD CHECK
var Username = document.querySelector ("#username");
var Password = document.querySelector ("#password");
var Output = document.querySelector ("#passcheck");
function Passwordchecker() {
    if (Username.value == "admin" && Password.value == "1234") {
        Output.innerHTML = "LOGIN SUCCESSFUL!!"
    } else {
        Output.innerHTML = "LOGIN FAILED!!"
    }
        Password.value = ""
        Username.value = ""
}


//Q4) HIDE TEXT
var para = document.querySelector ("#para");
function hidetext() { 
    para.innerHTML = ""
}


//Q5) CLICK AND TEXT CHANGE
var click = document.querySelector("#click");
function clickme() {
    click.innerHTML = "CLICKED"
}


//Q6) CHECK AGE
var age = document.querySelector ("#age");
var checkage = document.querySelector ("#checkage");
function Age() {
    if (age.value == 18) {
        checkage.innerHTML = "You are an adult"
    } else {
        checkage.innerHTML = "You are a minor"
    }
    age.value  = ""
}


//Q7) CLICK AND CHANE PARAGRAPH 
var paragraph = document.querySelector ("#paragraph")
function changes() {
    paragraph.innerHTML = "This text has been updated!"
}


//Q8) HELLO + USER NAME
var Name = document.querySelector ("#name");
var Hello = document.querySelector ("#hello");
function hello() {
    const NAME = Name.value.toUpperCase()
    Hello.innerHTML = "HELLO " + NAME
    Name.value = ""
}


// Q9) 