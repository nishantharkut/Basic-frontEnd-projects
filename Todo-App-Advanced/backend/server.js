import express from "express";
import notesRouter from "./src/routes/notesRouter.js";
const app = express();
const port = 5001

// req === request, res === result

/*
HTTPS CODES:
-------------2xx-------------
1. 200 - OK
2. 201 - Created

-------------4xx - client erros -------------
3. 400 - bad request
4. 404 - client errors
5. 401 - unauthorized
6. 403 - forbidden
7. 429 - too many request

---------5xx - server errors ---------
1. 500 - internal server error
2. 503 - server unavailable

*/

/*
 
.json means that someting will be returned in the 

*/

let todos = [];
let id = 1;


app.use("/api/notes", notesRouter);


// //to create something
// app.post("/api/notes", (req, res)=>{
//     res.status(201).json({
//         message : 'Post created successfully'
//     });
// });

// // to get something
// app.get("/api/notes", (req, res)=>{
//     res.status(200).send("you got 5 notes");
// });

// //to update soemthing
// app.put("/api/notes/:id", (req, res)=>{
//     res.status(201).json({
//         message: 'changed the information'
//     });
// });


// //to delete something
// app.delete("api/notes/:id", (req, res)=>{
//     res.status(200).json({
//         message: "deleted"
//     });
// });

app.listen(port, ()=>{
    console.log(`server started on ${port}`);
});