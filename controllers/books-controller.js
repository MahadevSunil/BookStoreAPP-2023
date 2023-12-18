const Book = require("../model/Book");

const getAllBooks = async(req,res,next)=>{
    
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message: "No Products found"})
    }
    res.status(200).json({books});
};

const getById = async (req,res,next)=>{
    const id = req.params.id;
    let book;

    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err);
    }
    
    if(!book){
        return res.status(500).json({message:"No book Found"})
    }
    return res.status(200).json({book});
} 

const addBooks = async (req,res,next)=>{
    let book;
    const {name,author,description,price,available,image} = req.body; 
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image

        });

        await book.save();

    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:"Unable To add"})
    }
    return res.status(200).json({book});
}

const updateBook = async (req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body; 
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,description,
            price,available,
            image

        });
        await book.save();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable To Update By this ID"})
    }
    return res.status(200).json({book});
};

const deleteBook = async (req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
       return res.status(404).json({message:"Unable to Delete By this ID"});
    }
    return res.status(200).json({message:"Product Sucessfully Deleted"});
}

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;