// console.log('Loaded!');

// //change the main text below hasura's pet (madi) image to new text
// var element = document.getElementById("main-text");

// element.innerHTML = "Call me Madi";

// //animate the image

// var img = document.getElementById("madi");

// var marginLeft = 0;

// function moveRight(){
//     marginLeft += 2;
//     img.style.marginLeft = marginLeft+'px';
// }

// img.onclick = function(){
//     var interval = setInterval(moveRight, 50);   
// };


//counter code

var button = document.getElementById("counter");

button.onclick = function(){
    
    //create a request object to counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE) {   
            //take an action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();   
            }
        }
        //not done yet
    };
    //make the request
    request.open('GET', "http://bhavuk11sharma.imad.hasura-app.io/counter", true);
    request.send(null);
};