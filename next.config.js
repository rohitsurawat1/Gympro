// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**', // Allows all paths under this hostname
        },
      ],
    },

    theme:{
      extend:{
        colors:{
          primary: '#3490dc',
        }
      }
    }
  };
  
  module.exports = nextConfig;