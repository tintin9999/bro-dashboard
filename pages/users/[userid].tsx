import { NextPage } from 'next';
import { user } from '../../types';

import { getDiscordUserData } from '../../lib/discord/user';
import getUser from '../../lib/db/user';
import UserProfile from '../../components/UserProfile';

import styles from '../../styles/UserProfile.module.scss';

interface NextPageProps {
  user: user
}

const userProfile: NextPage<NextPageProps> = ({ user }) => {
  if (!user) {
    return <div>loading.. add a loading component here please u lazy fuck</div>
  }

  return (<div className={styles.container}>
    <UserProfile user={user} />
  </div>)
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const userData = await getUser(params.userid);
  const userDiscordData = await getDiscordUserData(params.userid);
  return {
    props: {
      user: { ...userData, ...userDiscordData },
    }
  }
}

export default userProfile;