const path = require('path')
const app = require('express')()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public',  'index.html')))
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public',  'about.html')))
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, 'public',  'contact-me.html')))

app.use((req, res, next) => res.status(400).sendFile(path.join(__dirname, 'public',  '404.html')))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))