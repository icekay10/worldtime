/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to enable ISR
  // output: 'export', // ← COMMENT OUT OR REMOVE THIS LINE
  
  // Optional: Keep trailingSlash if you prefer URLs with trailing slashes
  trailingSlash: true,
  
  // Image optimization configuration for ISR
  images: {
    // Remove unoptimized: true to allow Next.js image optimization
    // unoptimized: true, // ← COMMENT OUT OR REMOVE THIS LINE
    
    // Configure allowed domains for optimized images
    domains: [
      'www.timeinworldclock.com',
      'timeinworldclock.com',
      'images.unsplash.com', // Add any other domains you use
    ],
    
    // Optional: Configure image formats
    formats: ['image/avif', 'image/webp'],
    
    // Optional: Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Optional: Set image sizes for next/image
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optional: Add headers for better SEO and security (works with ISR)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optional: Configure redirects if needed
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Configure build output
  distDir: '.next', // Default, can be changed if needed
  
  // Generate ETags for better caching
  generateEtags: true,
  
  // Enable compression
  compress: true,
  
  // Configure powered by header
  poweredByHeader: false,
};

export default nextConfig;