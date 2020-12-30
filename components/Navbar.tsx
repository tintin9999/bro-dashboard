import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  const isActive = (route: string) => router.pathname === route;

  return (
    <div className="navbar">
      <nav className={styles.navbar}>
        <div className={styles.headerlogo}>
          <Link href="/">
            <a>My App</a>
          </Link>
        </div>
        <div className={styles.pages}>
          <ul>
          <li className={isActive('/') ? styles.active : ''}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={isActive('/about') ? styles.active : ''}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={isActive('/contact') ? styles.active : ''}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
