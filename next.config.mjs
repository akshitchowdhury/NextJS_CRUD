/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        MONGODB_URI: "mongodb+srv://akshitchowdhury:akshitchowdhury@cluster0.ywftldt.mongodb.net/next_crud_db",
        API_URL: "http://localhost:3000/"
    }
};

export default nextConfig;
