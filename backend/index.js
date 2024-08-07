const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types"); //Object destructuring here. else const types = require("./types") & then types.createTodoSchema
const { todo } = require("./db");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

console.log("Server running on port 3000")

app.get("/todos", async function(req, res) {
    //DB call
    const todos = await todo.find({}); //no condition here coz we want all todos here, but we can add object for conditions here
    console.log("Todos fetched successfully!")
    res.json({ statusCode: 200, msg: "Todos fetched successfully!", todos });
})

app.post("/create", async function(req, res) {
    const createPayload = (req.body);
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if(!parsedPayload.success)
        return res.status(411).json({
        statusCode: 411,
        msg: "You sent the wrong inputs. Kindly recheck & retry!"
    })
    
    //DB connection
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    console.log("Todos added successfully!")
    res.json({ statusCode: 200, msg: "Todo added successfully!"})
})

app.put("/update", async function(req, res) {
    const updateTodoPayload = req.body;
    const parsedUpdateTodo = updateTodoSchema.safeParse(updateTodoPayload);
    if(!parsedUpdateTodo.success)
        return res.status(411).json({
        statusCode: 411,
        msg: "You sent the wrong inputs. Kindly recheck & retry!"
    })

    await todo.updateOne({
        _id: updateTodoPayload.id,
    }, {
        completed: true
    })
    console.log("Todos updated successfully!")
    res.json({ statusCode: 200, msg: "Todo updated successfully!"})
})

app.delete("/deletetodo", (req, res) => {
    console.log("Todos deleted successfully!")
    res.json({ statusCode: 200, msg: "Todo deleted successfully!"})
})

app.listen(3000)