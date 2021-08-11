import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import Spinner from 'react-bootstrap/Spinner';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions, getTransactions, loading } = useContext(GlobalContext);
    console.log(loading);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>Historal de transacciones</h3>
            {loading
                ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
                : <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction._id} transaction={transaction} />
                    ))}

                </ul>
            }

        </>
    )
}
