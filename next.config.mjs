/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        MONGODB_URI: process.env.MONGODB_URI,
        API_URL: process.env.API_URL
    }
};

export default nextConfig;
