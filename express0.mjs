import express from 'express'

const app = express()
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello World')
});
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About')
});
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 not found')
})

app.listen(app.get('port'), () => {
    console.log("Server is running")
})