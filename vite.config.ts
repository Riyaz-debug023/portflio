import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base keeps asset paths valid on GitHub Pages (project sites served from /<repo>/).
export default defineConfig({ base: "./", plugins: [react()] });
