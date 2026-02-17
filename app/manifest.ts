import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bloopha | Premium Digital Agency',
        short_name: 'Bloopha',
        description: 'Bloopha transforms ambitious brands through immersive digital experiences, strategic marketing, and high-end web design.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#F0660A',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            }
        ],
    }
}
