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
        source: '/twitter',
        destination: 'https://twitter.com/snthcy',
        permanent: true,
      },
      {
        source: '/tel',
        destination: 'https://t.me/normcs',
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
