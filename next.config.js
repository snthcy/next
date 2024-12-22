/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/insta",
        destination: "https://instagram.com/44.1hz",
        permanent: true,
      },
      {
        source: "/disc",
        destination: "https://discord.com/users/640648743099695138",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/snthcy",
        permanent: true,
      },
      {
        source: "/git",
        destination: "https://github.com/snthcy",
        permanent: true,
      },
      {
        source: "/last",
        destination: "https://last.fm/user/normcs",
        permanent: true,
      },
      {
        source: "/steam",
        destination: "https://steamcommunity.com/id/snthcy/",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
