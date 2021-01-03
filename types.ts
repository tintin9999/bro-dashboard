export type transaction = {
  amount: number;
  from: string;
  id: string;
  serverID: string;
  to: string;
  type: 'rob' | 'share' | 'rob-fee' | 'heist';
};

export type discordUser = {
  id: string;
  avatar: string;
  username: string;
  discriminator: string;
  publicFlags: number;

  bot?: boolean;
  system?: boolean;
}

export type user = {
  bank: number;
  dblUpvoted: boolean;
  dmsDisabled: boolean;
  donor: boolean;
  gambleStats: {
    gamesLost: number;
    gamesWon: number;
    lost: number;
    won: number
  };
  heistedFromAt: number;
  id: string;
  items: {
    [key: string]: number
  };
  lastCmd: string;
  lastRan: string;
  lost: number;
  pls: number;
  pocket: number;
  shared: number;
  spam: number;
  stolenFromAt: number;
  streak: {
    streak: number;
    time: number
  };
  upgrades: {
    luck: number;
    multi: number;
    shares: number
  };
  upvoted: boolean;
  usage: {
    [key: string]: number;
  };
  won: number;
  xp: number
} & discordUser;