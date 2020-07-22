var na=prompt("enter your name");

var my = "welcome  atreya"+ na;

document.write(my);

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';

}

const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);


function myFunction() {
    var element = document.getElementById("my div");
    
    element.classList.toggle("mystyle");
    

  }