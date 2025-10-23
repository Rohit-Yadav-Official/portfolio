# Contact Form Deployment Checklist

You've enabled form detection in Netlify! Follow these steps to get emails working.

## ✅ Status

- [x] Form detection enabled in Netlify
- [x] Form code updated in your codebase
- [ ] Deploy code to Netlify
- [ ] Configure email notifications
- [ ] Test the form

## 🚀 Step-by-Step Deployment

### Step 1: Deploy Your Code to Netlify

**Option A: Via GitHub (Recommended)**
```bash
# In your terminal, from the project directory:
git add .
git commit -m "Add functional contact form with Netlify Forms"
git push origin main
```
Netlify will automatically deploy your changes.

**Option B: Manual Deploy via Netlify CLI**
```bash
# Build your project
npm run build

# Deploy to Netlify (if you have Netlify CLI installed)
netlify deploy --prod
```

**Option C: Drag & Drop**
1. Run `npm run build`
2. Go to Netlify dashboard
3. Drag the `dist` folder to the deploy area

### Step 2: Verify Form Detection

After deployment:

1. Go to **Netlify Dashboard** (https://app.netlify.com)
2. Select your site (**yadavrohit.in**)
3. Click **"Forms"** in the left sidebar
4. You should see: **"contact"** form listed

If you don't see it:
- Wait 2-3 minutes and refresh
- Check deployment logs for errors
- Ensure form detection is enabled (you did this ✓)

### Step 3: Set Up Email Notifications

1. In Netlify dashboard, click **"Forms"**
2. Click on **"contact"** form
3. Click **"Form notifications"** tab
4. Click **"Add notification"** button
5. Select **"Email notification"**

Configure the notification:
```
Email to notify: yadavrohit-dev@outlook.com
Event to listen for: New form submission
Form: contact
```

6. Click **"Save"**

### Step 4: Test the Form

1. Visit your website: **https://yadavrohit.in**
2. Scroll to the Contact section
3. Fill out the form:
   ```
   Name: Test User
   Email: test@example.com
   Message: Testing contact form
   ```
4. Click **Submit**
5. You should see: **"✓ Thank you! Your message has been sent successfully."**

### Step 5: Check Your Email

1. Check your inbox: **yadavrohit-dev@outlook.com**
2. Look for email from: **Netlify**
3. Subject: **New form submission from yadavrohit.in**
4. **Also check SPAM/JUNK folder** (first email might go there)

Email will contain:
- Name: Test User
- Email: test@example.com
- Message: Testing contact form
- Timestamp
- IP address

## 🎯 Quick Test Checklist

After deployment, verify:

- [ ] Form appears on homepage (contact section)
- [ ] All fields are present (Name, Email, Message)
- [ ] Clicking Submit shows "Sending..." state
- [ ] Success message appears after submission
- [ ] Form clears after successful submission
- [ ] Email arrives in your inbox (within 1-2 minutes)

## 🐛 Troubleshooting

### Form Not Submitting?

**Check 1: Browser Console**
```
1. Right-click on page → Inspect
2. Go to Console tab
3. Submit form and look for errors
4. Share any red errors if you need help
```

**Check 2: Network Tab**
```
1. Right-click → Inspect → Network tab
2. Submit form
3. Look for POST request to "/"
4. Status should be 200 or 303
```

### Form Submits But No Email?

**Solution 1: Check Netlify Dashboard**
```
1. Go to Forms → contact
2. Click "Submissions" tab
3. Check if submission appears there
4. If yes, issue is with email notification
5. If no, issue is with form submission
```

**Solution 2: Verify Email Notification Setup**
```
1. Forms → contact → Form notifications
2. Check email notification is listed
3. Verify email address is correct
4. Try deleting and re-adding notification
```

**Solution 3: Check Spam Folder**
```
The first email from Netlify often goes to spam.
Mark it as "Not Spam" to receive future emails.
```

### Form Shows "Method Not Allowed"?

This means form detection didn't work. Fix:

1. Check that `data-netlify="true"` is in the form tag ✓
2. Check hidden input: `<input type="hidden" name="form-name" value="contact" />` ✓
3. Redeploy the site
4. Clear browser cache
5. Try incognito/private window

## 📧 Email Settings (Optional)

### Change Email Address
1. Forms → contact → Form notifications
2. Click on email notification
3. Edit email address
4. Save

### Add Multiple Email Recipients
1. Add multiple notifications
2. Each can go to different email
3. Example: personal + work email

### Change Email Subject
Unfortunately, Netlify doesn't allow custom subjects.
Default: "New form submission from yadavrohit.in"

## 🔒 Spam Protection

After testing, if you get spam:

### Option 1: Enable reCAPTCHA
```
1. Get reCAPTCHA v2 keys from Google
2. Netlify → Site Settings → Forms
3. Enable reCAPTCHA
4. Add your site key and secret key
5. reCAPTCHA will appear on form automatically
```

### Option 2: Block IPs
```
1. Netlify → Forms → contact → Submissions
2. Click on spam submission
3. Click "Block IP"
4. That IP can't submit again
```

## 📊 View All Submissions

**In Netlify Dashboard:**
```
1. Forms → contact → Submissions
2. See all form submissions
3. Filter by date
4. Search by name/email
5. Export as CSV
```

**Data Retention:**
- Free plan: 30 days
- Pro plan: Forever

## 🎉 Success!

Once you:
1. ✅ Deploy the code
2. ✅ See form in Netlify dashboard
3. ✅ Configure email notification
4. ✅ Test and receive email

**You're done!** Your contact form is fully functional.

## 📞 Need Help?

If something doesn't work:

1. **Check deployment logs** in Netlify
2. **Check browser console** for errors
3. **Check Netlify Forms dashboard** for submissions
4. **Re-read troubleshooting** section above

## 🚀 Deploy Now!

Ready to deploy? Run:

```bash
git add .
git commit -m "Add functional contact form"
git push origin main
```

Then follow Steps 2-5 above!

Good luck! 🎯
