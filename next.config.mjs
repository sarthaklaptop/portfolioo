/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.microlink.io'], // Add your allowed domain here
  },
};

export default nextConfig;
