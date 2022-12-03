/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.yourdigitalmind.com",
      "www.clipartmax.com",
      "media.istockphoto.com",
      "static.thenounproject.com",
      "www.pngitem.com",
      "t4.ftcdn.net",
      "static.thenounproject.com",
      "cdn-icons-png.flaticon.com",
      "s3-media0.fl.yelpcdn.com",
    ],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
};
module.exports = nextConfig;
