// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['seu-dominio-das-imagens.com'],
  },
  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://abitus-api.geia.vip/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;