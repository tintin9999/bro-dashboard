import { NextPage } from 'next';
import { Line } from 'react-chartjs-2';
import getUsage from '../lib/usage';
import styles from '../styles/Usage.module.scss';

interface UsagePageProps {
  usage: {
    labels: string[];
    counts: number[];
  }
}

interface usage {
  [key: string]: number
}

const Usage: NextPage<UsagePageProps> = ({ usage: { labels, counts } }) => {
  return <div className={styles.container}>
    <Line data={{
      labels,
      datasets: [{
        label: 'Usage',
        data: counts,
        fill: false,
        lineTension: 0.4,
        borderColor: 'rgb(61, 120, 228)',
        backgroundColor: 'white'
      }],
    }} options={{
      legend: {
        labels: {
          defaultFontFamily: "'Poppins', sans-serif"
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            zeroLineColor: 'rgb(61, 120, 228)',
          }
        }],
        yAxes: [{
          gridLines: {
            zeroLineColor: 'rgb(61, 120, 228)',
          }
        }]
      }
    }} />
  </div>;
};

export async function getStaticProps() {
  const usage: usage = await getUsage();
  const entries = Object.entries(usage).sort((a, b) => b[1] - a[1])
  return {
    props: {
      usage: {
        labels: entries.map(e => e[0]),
        counts: entries.map(e => e[1]),
      }
    }
  };
}

export default Usage;
