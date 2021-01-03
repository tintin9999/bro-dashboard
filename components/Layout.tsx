import Navbar from './Navbar';
import styles from '../styles/Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
