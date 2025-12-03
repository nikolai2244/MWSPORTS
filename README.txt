# MayorWardProdSports (MWSPORTS)

A comprehensive sports simulation and prediction web application.

## Tech Stack
- React 18.2.0 (Create React App)
- React Router for navigation
- Tailwind CSS for styling
- Node.js backend functions (Netlify/Cloudflare)

## Deployment to Cloudflare Pages

### 1. Connect GitHub Repository
1. Log in to your Cloudflare Dashboard
2. Go to **Workers & Pages** → **Pages** → **Create a project**
3. Click **Connect to Git**
4. Select your GitHub account and choose the `nikolai2244/MWSPORTS` repository
5. Click **Begin setup**

### 2. Configure Build Settings
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Root directory:** (leave empty)

### 3. Environment Variables
Add the following environment variable in Cloudflare Pages settings:
- **Variable name:** `ODDS_API_KEY`
- **Value:** Your Odds API key (from the-odds-api.com)

To add environment variables:
1. After creating the project, go to **Settings** → **Environment variables**
2. Click **Add variable**
3. Enter `ODDS_API_KEY` and paste your API key
4. Click **Save**

### 4. Deploy
1. Click **Save and Deploy**
2. Cloudflare will build and deploy your app
3. Your site will be available at `https://<project-name>.pages.dev`

### 5. Custom Domain (Optional)
1. Go to **Custom domains** in your Cloudflare Pages project
2. Click **Set up a custom domain**
3. Follow the instructions to connect your domain

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Notes
- The `_redirects` file in `/public` handles client-side routing for the SPA
- API keys should NEVER be committed to the repository
- All sensitive environment variables must be set in Cloudflare Pages dashboard
