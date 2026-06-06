const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const PROD_URL = 'https://awadhinteriordesigner.in';

const isRealCloudName = CLOUD_NAME
    && CLOUD_NAME.trim() !== ''
    && CLOUD_NAME !== 'YOUR_CLOUD_NAME'
    && CLOUD_NAME !== 'your_actual_cloud_name_here';

export default function cloudinaryLoader({ src, width, quality }) {
    if (!isRealCloudName) {
        return src;
    }
    const absoluteSrc = src.startsWith('http') ? src : `${PROD_URL}${src}`;
    const transforms = `f_auto,c_limit,w_${width},q_${quality || 'auto'}`;
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${transforms}/${encodeURIComponent(absoluteSrc)}`;
}
