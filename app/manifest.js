export const dynamic = 'force-static'

export default function manifest() {
    return {
        name: 'Awadh Interior Designer',
        short_name: 'Awadh Interiors',
        description: 'Best Interior Designer in Azamgarh, Uttar Pradesh. Transforming homes and offices with premium designs.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/logo.jpg',
                sizes: 'any',
                type: 'image/jpeg',
            },
        ],
    }
}
