// @ts-check
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import { defineConfig } from "astro/config"
import path from "path"

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: { alias: { "@": path.resolve(__dirname, "src") } }
	},
	integrations: [react(), icon()]
})
