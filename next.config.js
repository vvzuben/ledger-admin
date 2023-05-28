const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    STARLEDGER_AUTH_TOKEN: process.env.STARLEDGER_AUTH_TOKEN,
    STARLEDGER_API_URL: process.env.STARLEDGER_API_URL,
    STARLEDGER_APP_AUTH_URL: process.env.STARLEDGER_APP_AUTH_URL,
    STARLEDGER_SERVICE_NEWS_URL: process.env.STARLEDGER_SERVICE_NEWS_URL,
  },
};

module.exports = nextConfig;
