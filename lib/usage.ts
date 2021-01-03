import r from './db';

export default async function getUsage() {
  const total = {};
  
  const targetUsers = await r.table('users').run();
  const usages = targetUsers.map((u: any) => u.usage).filter(Boolean);
  
  for (const usage of usages) {
    for (const prop of Object.keys(usage)) {
      if (!total[prop]) {
        total[prop] = usage[prop];
      } else {
        total[prop] += usage[prop];
      }
    }
  }
    
  return total;
}