/** @type {import('next').NextConfig} */ 
import { NextFederationPlugin } from '@module-federation/nextjs-mf'; 
import { withExpo } from '@expo/next-adapter'

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
  ],
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bjs.scene7.com', 
        pathname: '/**', // Match all images from the domain
      },
      {
        protocol: 'http',
        hostname: 'localhost', 
        port: '3003',
        pathname: '/**', // Match all images from the domain
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com', 
        pathname: '/**', // Match all images from the domain
      },
    ],
  },
  webpack(config, {isServer}) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'rootMfe',
        filename: `static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        exposes: {},
        remotes: {
          header: `headerMFE@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          static: `staticMFE@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          footer: `footerMFE@http://localhost:3003/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        shared: { react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },},
      })
    ); 
    return config;
  } 
};

// export default nextConfig;
export default withExpo(nextConfig);