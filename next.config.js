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
    },
    async rewrites() {
        return {
            // After checking all Next.js pages (including dynamic routes)
            // and static files we proxy any other requests
            fallback: [
                {
                    source: '/:path*',
                    destination: `https://sw-university.com/:path*`,
                },
            ],
        }
    },
}

module.exports = nextConfig
