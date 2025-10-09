const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/**
 Fields :
 id - auto
 description 
 amount 

 */



let transactions = [];
let id = 1;

app.get("/api/transactions", (req, res) =>{
    res.json(transactions);
});

app.post("/api/transactions", (req, res)=>{
    const {description, amount, type} = req.body;
    if (!description || !amount || !type){
        return res.status(400).json({error : "All fields required"});

    }
    const newTransaction = {id: id++, description, amount, type};
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
});


//deleting an existing one
app.delete("/api/transactions/:id", (req, res)=>{
    const {id} = req.params;
    transactions = transactions.filter((t) => t.id !== parseInt(id));
    res.status(204).end();
});

// editing the existing one
app.put("/api/transactions/:id", (req, res) =>{
    const {id } = req.params;
    const {description, amount, type} = req.body;

    const transaction = transactions.find((t) => t.id===parseInt(id));
    if (!transaction){
        return res.status(404).json({error : "transaction not found"});

    }

    if (description) transaction.description = description;
    if (amount) transaction.amount = amount;
    if (type) transaction.type = type;
    res.json(transaction);

});

app.listen(PORT, ()=>{
    console.log(`server running on :${PORT}`)
});