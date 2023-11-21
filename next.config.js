/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fakestoreapi.com',
           
            },
            {
              protocol: 'https',
              hostname: 'i.dummyjson.com',
           
            },
            {
              protocol: 'https',
              hostname: 'img.freepik.com',
           
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
           
            }, 
            {
              protocol: 'https',
              hostname: 'i.ibb.co',
           
            },
            {
              protocol: "https",
              hostname: "lh3.googleusercontent.com",
            },
          ],
        },
     
}

module.exports = nextConfig
