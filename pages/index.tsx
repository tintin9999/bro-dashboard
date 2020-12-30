import { NextPage } from 'next';

interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return <>home</>;
};

export async function getStaticProps() {
  return {
    props: undefined
  };
}

export default Home;
