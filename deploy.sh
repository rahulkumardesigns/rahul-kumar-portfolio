#!/bin/bash
# 🚀 Rahul Kumar's Portfolio Deployment Script
# Replace the placeholder values below before running

# ===== CONFIGURE THESE VALUES =====
GITHUB_USERNAME="your-github-here"      # ← CHANGE THIS
REPO_NAME="rahul-kumar-portfolio"       # ← OPTIONAL: change if desired
# ==================================

echo "🚀 Starting deployment of Rahul Kumar's 3D Portfolio..."
echo "📁 Current directory: $(pwd)"
echo ""

# Verify we're in the right directory
if [ ! -f "index.html" ] || [ ! -f "style.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Error: Missing portfolio files. Make sure you're in the rahul-portfolio directory."
    echo "   Expected files: index.html, style.css, script.js"
    exit 1
fi

echo "✅ Portfolio files verified"
echo ""

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git config user.name "Mark"
    git config user.email "mark@openclaw.local"
    git add index.html style.css script.js README.md
    git commit -m "Initial commit: Rahul Kumar's 3D Graphic Designer Portfolio"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "🔗 Setting up remote origin..."
echo "   Repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Remove existing origin if present to avoid conflicts
git remote remove origin 2>/dev/null || true

# Add remote origin
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Set branch to main
git branch -M main

echo ""
echo "⬆️  Pushing to GitHub..."
echo "   You will be prompted for your GitHub credentials:"
echo "   - Username: $GITHUB_USERNAME"
echo "   - Password: Your GitHub password OR Personal Access Token (if 2FA enabled)"
echo ""
echo "   💡 TIP: If you have 2FA enabled, create a Personal Access Token:"
echo "      1. Go to GitHub Settings → Developer settings → Personal access tokens"
echo "      2. Generate new token with 'repo' scope"
echo "      3. Use the token as your password when prompted"
echo ""

# Push to GitHub
git push -u origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Successfully pushed to GitHub!"
    echo ""
    echo "📝 NEXT STEPS (Manual):"
    echo "   1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "   2. Click Settings → Pages (left sidebar)"
    echo "   3. Under 'Source':"
    echo "        - Branch: main"
    echo "        - Folder: / (root)"
    echo "   4. Click Save"
    echo ""
    echo "   5. Wait 1-2 minutes, then visit:"
    echo "      https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "💡 For custom domain (optional):"
    echo "   - Create a file named 'CNAME' with your domain (e.g., rahulkumar.design)"
    echo "   - Configure DNS A records to: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153"
    echo "   - Configure DNS CNAME for www: $GITHUB_USERNAME.github.io."
    echo ""
else
    echo ""
    echo "❌ Push failed. Check your credentials and try again."
    echo "   Common issues:"
    echo "   - Incorrect GitHub username"
    echo "   - Missing repo scope in Personal Access Token (if 2FA enabled)"
    echo "   - Repository name typo"
    echo ""
fi