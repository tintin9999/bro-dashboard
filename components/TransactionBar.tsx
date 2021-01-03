import styles from '../styles/Transactions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { transaction } from '../types';
import { useState } from 'react';

interface TransactionBarProps {
  transaction: transaction;
}

const TransactionBar: React.FC<TransactionBarProps> = ({ transaction }) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className={styles.transactionBar} onClick={handleClick}>
      <div className={styles.shortData}>{transaction.from} <FontAwesomeIcon icon={faChevronRight} /> {transaction.to}</div>
      <div className={`${styles.fullData} ${show ? styles.expanded : styles.unexpanded}`}>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{transaction.id}</td>
            </tr>
            <tr>
              <td>From</td>
              <td>{transaction.from}</td>
            </tr>
            <tr>
              <td>To</td>
              <td>{transaction.to}</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>{transaction.amount.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Server ID</td>
              <td>{transaction.serverID || 'No server ID logged'}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{transaction.type}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionBar;
