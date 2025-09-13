import React, {useEffect, useState} from 'react'

function App(){
  const[transactions, setTransactions] = useState([]);
  const[description, setDescription] = useState("");
  const[amount, setAmount] = useState("");
  const[type, setType] = useState("expense");

  useEffect(()=>{
    fetch("http://localhost:5000/api/transactions").
      then((res)=>res.json()).
      then((data)=> setTransactions(data));
  }, []);

  const AddTransaction = async(e)=>{
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: {"Content-type" : "application/json"},
      body : JSON.stringify({description, amount:Number(amount), type}),
    });
    const newTransaction = await res.json();
    setTransactions([...transactions, newTransaction]);

    setDescription("");
    setAmount("");
  };

  const Deletetransaction = async(id)=>{
    await fetch(`http://localhost:5000/api/transactions/${id}`, {
      method: "DELETE",
    });
    setTransactions(transactions.filter((t)=> t.id!== parseInt(id)));

  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>Expense Tracker</h1>

      {/* Form */}
      <form onSubmit={AddTransaction}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button type="submit">Add</button>
      </form>

      {/* Transaction List */}
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.description} - ₹{t.amount} ({t.type})
            <button onClick={() => Deletetransaction(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
