#!/bin/bash

# rm -rf .next
# rm -rf .vercel
# rm -f next.config.js
# rm -f postcss.config.js
# rm -f tailwind.config.js

# mkdir src
# mkdir old

# mv app old/app

# mv components src/components
# mv data src/data
# mv utils src/utils

pnpm remove eslint-config-next autoprefixer postcss turbo

pnpm i react@latest react-dom@latest react-router
pnpm i -D \
  tailwindcss@latest \
  @tailwindcss/vite \
  @vitejs/plugin-react \
  eslint \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  prettier \
  prettier-plugin-tailwindcss \
  tailwindcss \
  vite

touch vite.config.js
