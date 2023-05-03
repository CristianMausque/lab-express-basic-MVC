require('./db/database-connection')

const express = require('express')
const Coaster = require('./models/coaster.model')
const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('index-page');
});

app.get('/coasters-gallery', (req, res) => {

    Coaster
        .find().sort({ title: 1 })
        .then(allCoasters => res.render('coasters-gallery', { AllCoasters: allCoasters }))
        // .then(allCoasters => console.log(allCoasters))
        .catch(err => console.log(err))
});

app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN 5005'))