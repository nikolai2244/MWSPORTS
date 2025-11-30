# Quick Cleanup Script for MWSPORTS Repository

Run these commands in your terminal to quickly clean up the repository:

```bash
# Clone the repository
cd ~/Desktop  # or wherever you want to work
git clone https://github.com/nikolai2244/MWSPORTS.git
cd MWSPORTS

# Remove all files except the ones we want to keep
git rm -r *

# Add back only the files and folders we need to keep
git reset HEAD package.json netlify.toml README.txt tailwind.config.js RESTRUCTURE_GUIDE.md
git checkout -- package.json netlify.toml README.txt tailwind.config.js RESTRUCTURE_GUIDE.md

# The folders (public/, src/, netlify/) with their .gitkeep files will remain

# Commit the cleanup
git add -A
git commit -m "Clean up root directory - keep only necessary files and folders"

# Push changes
git push origin main
```

## What This Does:
1. Removes ALL files from the repository
2. Restores only these essential files:
   - package.json
   - netlify.toml
   - README.txt
   - tailwind.config.js
   - RESTRUCTURE_GUIDE.md
3. Keeps the folder structure:
   - public/
   - src/ (with components/, styles/, services/, utils/ subfolders)
   - netlify/

After running this, your repository root will be clean with only the proper structure for Netlify deployment!
