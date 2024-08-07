const zod = require("zod");

/* ZOD Schema looks like this:
For /create endpoint
{
    title: string,
    description: string,
}
For /edit endpoint
{
    id: string,
}
For /deletetodo endpoint
{
    id: string,
}
*/

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),      //FE have to send these inputs compulsory, if any of them is missing 
    id: zod.string(),
})

module.exports = {
    createTodoSchema: createTodoSchema,
    updateTodoSchema: updateTodoSchema
}