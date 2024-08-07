const mongoose = require("mongoose");

/* DataBase Schema
todo {
    title: string,
    description: string,
    completed: boolean
}
*/

mongoose.connect("mongodb+srv://kanhaharsh7725:wkl4NUMdWHYUQ9Bn@cluster0.lax0yj6.mongodb.net/todos") //Will have to put this in .env file b4 putting on Github for security

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,   
})

const todo = mongoose.model('todos', TodoSchema)

module.exports = {
    todo: todo 
}