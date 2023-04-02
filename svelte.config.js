// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? "" : "/lahana",
      relative: false,
    },
    alias: {
      $components: "./src/components",
      $stores: "./src/stores",
      $assets: "./src/assets",
    },
  },
};

export default config;
