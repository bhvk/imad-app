console.log('Loaded!');

//change the main text below hasura's pet (madi) image to new text
var element = document.getElementById("main-text");

element.innerHTML = "Call me Madi";

//animate the image

var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight(){
    marginLeft += 2;
    img.style.marginLeft = marginLeft+'px';
    
    }
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
    
}