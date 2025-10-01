/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static HTML export
  images: {
    unoptimized: true, // menonaktifkan Image Optimization API
  },
};

module.exports = nextConfig;