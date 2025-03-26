const fs = require('fs')
const http = require('node:http')
const path = require('path')

const PORT = process.env.PORT ?? 8080

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": 'text/html' })

    switch(req.url) {
        case '/' :
            fs.readFile(path.join(__dirname, 'public',  'index.html'), (error, data) => {
                if(error) {
                    res.writeHead(500, { "Content-Type": "text/plain" })
                    return res.end('An error has occurred.')
                }

                res.end(data)
            })
        break

        case '/about' :
            fs.readFile(path.join(__dirname, 'public',  'about.html'), (error, data) => {
                if(error) {
                    res.writeHead(500, { "Content-Type": "text/plain" })
                    return res.end('An error has occurred.')
                }

                res.end(data)
            })
        break

        case '/contact-me' :
            fs.readFile(path.join(__dirname, 'public',  'contact-me.html'), (error, data) => {
                if(error) {
                    res.writeHead(500, { "Content-Type": "text/plain" })
                    return res.end('An error has occurred.')
                }

                res.end(data)
            })
        break

        default :
            fs.readFile(path.join(__dirname, 'public',  '404.html'), (error, data) => {
                if(error) {
                    res.writeHead(500, { "Content-Type": "text/plain" })
                    return res.end('An error has occurred.')
                }

                res.end(data)
            })
        break
    }

})

server.listen(PORT, () => console.log(`listening on port ${PORT}`))