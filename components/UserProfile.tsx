import styles from '../styles/UserProfile.module.scss';
import { user } from '../types';
import ProgressiveImage from 'react-progressive-image';
import { getAvatar } from '../lib/discord/user';

interface UserProfileProps {
  user: user;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <>
      <div className={`${styles.master} ${styles.shadowed}`}>
        <header className={styles.header}>
          User Profile
      </header>
        <div className={styles.classContainer}>
          <section className={styles.pictureSection}>
            <div className={styles.picture}>
              <ProgressiveImage src={getAvatar(user, '512')} placeholder={getAvatar(user, '128')}>
                {(src: string) => <img className={`${styles.pic} ${styles.shadowed}`} src={src} alt='user profile' />}
              </ProgressiveImage>
            </div>
          </section>
          <section className={styles.content}>{JSON.stringify(user, null, 2)}</section>
        </div>
      </div>
    </>);
};

export default UserProfile;
