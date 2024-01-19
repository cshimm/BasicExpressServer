import express from 'express'

const app = express()
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.type('text/plain');
    res.status(200)
    res.send('Hello World')
});
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.status(200)
    res.send('About')
});
app.get('/foo', (req, res, next) => {
    res.type('text/plain');
    res.status(200)
    if (Math.floor(Math.random() * 2))
        res.send('sometimes this')
    else next()
});
app.get('/foo', (req, res) => {
    res.type('text/plain');
    res.send('and sometimes that')
});
// app.get(/user(name)?/, (req,res) => {
//     res.type('text/plain');
//     res.status(200)
//     res.send(req.url)
// })
app.get('/user/:username', (req, res) => {
    res.status(200);
    res.send(`Hello ${req.params.username}`);
});
app.get('/api', (req,res) => {
    res.type('text/plain');
    res.status(200);
    console.log(req.query)
    res.send(req.query)
})
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 not found')
})

app.listen(app.get('port'), () => {
    console.log("Server is running")
})