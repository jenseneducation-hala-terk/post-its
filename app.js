// Libraries
const express = require('express')
const uuid = require('uuid')

// App Instance
const app = express()

//
// Data
//

// Post-it collection
let collection = []

//
// Express Configuration
//

// Templating Engine
app.set("view engine", "ejs")
// Enable Express to serve static files from /public
app.use('/public', express.static('public'))
// Enable Express to read form data
app.use(express.urlencoded())

//
// Routes
//

app.get('/', (req,res) => {
    res.render("index", {notes: collection})
})

app.post('/add', (req,res) => {
    collection.push({
        content:req.body.content, 
        _id: uuid()
    })
    res.redirect('/')
})

app.post('/delete/:id', (req,res) => {
    const id = req.params.id
    collection = collection.filter(postit => postit._id != id)
    res.redirect('/')
})

app.post('/edit/:id', (req,res) => {
    const id = req.params.id
    const note = collection.find(note => note._id == id)
    note.content = req.body.content
    res.redirect('/')
})

app.listen(8080, () => console.log("We rollin"))









// const NeDB = require('nedb')
// const postits = new NeDB({filename:'postits.db', autoload:true})