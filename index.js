const http = require('http');
const hostname = '127.0.0.1';
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (parsed.pathname === "/")
    {
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
    }
    else if(parsed.pathname === "/about")
    {
        res.write('<h1 style="color: red">My names Daniel Lin</h1>');
        res.write('<p>Im a learner at per scholas</p>');
    }
    else if(parsed.pathname === "/home")
    {
        res.write('<h1 style="color: red">Homepage</h1>');
        res.write('<p>Hello Im A Coder</p>');
    }
    res.end();
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/home`);
});