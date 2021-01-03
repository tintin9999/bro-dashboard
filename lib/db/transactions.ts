import r from '.';

export default async function getTransactions() {
  const getTransactions = await r.table('transactions');
  return getTransactions;
}