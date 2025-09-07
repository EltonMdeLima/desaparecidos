// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['seu-dominio-das-imagens.com'], // Adicione o domínio da API aqui
  },
};

module.exports = nextConfig;