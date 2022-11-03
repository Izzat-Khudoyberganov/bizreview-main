/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.yourdigitalmind.com"],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
}
module.exports = nextConfig
