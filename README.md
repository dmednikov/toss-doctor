# toss-doctor

#git clone git@dmednikov:dmednikov/toss-doctor.git
#git remote set-url origin git@dmednikov:dmednikov/toss-doctor.git
#git push -u origin master


# Toss Doctor Astro Project - Basic Structure

# 1. Create new Astro project
npm create astro@latest toss-doctor
cd toss-doctor

# 2. Install dependencies
npm install
npm install daisyui postcss autoprefixer
npm install tailwindcss @tailwindcss/vite

# 3. Configure Tailwind in tailwind.config.cjs
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

# 4. Configure tailwind in src/styles/global.css
@import "tailwindcss";
@plugin "daisyui";

/* Global theme-friendly base styles */
html, body {
  @apply text-base-content bg-base-100;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

# 5. Update astro.config.mjs (optional for paths or integrations)
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

# 6. Create BaseLayout.astro in src/layouts/

---
---
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toss Doctor</title>
  </head>
  <body class="bg-base-100 text-base-content">
    <slot />
  </body>
</html>

# 7. Create pages: index.astro, about.astro, features.astro, contact.astro in src/pages/

# Example: src/pages/index.astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout>
  <section class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to Toss Doctor</h1>
        <p class="py-6">Precision training tool for tennis toss perfection.</p>
        <a href="/features" class="btn btn-primary">Explore Features</a>
      </div>
    </div>
  </section>
</BaseLayout>

# Repeat similar structure for about.astro, features.astro, contact.astro

# 8. Deploy to Vercel
# - Push to GitHub
# - Connect your repo to Vercel
# - Vercel auto-deploys Astro projects
