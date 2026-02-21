# Elektro Börner - Netlify Deployment Guide

This project is ready for deployment to Netlify.

## Quick Deploy to Netlify

### Option 1: Drag & Drop (Easiest)

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `out` folder to deploy instantly

### Option 2: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy from the project root:
   ```bash
   netlify deploy --prod
   ```

### Option 3: Connect Git Repository

1. Push your code to GitHub, GitLab, or Bitbucket

2. Go to [Netlify](https://app.netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Connect your repository

5. Netlify will auto-detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - Reusable React components
- `public/` - Static assets
- `out/` - Build output (generated after `npm run build`)
- `netlify.toml` - Netlify configuration

## Build Configuration

The project is configured with:
- Static export enabled (`output: 'export'`)
- Images unoptimized for static hosting
- Build output in `out` directory

## Environment Variables

No environment variables are required for this static site.

## Custom Domain

After deployment, you can add a custom domain in Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow Netlify's DNS instructions

## Contact Information

Update the contact details in `app/page.tsx`:
- Phone number (line ~433)
- Email address (line ~447)

Replace placeholder images with actual project photos.
