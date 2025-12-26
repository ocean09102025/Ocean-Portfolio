# 🔧 Formspree Email Setup - Quick Fix

## Problem
Your contact form is working, but emails are not being delivered to your new email address (`oceanoceandataanalyst@gmail.com`).

## Solution
You need to update the Formspree form settings to change where emails are sent.

## Step-by-Step Instructions

### 1. Go to Formspree Dashboard
- Visit: https://formspree.io/
- Click **"Sign In"** (use the same account that created the form)

### 2. Find Your Form
- After signing in, you'll see your forms list
- Look for form ID: **`mldpaaak`** (or search for "ocean-portfolio")
- Click on the form to open it

### 3. Update Email Destination
- Click on **"Settings"** tab (or **"Email"** tab)
- Look for **"Email To"** or **"Recipient Email"** field
- Change it from the old email to: **`oceanoceandataanalyst@gmail.com`**
- Click **"Save"** or **"Update"**

### 4. Verify Email Address
- Formspree will send a verification email to `oceanoceandataanalyst@gmail.com`
- **Check your inbox** at `oceanoceandataanalyst@gmail.com`
- **Click the verification link** in the email
- This is REQUIRED - emails won't be delivered until verified

### 5. Test the Form
- Go back to your portfolio contact page
- Submit a test message
- Check `oceanoceandataanalyst@gmail.com` for the email

## Important Notes

- **Form ID**: `mldpaaak` (found in `src/utils/emailService.ts`)
- **New Email**: `oceanoceandataanalyst@gmail.com`
- **Old Email**: (whatever was previously configured - likely `oceanocean1205@gmail.com` or `rishisameer7@gmail.com`)

## Troubleshooting

### If you can't find the form:
- Make sure you're logged into the correct Formspree account
- Check if you have multiple accounts (personal vs work email)
- Try searching for "ocean" or "portfolio" in your forms

### If emails still don't arrive:
1. Check spam folder in `oceanoceandataanalyst@gmail.com`
2. Verify the email address is correct in Formspree (no typos)
3. Check Formspree dashboard → Submissions tab to see if forms are being received
4. Verify you clicked the email verification link
5. Check Formspree free tier limits (50 submissions/month)

### If verification email doesn't arrive:
- Check spam folder
- Wait a few minutes (can take up to 5 minutes)
- Try changing the email in Formspree settings again to trigger a new verification email

## Quick Access
- Formspree Dashboard: https://formspree.io/forms
- Your Form (if public): https://formspree.io/forms/mldpaaak/integration

