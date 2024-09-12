/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Adicione o domínio permitido aqui
  },
};

export default nextConfig;
