/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    ...(isProd && { output: 'export' }),
    trailingSlash: true,
    images: {
        ...(isProd
            ? { loader: 'custom', loaderFile: './imageLoader.js' }
            : { unoptimized: true }),
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
};

export default nextConfig;
