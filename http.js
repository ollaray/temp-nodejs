const http = require('http');
//console.log(http);

const server = http.createServer(
    (request, response) => {
        console.log(request.url);
        if(request.url === '/'){
            response.end('Welcome to our Home Page');
        }else if(request.url === '/about'){
            response.end('Here is the about page');
        }else{
            response.end(
                    `<h1>Oops!</h1>
                    <p>Page not Found</p>
                    <a href="/">Back Home</a>
                    `
                   );
        }
      
    }
)

server.listen(5000);