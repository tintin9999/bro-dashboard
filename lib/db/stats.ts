import r from './';

export default async function getStats() {
  const stats = await r.table('stats').get(1);
  return stats;
}