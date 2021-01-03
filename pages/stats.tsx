import { NextPage } from 'next';
import getStats from '../lib/db/stats';

interface ShardData {
  id: number;
  latency: number;
  ready: boolean;
  status: string;
}

interface ClusterData {
  cluster: number;
  exclusiveGuilds: number;
  guilds: number;
  largeGuilds: number;
  ram: number;
  shards: number;
  shardsStats: ShardData[],
  uptime: number;
}

interface StatsPageProps {
  stats: {
    id: number;
    clusters: ClusterData[];
    exclusiveGuilds: number;
    guilds: number;
    largeGuilds: number;
    totalRam: number;
    users: number;
    voice: number;
  }
}

const Stats: NextPage<StatsPageProps> = ({ stats }) => {
  if (!stats) {
    return <>Waiting for stats to load..</>
  }
  console.log(stats);
  return <div>
    <h1>id: {stats.id}</h1>
    <div>exclusiveGuilds: {stats.exclusiveGuilds}</div>
    <div>guilds: {stats.guilds}</div>
    <div>largeGuilds: {stats.largeGuilds}</div>
    <div>totalRam: {stats.totalRam}</div>
    <div>users: {stats.users}</div>
    <div>voice: {stats.voice}</div>

    <h1>Cluster Data</h1>
    <div>Cluster: {stats.clusters.length}</div>
    {stats.clusters.map(cluster => (
      <>
        <div>exclusiveGuilds: {cluster.exclusiveGuilds}</div>
        <div>guilds: {cluster.guilds}</div>
        <div>largeGuilds: {cluster.largeGuilds}</div>
        <div>ram: {cluster.ram}</div>
        <div>shards: {cluster.shards}</div>
        <div>uptime: {cluster.uptime}</div>
      </>
    ))}
  </div>
}

export async function getStaticProps() {
  const { id, stats } = await getStats();
  return {
    props: { stats: { id, ...stats } },
    revalidate: 100
  }
}

export default Stats;