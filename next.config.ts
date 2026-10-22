import type { NextConfig } from "next";

// The installer belongs to the Norte Code repository, which owns the release
// it downloads. The site only points at it: one copy, no sync to forget.
const INSTALLER =
  "https://raw.githubusercontent.com/JeanVydes/NorteCode/dev/scripts/install.sh";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/install.sh",
        destination: INSTALLER,
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
