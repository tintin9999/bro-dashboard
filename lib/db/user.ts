import r from './';

export default async function getUser(userID) {
  let user = await r.table('users').get(userID);
  if (user) {
    return user;
  }
  return {
    id: userID,
    pls: 1,
    xp: 1,
    lastCmd: Date.now(),
    lastRan: 'nothing',
    spam: 0,
    pocket: 1000000,
    bank: 2500000,
    lost: 0,
    won: 0,
    shared: 0,
    stolenFromAt: 0,
    heistedFromAt: 0,
    streak: {
      time: 0,
      streak: 0,
    },
    upgrades: {
      multi: 45,
      shares: 0,
      luck: 0,
    },
    donor: false,
    upvoted: true,
    dblUpvoted: true,
  };
}
