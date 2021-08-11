import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);

        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Añadir nueva transacción</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Motivo</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Añade un motivo..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Cantidad <br />
                        (negativo - gasto, positivo - ingreso)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Añade una cantidad..." />
                </div>
                <button className="btn">Añadir transacción</button>
            </form>
        </>
    )
}
