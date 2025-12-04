/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  experimental: {
    optimizePackageImports: [
      "@nextui-org/react",
      "framer-motion",
      "react-owl-carousel2",
      "zod/lib",
      "@react-aria",
    ],
  },
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/our-services",
        permanent: true,
        statusCode: 301,
      },
      // {
      //   source: "https://blog.tgth.com.au",
      //   destination: "https://tgth.com.au",
      //   permanent: false,
      //   statusCode: 410,
      // },
      // {
      //   source: "https://blog.tgth.com.au/category/technology",
      //   destination: "https://tgth.com.au/category/technology",
      //   permanent: false,
      //   statusCode: 410,
      // },
      // {
      //   source: "https://blog.tgth.com.au/category/offshoring",
      //   destination: "https://tgth.com.au/category/offshoring",
      //   permanent: false,
      //   statusCode: 410,
      // },
      // {
      //   source: "https://blog.tgth.com.au/offshoring-vs-outsourcing",
      //   destination: "https://tgth.com.au/offshoring-vs-outsourcing",
      //   permanent: false,
      //   statusCode: 410,
      // },
      // {
      //   source: "https://blog.tgth.com.au/remote-working-force",
      //   destination: "https://tgth.com.au/remote-working-force",
      //   permanent: false,
      //   statusCode: 410,
      // },
      // {
      //   source: "https://blog.tgth.com.au/category/remote-work",
      //   destination: "https://tgth.com.au/category/remote-work",
      //   permanent: false,
      //   statusCode: 410,
      // },
      // {
      //   source:
      //     "https://blog.tgth.com.au/using-technology-to-differentiate-your-business",
      //   destination: "https://tgth.com.au/using-technology-to-differentiate-your-business",
      //   permanent: false,
      //   statusCode: 410,
      // },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
