import { discordUser } from '../../types';
import discordFetch from './index';

export async function getDiscordUserData(userID: string) {
  const userData = await discordFetch(`/users/${userID}`);
  return userData;
}

export function getAvatar(
  { avatar, id }: discordUser,
  size?: '128' | '256' | '512' | '1024',
) {
  const CDNLink = 'https://cdn.discordapp.com';
  return `${CDNLink}/avatars/${id}/${avatar}.${
    avatar.startsWith('a') ? 'gif' : 'png'
  }?size=${size || '1024'}`;
}
