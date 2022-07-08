/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // outputStandalone: true,
    images: {
        formats: ['image/avif', 'image/webp']
    },
    experimental: {
        amp: {
            skipValidation: true
        }
    }
}

module.exports = nextConfig
