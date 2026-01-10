/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'weownit.org.uk',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', 
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      }
    ],
  },

};

export default nextConfig;
