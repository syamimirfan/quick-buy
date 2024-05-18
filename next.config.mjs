/** @type {import('next').NextConfig} */
const nextConfig = {
    // put here the api domains for the images
    //use removePatterns because domains is already deprecated
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            pathname:  '**'
         },
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
         }
        ]
    }
};

export default nextConfig;
