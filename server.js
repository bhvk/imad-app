var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    
    "article-one" : {
    title: "Article 1 | Bhavuk",
    heading: "Article One",
    date: "Aug 5, 2018",
    content: 
    `
        <div>
          <p>
            This is the first article and this sentence will now be repeated cuz <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd>. <br>
          </p>
          <p>
            This is the first article and this sentence will now be repeated cuz <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd>. <br>
          </p>
          <p>
            This is the first article and this sentence will now be repeated cuz <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd>. <br>
          </p>
        </div>

        <div>
          <p>
            This is the first article and this sentence will now be repeated cuz <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd>. <br>
          </p>
          <p>
            This is the first article and this sentence will now be repeated cuz <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd>. <br>
          </p>
          <p>
            This is the first article and this sentence will now be repeated cuz <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd>. <br>
          </p>
        </div> 
    `
    
    
},
    "article-two" : {
        title: "Article 2 | Bhavuk",
        heading: "Article Two",
        date: "Aug 10, 2018",
        content:
        `
        <div>
          <p>
            This is how you copy: <kbd>⌘</kbd>+<kbd>C</kbd>
          </p>
          <p>
            This is how you copy: <kbd>⌘</kbd>+<kbd>C</kbd>
          </p>
          <p>
            This is how you copy: <kbd>⌘</kbd>+<kbd>C</kbd>
          </p>
        </div>

        <div>
          <p>
            This is how you copy: <kbd>⌘</kbd>+<kbd>C</kbd>
          </p>
          <p>
            This is how you copy: <kbd>⌘</kbd>+<kbd>C</kbd>
          </p>
          <p>
            This is how you copy: <kbd>⌘</kbd>+<kbd>C</kbd>
          </p>
        </div>
        <hr>
        <p> <em>Every Programmer's Life.</em> </p>
        
        `
    },
    "article-three": {
        title: "Article 3 | Bhavuk",
        heading: "Article Three",
        date: "Aug 15, 2018",
        content:
        `
        <div>
          <p>
            This is how you paste: <kbd>⌘</kbd>+<kbd>V</kbd>
          </p>
          <p>
            This is how you paste: <kbd>⌘</kbd>+<kbd>V</kbd>
          </p>
          <p>
            This is how you paste: <kbd>⌘</kbd>+<kbd>V</kbd>
          </p>
        </div>

        <div>
          <p>
            This is how you paste: <kbd>⌘</kbd>+<kbd>V</kbd>
          </p>
          <p>
            This is how you paste: <kbd>⌘</kbd>+<kbd>V</kbd>
          </p>
          <p>
            This is how you paste: <kbd>⌘</kbd>+<kbd>V</kbd>
          </p>
        </div>
        <hr>
        <p> <em>Every Programmer's Life.</em> </p>
        `
    }
};

function createTemplate(data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

    var htmlTemplate = 
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="ui/style.css">
      </head>
      <body>
        <div class="container">        
            <div>
              <a href="/">Home</a>
            </div>
            <hr>
            <h3>${heading}</h3>
            <div>
              ${date}
            </div>
            <div>
                ${content}
            </div>  
        </div>
      </body>
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    //articleName == article-one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

/*
app.get('/article-two', function(req, res){
   res.send(createTemplate(artTwo));
});

app.get('/article-three', function(req, res){
   res.send(createTemplate(artThree));
});

*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
