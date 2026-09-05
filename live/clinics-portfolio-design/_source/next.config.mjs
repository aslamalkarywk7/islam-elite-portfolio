 /** @type {import('next').NextConfig} */
 const nextConfig = {
   output: 'export',
   basePath: '/live/clinics-portfolio-design',
   assetPrefix: '/live/clinics-portfolio-design/',
   trailingSlash: true,
   typescript: { ignoreBuildErrors: true },
   images: { unoptimized: true },
 }
 export default nextConfig
