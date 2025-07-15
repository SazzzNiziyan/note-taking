const express = require("express")
const connectToDB = require("./src/db/db")
const notemodel = require("./src/models/note.model")

const app = express()

connectToDB()

app.use(express.json())

app.post('/notes',async(req,res)=>{
    const{title,content} = req.body

    console.log(title,content)

    await notemodel.create({
        title,content
    })

    res.json({
        message:"notes is created"
    })
})

app.get('/notes',async (req,res)=>{
    const notes = await notemodel.find()

    res.json({
        message:"notes fetch succefully",
        notes
    })
})

app.delete("/notes/:id",async (req,res)=>{
    const noteId = req.params.id

    await notemodel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message:"note deleted"
    })
})

app.patch("/notes/:id",async (req,res)=>{
    const noteId = req.params.id
    const {title} = req.body

    await notemodel.findOneAndUpdate({
        _id: noteId
    },{
        title : title
    })

        res.json({
        message:"note upadted"
    })

})

app.listen(3000,()=>{
    console.log("server is start")
})