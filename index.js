const express = require('express');
const path =require('path');
const bodyParser = require('body-parser')
const server = express('server')

server.use(express.static(path.join(__dirname, 'public')));
 server.use(bodyParser.urlencoded({extended: false}))

const signupRequestHandler =(req, res) =>{
    /*let body ="";
    req.on('data', chunk =>{
        body += chunk
    }
     );
     req.on('end', () =>{
         console.log(body); 
     })*/
     console.log(req.body.email);
     console.log(req.body.password);

    res.send('Bravo')
}
/*const serveHomePage =(req, res) =>{
    //finding the file
    const homepageFilePath = path.join(__dirname, 'public','index.html')
    res.sendFile(homepageFilePath);
}

const serveLoginPage = (req, res) =>{
    const loginpageFilePath =path.join(__dirname, 'public', 'login.html')
    res.sendFile(loginpageFilePath);

}

const servePortfolioPage = (req, res) =>{
    const portfolioPageFilePath =path.join(__dirname, 'public', 'portfolio.html')
    res.sendFile(portfolioPageFilePath);
}
const serveaboutPage = (req, res) =>{
    const aboutpageFilePath =path.join(__dirname, 'public', 'about.html')
    res.sendFile(aboutpageFilePath);

}
//routes
server.get('/', serveHomePage) 
server.get('/login', serveLoginPage)
server.get('/portfolio', servePortfolioPage)
server.get('/about', serveaboutPage)*/
server.post('/signup', signupRequestHandler)
server.listen(3000, () =>console.log('server is ready'))