/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/Nikhil_Resume_Full_Stack.pdf',
        permanent: false,
      },
      {
        source: '/cv',
        destination: '/Nikhil_Resume_Full_Stack.pdf',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
