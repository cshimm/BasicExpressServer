import http from'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    switch(req.url){
        case '/':
            fs.readFile('home.html', 'utf-8', (err, data) => {
                if (!err)
                    res.end(data.toString())
                else
                    return console.error(err)
            })
            res.writeHead(200, {"Content-Type":'text/html'})
            break
        case '/about':
            res.writeHead(200, {"Content-Type":'text/plain'})
            res.end('About')
            break;
        default:
            res.writeHead(404, {"Content-Type":'text/plain'})
            res.end("404 not found")
            break;
    }

})


const port = 3000;
server.listen(process.env.PORT || port,() =>{
    console.log(`Server running on port ${port}`)
} )