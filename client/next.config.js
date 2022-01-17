/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  experimental: {
    styledComponents: true
  },

  env: {
    REST_API_URL: "http://localhost:5000"
  }
};
