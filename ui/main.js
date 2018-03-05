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

var button = document.getElementById('counter');

button.onclick = function(){
    
    //create a request object to counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {   
            //take an action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();   
            }
        }
        //HTMLHttpRequest not done yet
    };
    //make the request
    request.open('GET', 'http://bhavuk11sharma.imad.hasura-app.io/counter', true);
    request.send(null);
};


//submit name
//capture the name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    //make the request to server and send the name
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {   
            //take an action
            if(request.status === 200) {
                //capture list of names and render it as list
                                    //var names = ['name1', 'name2', 'name3','name4']; //HARDCODED
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++){
                    list += '<li>' + names[i] +'</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        //HTMLHttpRequest not .DONE yet
    };
    //make the request
    request.open('GET', 'http://bhavuk11sharma.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null);
    
    
    
};