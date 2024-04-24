
/** @type {import('next').NextConfig} */

import dotenv from 'dotenv'

dotenv.config()

// require('dotenv').config()
const nextConfig = {
    env : {
        MONGODB_URI: "mongodb+srv://akshitchowdhury:akshitchowdhury@cluster0.ywftldt.mongodb.net/next_crud_db",
        API_URL: "http://localhost:3000/"
    }
};

export default nextConfig;
