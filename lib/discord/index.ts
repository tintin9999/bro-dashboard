interface discordFetchParams {
  path: string;
  options?: {
    method?: string;
    other?: {};
  };
}

const { BOT_TOKEN } = process.env;

const discordFetch: (
  path: discordFetchParams['path'],
  options?: discordFetchParams['options'],
) => Promise<any> = async (path, options = {}) => {
  const url = `https://discord.com/api/v8`;

  try {
    const res = await fetch(`${url}${path}`, {
      method: options.method,
      headers: {
        Authorization: `Bot ${BOT_TOKEN}`
      },
      ...options.other,
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

export default discordFetch;
