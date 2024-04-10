/** @type {import('next').NextConfig} */

// const { withTranslation } = require("next-translate");
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextTranslate(nextConfig);
