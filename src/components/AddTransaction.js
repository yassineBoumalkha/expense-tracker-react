import React , { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';


const AddTransaction = (props) => {
    const [transaction , setTransaction] = useState('');
    const [amount , setAmount] = useState(0);
    const context = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random * 100000),
            text: transaction,
            amount: +amount
        };
        context.addTransaction(newTransaction);
    }
    console.log(transaction)
    return (
        <>
          <h3>Add new Transaction</h3>
          <form onSubmit={onSubmit}>
              <div className="form-control" >
                  <label htmlFor="text">Text</label>
                  <input type="text" value={transaction} onChange={(e) => setTransaction(e.target.value)} placeholder="Enter transaction .." />
              </div>
              <div className="form-control">
                  <label htmlFor="amount">Amount <br /> (negative - expense , positive - income)</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount .." />
              </div>
              <button className="btn">Add Transaction</button>
          </form>
        </>
    )   
}

export default AddTransaction
