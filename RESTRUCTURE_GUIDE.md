# Repository Restructure Guide for Netlify Deployment

This guide explains how to properly structure this React application for Netlify deployment.

## Current Issues
- All files are in the root directory
- No proper folder organization
- Not following React/Netlify best practices

## Target Structure

```
MWSPORTS/
├── public/
│   ├── index.html
│   ├── mw_LOGOnobackground.png
│   ├── mw_circle.png
│   └── mw_tower.png
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── HomeHero.js
│   │   ├── MayorPickHeader.js
│   │   ├── MayorPicks.js
│   │   ├── MayorPicksHeader.js
│   │   ├── Scoreboard.js
│   │   ├── SignUpCard.js
│   │   ├── Simulator.js
│   │   └── SimulatorHeader.js
│   ├── styles/
│   │   ├── animations.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── parlay.css
│   │   ├── picks.css
│   │   ├── scoreboard.css
│   │   ├── simulator.css
│   │   └── theme.css
│   ├── services/
│   │   ├── api.js
│   │   ├── games.js
│   │   ├── headlines.js
│   │   ├── injuries.js
│   │   ├── odds.js
│   │   ├── players.js
│   │   ├── props_fn.js
│   │   ├── simulategame.js
│   │   ├── simulatorengine.js
│   │   ├── teamRatings.js
│   │   └── weather.js
│   ├── utils/
│   │   ├── footer.js
│   │   ├── header.js
│   │   └── parlaybuilder.js
│   └── index.js
├── netlify/
│   └── functions/
├── .gitignore
├── netlify.toml
├── package.json
├── README.txt
└── tailwind.config.js

```

## Files to Move

### To `public/`:
- index.html
- *.png (all image files)

### To `src/components/`:
- App.jsx
- HomeHero.js
- MayorPickHeader.js
- MayorPicks.js
- MayorPicksHeader.js
- Scoreboard.js
- SignUpCard.js
- Simulator.js
- SimulatorHeader.js

### To `src/styles/`:
- animations.css
- footer.css
- header.css
- parlay.css
- picks.css
- scoreboard.css
- simulator.css
- theme.css

### To `src/services/`:
- api.js
- games.js
- headlines.js
- injuries.js
- odds.js
- players.js
- props_fn.js
- simulategame.js
- simulatorengine.js
- teamRatings.js
- weather.js

### To `src/utils/`:
- footer.js
- header.js
- parlaybuilder.js

### Keep in Root:
- package.json
- netlify.toml
- README.txt
- tailwind.config.js

## Netlify Configuration

Update `netlify.toml` to:
```toml
[build]
  publish = "build"
  command = "npm run build"
  functions = "netlify/functions"

[functions]
  node_bundler = "esbuild"

[build.environment]
  ODDS_API_KEY = "35ea2bfd08886692d90a60bb91273c16"
```

## Steps to Execute

You can restructure manually or use a script. The repository is now set up with proper folder placeholders in `src/components/`.

For best results, clone locally and run:
```bash
git clone https://github.com/nikolai2244/MWSPORTS.git
cd MWSPORTS

# Create directory structure
mkdir -p public src/{components,styles,services,utils}

# Move files (run these commands carefully)
mv *.png public/
mv index.html public/
mv App.jsx HomeHero.js MayorPickHeader.js MayorPicks.js MayorPicksHeader.js Scoreboard.js SignUpCard.js Simulator.js SimulatorHeader.js src/components/
mv animations.css footer.css header.css parlay.css picks.css scoreboard.css simulator.css theme.css src/styles/
mv api.js games.js headlines.js injuries.js odds.js players.js props_fn.js simulategame.js simulatorengine.js teamRatings.js weather.js src/services/
mv footer.js header.js parlaybuilder.js src/utils/

# Commit and push
git add .
git commit -m "Restructure repository for Netlify deployment"
git push
```

## After Restructuring

1. Update import paths in all files to reflect new locations
2. Test build locally with `npm run build`
3. Deploy to Netlify
4. Verify all components load correctly

This structure follows React best practices and is optimized for Netlify deployment.
