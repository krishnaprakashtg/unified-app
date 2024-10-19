/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
const nextConfig = {
  webpack(config, {isServer}) {
    config.output.publicPath = 'auto';
    config.plugins.push(
      new NextFederationPlugin({
        name: "staticMFE",
        filename: `static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        exposes: {
          "./Landing": "./components/Landing.js",
        },
        publicPath: 'http://localhost:3002/_next/',
        shared: {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
          tailwindcss: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
