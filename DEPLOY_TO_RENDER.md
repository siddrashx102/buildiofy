# Deploy Buildiofy to Render - Complete Guide

## Prerequisites

1. **GitHub Account**: Your code needs to be in a GitHub repository
2. **Render Account**: Sign up at render.com (free)
3. **Gmail App Password**: For email functionality

## Step 1: Prepare Your Code for GitHub

### Push to GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Buildiofy website ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy on Render

### 2.1 Create New Web Service

1. Go to [render.com](https://render.com) and sign in
2. Click **"New +"** button
3. Select **"Web Service"**
4. Connect your GitHub account if not already connected
5. Select your repository from the list

### 2.2 Configure Service Settings

Use these exact settings:

| Setting | Value |
|---------|-------|
| **Name** | `buildiofy-website` |
| **Region** | Oregon (US West) |
| **Branch** | `main` |
| **Root Directory** | (leave empty) |
| **Environment** | `Node` |
| **Build Command** | `npm ci && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | Free (or upgrade for better performance) |

### 2.3 Environment Variables

Click **"Advanced"** and add these environment variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Sets production mode |
| `EMAIL_USER` | `your-gmail@gmail.com` | Your Gmail address |
| `EMAIL_PASS` | `your-app-password` | Gmail App Password |

### 2.4 Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Build your application
   - Start the server
   - Provide you with a live URL

## Step 3: Configure Gmail App Password

### 3.1 Enable 2-Factor Authentication
1. Go to [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled

### 3.2 Generate App Password
1. In Security settings, go to **2-Step Verification**
2. Scroll down to **App passwords**
3. Click **Generate App Password**
4. Select **Mail** as the app
5. Copy the 16-character password
6. Use this password as `EMAIL_PASS` in Render

## Step 4: Verify Deployment

After deployment completes:

1. **Check Build Logs**: Ensure no errors during build
2. **Test Website**: Visit your Render URL
3. **Test Contact Form**: Fill out and submit the contact form
4. **Check Emails**: Verify both admin and user emails are sent

## Step 5: Custom Domain (Optional)

### Add Your Own Domain
1. In your Render service dashboard
2. Go to **Settings** → **Custom Domains**
3. Add your domain (e.g., `buildiofy.com`)
4. Update your domain's DNS to point to Render
5. SSL certificates are automatically provisioned

## Deployment Features You Get

✅ **Automatic HTTPS/SSL certificates**  
✅ **CDN with global edge locations**  
✅ **Automatic deploys on Git push**  
✅ **Built-in monitoring and logs**  
✅ **99.9% uptime SLA**  
✅ **DDoS protection**  
✅ **Custom domain support**  

## Troubleshooting

### Build Fails
- Check if all dependencies are in `package.json`
- Ensure Node.js version compatibility
- Review build logs for specific errors

### Contact Form Not Working
- Verify `EMAIL_USER` and `EMAIL_PASS` are set correctly
- Check Gmail App Password is 16 characters
- Ensure 2-factor authentication is enabled

### Site Not Loading
- Check if start command is correct (`npm start`)
- Verify the app binds to `0.0.0.0:$PORT`
- Review server logs for errors

## Monitoring & Maintenance

### Access Logs
- Go to your service dashboard
- Click **"Logs"** tab
- Monitor real-time application logs

### Update Environment Variables
- Service Settings → Environment
- Add/edit variables as needed
- Deploy automatically triggers

### Auto-Deploy Setup
- Every push to `main` branch automatically deploys
- Configure branch in service settings
- Disable auto-deploy if needed

## Cost Optimization

### Free Tier Limits
- 750 hours/month (enough for continuous operation)
- Sleeps after 15 minutes of inactivity
- Shared CPU and 512MB RAM

### Upgrade Benefits
- Always-on (no sleeping)
- Dedicated resources
- Faster builds and deploys
- Priority support

## Success! 🎉

Your Buildiofy website is now live and accessible worldwide. The professional contact form will send beautiful HTML emails to both you and your potential clients.

**Next Steps:**
1. Share your live URL with clients
2. Monitor form submissions via email
3. Consider upgrading for production use
4. Add analytics and monitoring

---

Need help? Contact support through your Render dashboard or check their comprehensive documentation.