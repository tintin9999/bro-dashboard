import { NextPage } from 'next';
interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
return <h1>Stinky Home</h1>;
};

export async function getStaticProps() {
  return {
    props: { }
  };
}

export default Home;
