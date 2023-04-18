const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const blogRoutes =require('./routes/blogRoutes')

const app = express();

app.use(morgan('dev'))

const mongoURI = 'your own config'
mongoose.connect(mongoURI)
    .then(() => {
        app.listen(3000);
    })
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')
app.set('views', './view')

// middleware static files
app.use(express.static('./view/assets'))

app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About Stefano" })
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

app.use('/blogs',blogRoutes)

app.use((req, res) => {
    res.render('404', { title: 'Not Found' })
})


