# 📧 Guide to Update Email Address

This guide will help you update your email address in both Vercel and Formspree so you receive contact form emails at your new address: `oceanoceandataanalyst@gmail.com`

## ✅ Step 1: Update Vercel Account Email

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in to your account

2. **Navigate to Account Settings**
   - Click on your profile picture/avatar (top right corner)
   - Select **"Account Settings"** from the dropdown menu

3. **Update Email Address**
   - Click on the **"Email"** section
   - Change email from `oceanocean1205@gmail.com` to `oceanoceandataanalyst@gmail.com`
   - Click **"Save"** or **"Update"**
   - **Verify the new email** when prompted (check your inbox for verification email)

---

## ✅ Step 2: Update Formspree Email Destination

Your contact form uses Formspree with form ID: `mldpaaak`

1. **Go to Formspree Dashboard**
   - Visit [formspree.io](https://formspree.io)
   - Sign in to your account (use the same account that created the form)

2. **Navigate to Your Form**
   - Go to the **"Forms"** section
   - Find the form with ID `mldpaaak` (or look for "ocean-portfolio" contact form)

3. **Update Email Settings**
   - Click on the form to open its settings
   - Go to **"Settings"** or **"Email"** tab
   - Update the **"Email To"** field from `oceanocean1205@gmail.com` to `oceanoceandataanalyst@gmail.com`
   - Click **"Save"** or **"Update"**

4. **Verify Email Delivery**
   - Formspree will send a verification email to the new address
   - Check your `oceanoceandataanalyst@gmail.com` inbox
   - Click the verification link in the email
   - Once verified, all form submissions will be sent to the new address

---

## ✅ Step 3: Deploy Updated Code to Vercel

The code has already been updated with the new email address. You just need to deploy it:

### Option A: Automatic Deployment (if using Git)
If your code is connected to GitHub/GitLab:
1. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Update email address to oceanoceandataanalyst@gmail.com"
   git push
   ```
2. Vercel will automatically deploy the changes

### Option B: Manual Deployment
1. **Build the project locally**
   ```bash
   npm run build
   ```
2. **Deploy to Vercel**
   - Go to your Vercel dashboard
   - Click **"Deploy"** or use Vercel CLI:
   ```bash
   vercel --prod
   ```

---

## ✅ Step 4: Test the Contact Form

After completing all steps:

1. **Visit your deployed portfolio**
   - Go to your Vercel deployment URL
   - Navigate to the **Contact** page

2. **Submit a Test Form**
   - Fill out the contact form with test data
   - Submit the form

3. **Check Your Email**
   - Go to `oceanoceandataanalyst@gmail.com`
   - You should receive the test email within a few minutes

---

## 🔍 Troubleshooting

### If emails are not arriving:

1. **Check Spam Folder**
   - Check the spam/junk folder in your new email account

2. **Verify Formspree Settings**
   - Make sure the email is verified in Formspree
   - Check Formspree dashboard for submission logs

3. **Check Formspree Limits**
   - Free tier has monthly submission limits
   - Verify you haven't exceeded the limit

4. **Check Browser Console**
   - Open browser developer tools (F12)
   - Check the Console tab for any errors when submitting the form

5. **Check Formspree Logs**
   - Go to Formspree dashboard
   - Check the "Submissions" tab to see if forms are being received

---

## 📝 Important Notes

- **Formspree Form ID**: `mldpaaak` (found in `src/utils/emailService.ts`)
- **New Email**: `oceanoceandataanalyst@gmail.com`
- **Old Email**: `oceanocean1205@gmail.com` (no longer in use)

All code references have been updated. You only need to update the external services (Vercel account and Formspree settings).

