var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: 'Article one | Ruthvik Reddy',
    heading: 'Article one',
    date: 'March 08 2018',
    content:`
            This is the content for my first article.....!!! 
            <br>
            
                <p>
            head is the tag at the top of your page containing your meta-tags, styles, scripts and title.
            headings are the h1, h2, h3 etc tags that allow you to size your text.efkelkelkfmldmdlmflelelwdlwm;lqw;lme;lmelmelmwm;wlm;lwm;lem;ldmv;lmlemg;lemw;lemf;wlfmw;lrjbjbms fwjs sjsrutvmeredy 
                 </p>
                 
                 <p>
                head is the tag at the top of your page containing your meta-tags, styles, scripts and title.
                headings are the h1, h2, h3 etc tags that allow you to size your text.
                 </p>
                 
                 <p>
                head is the tag at the top of your page containing your meta-tags, styles, scripts and title.
                headings are the h1, h2, h3 etc tags that allow you to size your text.
                 </p>`
};


function createTemplate(data) {
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
    <!-- The abv line is for better viewing in mobile version -->
        <link href="/ui/style.css" rel="stylesheet" />
    
    </head>
    
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h1>
            ${heading}
        </h1>
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
app.get('/article-one', function (req, res) 
{
   res.send(createTemplate(articleOne));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-two', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-three', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
