// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/lastfm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying(
    "normcs",
    process.env.LASTFM_API_KEY as string
  );

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.recenttracks.track[0]["@attr"] ? true : false;
  const title = song.recenttracks.track[0].name;
  const artist = song.recenttracks.track[0].artist["#text"];
  const album = song.recenttracks.track[0].album["#text"];
  const albumCover = song.recenttracks.track[0].image[3]["#text"];
  const songUrl = song.recenttracks.track[0].url;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    album,
    albumCover,
    artist,
    isPlaying,
    title,
    songUrl,
  });
}
