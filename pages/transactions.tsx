import { NextPage } from 'next';
import getTransactions from '../lib/db/transactions';
import { transaction } from '../types';
import TransactionBar from '../components/TransactionBar';
import { useState } from 'react';


interface TransactionsPageProps {
  transactions: transaction[]
}

const Transactions: NextPage<TransactionsPageProps> = ({ transactions }) => {
  const [userQuery, setUserQuery] = useState('');
  const [currentTransactions, setCurrentTransactions] = useState<transaction[]>(transactions);
  return <div>
    <h1>Transactions</h1>
    <div>
      <input type="text" onChange={(evt) => setUserQuery(evt.target.value)} />
      <button onClick={() =>
        setCurrentTransactions(transactions.filter(
          (transaction) => {
            let searchTerm = userQuery;
            if (searchTerm === '') {
              return true;
            }
            return [transaction.to, transaction.from].includes(userQuery);
          })
        )
      }
      >Filter</button>
    </div>
    {currentTransactions.map((transaction, idx) => {
      return (
        <TransactionBar key={idx} transaction={transaction} />
      )
    })}
  </div>
};

export async function getStaticProps() {
  const transactions = await getTransactions();
  return {
    props: { transactions }
  };
}

export default Transactions;
