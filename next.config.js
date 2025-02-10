const { withExpo } = require("@expo/next-adapter");
const { withNativewind } = require("nativewind");
const withTM = require("next-transpile-modules")(["expo-router"]);

const nextConfig = {
  projectRoot: __dirname,
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure Next.js 13+ App Router works
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web", // Correct alias for React Native components on web
    };
    return config;
  },
};

module.exports = withExpo(withNativewind(withTM(nextConfig)));
