let nme = prompt("What's your name?", "Ronald");
let gdr = prompt("Your gender?", "M or F");
let usr = prompt("Your username?");
let slfDes = prompt("Describe yourself?", "i live in a pineapple");
let brtyr = prompt("What year were you born?", "1899");
let pic = prompt("What is the file source?", "File Name");
let date = new Date().getFullYear();
let age = date - birthYr;
document.getElementById("fname").innerHTML = nme;
document.getElementById("gender").innerHTML = gdr;
document.getElementById("username").innerHTML = usr;
document.getElementById("desc").innerHTML = slfDes;
document.getElementById("year").innerHTML = brtyr;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src =  pic;