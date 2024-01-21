/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.demoweb.io.vn",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
