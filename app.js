// Libraries
const express = require('express')

// App Instance
const app = express()

//
// Data
//

// Post-it collection
let postits = []
// Counter for assigning new ID to new post-its
let idcounter = 10000000

//
// Express Configuration
//

// Templating Engine
app.set("view engine","ejs")
// Enable Express to serve static files from /public
app.use('/public', express.static('public'))
// Enable Express to read form data
app.use(express.urlencoded())

//
// Routes
//

const list = [{content:"lol", _id:7}, {content:"bar", _id:0}]

app.get('/', (req,res) => {
    res.render("index", {postits:list})
})

app.post('/add', (req,res) => {
    idcounter = idcounter + 1

    postits.push({
        content:req.body.content, 
        _id:idcounter
    })
    res.redirect('/')
})

app.post('/delete/:id', (req,res) => {
    const id = req.params.id
    postits = postits.filter(postit => postit._id != id)
    res.redirect('/')
})

app.listen(5000, () => console.log("We rollin"))









// const NeDB = require('nedb')
// const postits = new NeDB({filename:'postits.db', autoload:true})