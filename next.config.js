/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  target: 'serverless',
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({ 'global.GENTLY': false }),
        );
        return config;
    },
}

module.exports = nextConfig
