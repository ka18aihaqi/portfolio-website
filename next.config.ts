import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Wajib untuk GitHub Pages agar jadi file statis (HTML/CSS/JS murni)
  output: "export",
  
  // Sesuaikan dengan nama repositori GitHub lu
  basePath: "/portfolio-website",
  
  // Wajib dimatikan agar export statis tidak error
  images: {
    unoptimized: true,
  },
};

export default nextConfig;