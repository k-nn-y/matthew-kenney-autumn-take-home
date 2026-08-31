import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        /* The hero clip and its poster are 4MB together and never change
           within a deploy, but their filenames are not content-hashed — so a
           day of hard caching plus a week of stale-while-revalidate, rather
           than `immutable`, which would pin a stale file on a reader who had
           already visited. Next's default for /public is max-age=0, which
           re-downloads the whole clip on every visit. */
        source: "/hero/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
