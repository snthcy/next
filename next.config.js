/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/insta',
        destination: 'https://instagram.com/normie2k',
        permanent: true,
      },
      {
        source: '/disc',
        destination: 'https://discord.com/users/722930349276921888',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/snthcy',
        permanent: true,
      },
      {
        source: '/git',
        destination: 'https://github.com/snthcy',
        permanent: true,
      },
      {
        source: '/last',
        destination: 'https://last.fm/user/normcs',
        permanent: true,
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/id/snthcy/',
        permanent: true,
      },
      {
        source: '/trakt',
        destination: 'https://trakt.tv/users/normcs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
