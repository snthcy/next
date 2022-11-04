import { nowPlaying } from "./types";

const getNowPlaying = (username: string, key: string) => {
  const endpoint = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${key}&format=json&limit=1`;

  return fetch(endpoint);
};

const topTracks = (username: string, key: any) => {
  const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&period=1month&limit=10&user=${username}&api_key=${key}&format=json`;

  return fetch(endpoint);
};

export { getNowPlaying, topTracks };
