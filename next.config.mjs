/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["gsap", "framer-motion", "three", "@react-three/drei"],
  },
};

export default nextConfig;
