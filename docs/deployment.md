# Deployment Guide

## Overview
This guide covers deploying the portfolio application to various hosting platforms.

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git repository
- Hosting platform account

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Build
```bash
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)

#### Setup
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

#### Configuration
Create `vercel.json`:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. Netlify

#### Setup
1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

#### Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

#### Setup
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

#### Setup
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize project:
   ```bash
   firebase init hosting
   ```

4. Deploy:
   ```bash
   firebase deploy
   ```

## Environment Variables

### Production Setup
Set these variables in your hosting platform:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Vercel
1. Go to project settings
2. Navigate to Environment Variables
3. Add each variable with production value

### Netlify
1. Go to Site settings
2. Navigate to Environment variables
3. Add each variable

## Domain Configuration

### Custom Domain
1. Purchase domain from provider
2. Add domain to hosting platform
3. Update DNS records
4. Configure SSL certificate

### Subdomain
1. Add subdomain in hosting platform
2. Update DNS records
3. Configure redirects if needed

## Performance Optimization

### 1. Build Optimization
```bash
# Analyze bundle size
npm run build -- --analyze

# Optimize images
npm install -g imagemin-cli
imagemin src/assets/* --out-dir=dist/assets
```

### 2. CDN Configuration
- Enable CDN on hosting platform
- Configure caching headers
- Optimize static assets

### 3. Compression
- Enable gzip compression
- Use Brotli compression if available
- Optimize images and fonts

## Monitoring

### 1. Analytics
- Google Analytics
- Vercel Analytics
- Netlify Analytics

### 2. Error Tracking
- Sentry
- LogRocket
- Bugsnag

### 3. Performance Monitoring
- Lighthouse CI
- WebPageTest
- GTmetrix

## Security

### 1. HTTPS
- Ensure SSL certificate is active
- Redirect HTTP to HTTPS
- Use HSTS headers

### 2. Headers
```json
{
  "headers": [
    {
      "source": "**",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Environment Variables Not Working**
   - Verify variable names start with VITE_
   - Check hosting platform configuration
   - Restart deployment

3. **Routing Issues**
   - Configure redirects for SPA
   - Check base path configuration
   - Verify build output

4. **Email Service Not Working**
   - Verify EmailJS credentials
   - Check domain configuration
   - Test in production environment

### Debug Steps
1. Check build logs
2. Verify environment variables
3. Test locally with production build
4. Check browser console for errors
5. Verify hosting platform configuration

## Maintenance

### Regular Tasks
- Update dependencies
- Monitor performance
- Check for security updates
- Backup configuration
- Review analytics

### Updates
- Test changes locally
- Deploy to staging first
- Monitor production after deployment
- Rollback if issues occur
