
let myinput = document.querySelector(".myinput");
let btn = document.getElementsByClassName("btn");
let equl = document.querySelector(".equl");
let clear = document.querySelector(".clear");

for(let i = 0; i < btn.length; i++){
    btn[i].onclick = function(){
        myinput.value += this.value;
    }
}
equl.onclick = function(){
    myinput.value = eval(myinput.value);
}
clear.onclick = function(){
    myinput.value = "";
}