import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoneyBillAlt, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const isActive = (route: string) => router.pathname === route;

  return (
    <div className="navbar">
      <nav className={styles.navbar}>
        <div className={styles.pages}>
          <ul>
            <li className={isActive('/') ? styles.active : ''}>
              <Link href="/">
                <a><FontAwesomeIcon icon={faHome} /><span>Home</span></a>
              </Link>
            </li>
            <li className={isActive('/users') ? styles.active : ''}>
              <Link href="/users">
                <a><FontAwesomeIcon icon={faUser} /><span>Users</span></a>
              </Link>
            </li>
            <li className={isActive('/stats') ? styles.active : ''}>
              <Link href="/stats">
                <a><FontAwesomeIcon icon={faSignal} /><span>Stats</span></a>
              </Link>
            </li>
            <li className={isActive('/transactions') ? styles.active : ''}>
              <Link href="/transactions">
                <a><FontAwesomeIcon icon={faMoneyBillAlt} /><span>Transactions</span></a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
