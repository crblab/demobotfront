const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/botdemo/' : '',
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains:[
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com'
    ]
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

module.exports = config;