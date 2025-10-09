import express from "express";
const router = express.Router();
import {getAllNotes, postAllNotes, putAllNotes, deleteAllNotes} from "../controllers/notesController.js";


router.get("/", getAllNotes);

router.post("/", postAllNotes);

router.put("/:id", putAllNotes);

router.delete("/:id", deleteAllNotes);


export default router;
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

