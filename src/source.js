const express=require('express');
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
//schema
const bookschema=new mongoose.Schema({
    title:String,
    author:String
});
//model
const Books=mongoose.model('Book',bookschema);
//create express app
const app=express();
//get
app.get('/books', async(req,res)=>{
    try{
        const books=await Books.find();
        res.json(books);
    }
    catch(err){
        res.status(500).json({error:'internal server error'});

    }

});
//Middleware
app.use(express.json())
//post
app.post('/books',async(req,res)=>{
    console.log(req.body);
    try{
        const{title,author}=req.body;
        const newBook=new Books({title,author});
        await newBook.save();
        res.status(201).json(newBook);
    }
    catch(err){
        res.status(500).json({error:'internal server error'});

    }
});
//put
app.put('/books/:id',async(req,res)=>{
    console.log(req.params);
    const {id}=req.params;
    const {title,author}=req.body;
    const updatedBook= await Books.findByIdAndUpdate(id,{title});
    res.json(updatedBook)

})
app.listen(3000,()=>{
    console.log('server running on port 3000')
});
//delete
app.delete('/books/:id',async(req,res)=>{
    const {id}=req.params;
    await Books.findByIdAndRemove(id);
    res.sendStatus(204);

});