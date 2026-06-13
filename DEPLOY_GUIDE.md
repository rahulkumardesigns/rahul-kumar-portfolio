# 🚀 Deployment Guide: Rahul Kumar's Portfolio to GitHub Pages

## 📋 Prerequisites
- GitHub account
- Basic terminal/command line access
- Current directory: `/root/.openclaw/workspace/rahul-portfolio/`

## 🔧 Step-by-Step Deployment Commands

### 1. CREATE GITHUB REPOSITORY (Manual)
1. Go to [github.com](https://github.com) and log in
2. Click **+ → New repository**
3. Repository name: `rahul-kumar-portfolio` (or your preferred name)
4. Description: "Rahul Kumar's 3D Graphic Designer Portfolio"
5. ✅ **Public** (required for free GitHub Pages)
6. ❌ **DO NOT** initialize with README, .gitignore, or license
7. Click **Create repository**

### 2. CONFIGURE LOCAL REPOSITORY & PUSH
Run these commands in your terminal (you're already in the portfolio directory):

```bash
# ADD YOUR GITHUB REMOTE (REPLACE WITH YOUR INFO)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/rahul-kumar-portfolio.git

# SET MAIN BRANCH
git branch -M main

# PUSH TO GITHUB (WILL ASK FOR CREDENTIALS)
git push -u origin main
```

### 3. ENABLE GITHUB PAGES (Manual)
After the push completes successfully:
1. Go to your repository on GitHub: `https://github.com/YOUR_GITHUB_USERNAME/rahul-kumar-portfolio`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### 4. YOUR SITE WILL BE LIVE AT:
```
https://YOUR_GITHUB_USERNAME.github.io/rahul-kumar-portfolio/
```

### 🔑 CREDENTIALS HELP
When `git push` asks for username and password:
- **Username**: Your GitHub username
- **Password**: 
  - If 2FA is **disabled**: Your GitHub password
  - If 2FA is **enabled**: You **must** use a Personal Access Token
    1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
    2. Click "Generate new token" → "Generate new token (classic)"
    3. Token description: `portfolio-deploy` or similar
    4. Select scopes: `repo` (full control of private repositories)
    5. Click "Generate token"
    6. **COPY THE TOKEN** (you won't see it again!)
    7. Paste this token when prompted for password

### 📄 OPTIONAL: CUSTOM DOMAIN
If you own a domain (e.g., `rahulkumar.design`):

#### A. Create CNAME File
```bash
echo "rahulkumar.design" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

#### B. Configure DNS with Your Domain Provider
Create these DNS records:
- **A Record**: Point `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME Record**: Point `www` to `YOUR_GITHUB_USERNAME.github.io.`

#### C. Update GitHub Pages Settings
In your repo Settings → Pages:
- Custom domain: `rahulkumar.design`
- ✅ Enforce HTTPS

### 🛠️ TROUBLESHOOTING

#### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/rahul-kumar-portfolio.git
```

#### Authentication failures
- Double-check your Personal Access Token has `repo` scope
- Ensure you're copying the token exactly (no extra spaces)
- Try clearing cached credentials: `git credential reject`

#### Site not updating
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check Actions tab in your repo for deployment logs
- Ensure you're pushing to the `main` branch

#### "Repository not found"
- Verify your GitHub username is correct
- Ensure repository name matches exactly
- Confirm repository is Public (not Private)

### 📁 FILES INCLUDED IN DEPLOYMENT
- `index.html` - Main homepage with 3D effects
- `style.css` - All styling, animations, responsiveness
- `script.js` - Interactivity (filtering, forms, animations)
- `README.md` - Project documentation
- *(Optional) CNAME* - For custom domain (if created)

### 🎨 WHAT'S DEPLOYED
Your stunning 3D portfolio featuring:
- Interactive particle background
- 3D rotating cube introduction
- Animated skill progress bars
- Timeline experience section
- Filterable 3D portfolio showcase
- Client logos section (MakeMyTrip, Goibibo, RedBus, etc.)
- Functional contact form
- Fully responsive design

### 🔄 UPDATING YOUR SITE LATER
After making changes locally:
```bash
git add .
git commit -m "Your commit message here"
git push
```
GitHub Pages will automatically update within 1-2 minutes.

---

**Need Help?**
- Stuck on a step? Describe the error message
- Need a CNAME file created? Provide your domain name
- Want to see deployment status? Check GitHub Actions tab
- Questions about customizing content? I'm here to help!

Your portfolio is ready to impress clients and showcase your graphic design expertise! 💼✨