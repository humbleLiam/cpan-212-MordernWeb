const fs = require("fs");
const http = require("http");
/*Import module */


/* creating server  the app logic goes as a parameter*/
const app  = http.createServer( (req, res) =>{
    console.log(req);

    let x = req.url;

    if(x === '/'){
        fs.readFile('./pages/home.html',(error,data)=> findEndPoint(res, error, data));
    } else if(  x === '/homepage'){
        fs.readFile('./pages/home.html',(error,data)=> findEndPoint(res, error, data));
    } else if(  x === '/about'){
        fs.readFile('./pages/about.html',(error,data)=> findEndPoint(res, error, data));
    } else if(  x === '/contact_us'){
        fs.readFile('./pages/contactUs.html',(error,data)=> findEndPoint(res, error, data));
    } else {
        fs.readFile('./pages/pageNotFound.html',(error,data)=> findEndPoint(res, error, data));
    }
});

/*server listener */
app.listen(3000)

// modulirzing
const findEndPoint = ( res, error, data) =>{
    if (error) {
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end("404 error");
    } else {
        res.writeHead(200,{'content-type': 'text/html'});
        res.end(data);
    }
};