import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    port: 8081,
    hostname: 'myhost-sanjay'
  })
});