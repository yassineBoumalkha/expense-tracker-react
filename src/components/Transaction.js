import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({ transaction, amount, id }) => {
    const context = useContext(GlobalContext)
    const sign = amount < 0 ? '-' : '+';
    const color = amount < 0 ? 'red' : 'green';
    const styles = {
        color: color
    }
    return (
        <div>
            <li className={amount < 0 ? 'minus' : 'plus'}>
                {
                transaction
            }
                <span style={styles}>{sign}${Math.abs(amount)}</span>
                <button className="delete-btn" onClick={() => context.deleteTransaction(id)}>X</button>
            </li>
        </div>
    )
}

export default Transaction

