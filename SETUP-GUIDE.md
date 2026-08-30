# PoojaNow — Complete Setup Guide

This connects your app to a real, free backend (Firebase) so orders and catalog
changes sync live — no more fake/local-only data. Takes about 10-15 minutes,
one time only. No coding needed for any of this part.

---

## STEP 1 — Create your Firebase project

1. Go to **https://console.firebase.google.com**
2. Sign in with any Google account
3. Click **Add project**
4. Name it something like `poojanow` → click Continue
5. You can turn Google Analytics off for this (not needed) → click **Create project**
6. Wait ~30 seconds, then click **Continue**

## STEP 2 — Register your web app & get the config

1. On your project's home screen, click the **</>** (web) icon to add a web app
2. Nickname it `poojanow-web` → click **Register app**
3. You'll see a code block with a `firebaseConfig = {...}` object — **copy it**
4. Open the file `firebase-config.js` (in this folder) and replace the placeholder
   values with what you copied. Keep the variable name `firebaseConfig` exactly
   as it is — just swap in your real `apiKey`, `authDomain`, `projectId`, etc.
5. Save the file.
6. Click **Continue to console** on the Firebase page.

## STEP 3 — Turn on the database (Firestore)

1. In the left sidebar, go to **Build → Firestore Database**
2. Click **Create database**
3. Choose a location close to India — **asia-south1 (Mumbai)** is ideal
4. Choose **Start in production mode** → click **Create**

## STEP 4 — Set the security rules

1. Still in Firestore, click the **Rules** tab at the top
2. Delete everything in the box
3. Open the file `firestore.rules` (in this folder), copy its entire contents,
   and paste it into the Firebase rules box
4. Click **Publish**

This is what keeps your data safe: anyone can browse the catalog and place an
order, but only you (logged in) can see the full order list or edit the catalog.

## STEP 4B — Turn on image storage (for real product photos)

1. In the left sidebar, go to **Build → Storage**
2. Click **Get started** → keep the default settings → click **Done**
   (choose the same Mumbai/asia-south1 region if it asks)
3. Click the **Rules** tab (inside Storage, not Firestore)
4. Delete everything in the box
5. Open the file `storage.rules` (in this folder), copy its entire contents,
   and paste it into the box
6. Click **Publish**

This is what lets you upload real photos for each item from the admin panel —
anyone can view the photos, but only you (logged in) can upload or replace them.

## STEP 5 — Turn on your admin login

1. In the left sidebar, go to **Build → Authentication**
2. Click **Get started**
3. Click **Email/Password** in the sign-in providers list → toggle it **Enable** → **Save**
4. Go to the **Users** tab (still in Authentication) → click **Add user**
5. Enter the email and password YOU want to use to log into your admin panel
   (this can be your own email — it doesn't need to be a real inbox tied to the
   project, just something only you know)
6. Click **Add user**

Remember this email + password — it's your admin login for `admin.html`.

## STEP 6 — Put the site online (Netlify)

1. Go to **https://app.netlify.com/drop**
2. Drag the entire `poojanow-site` folder into the drop zone
3. Netlify gives you a live link instantly, like `random-name-123.netlify.app`

(Optional but recommended once you're happy with it: create a free Netlify
account first at **app.netlify.com/signup**, then deploy via **Sites → Add new
site → Deploy manually**, so your site doesn't get orphaned and you can rename
it to something like `poojanow.netlify.app` under **Site settings → Change site
name**.)

## STEP 7 — Seed your catalog

1. Open `yoursite.netlify.app/admin.html`
2. Log in with the email/password from Step 5
3. Click the **Catalog** tab
4. Click **Seed sample catalog (38 items)** — this loads realistic sample
   pooja samagri items (names, units, prices) so you have a structure to test
   with immediately. They won't have photos yet — each shows a neutral
   placeholder icon until you upload one.
5. To add a real photo to any item: click **Edit** on that item, choose a photo
   file, and click **Save changes**. Same for adding a brand-new item — the
   "Add item" row in each category has a file picker built in.
6. You can edit, hide, delete, or add your own real items, prices, and photos
   any time — changes show up on the live site within a second or two.

## STEP 8 — Test the full flow

1. Open `yoursite.netlify.app` (the main site, not `/admin.html`) on your phone
2. Add a few items, go through checkout, place a test order
3. Go back to the admin panel's **Orders** tab — the order should appear
   instantly, live, with no page refresh needed
4. Try tapping "Mark as Packed" etc. — this is what you'll do for real orders
5. On the customer side, use the "Track" tab and enter the order ID to see the
   status update live

---

## Important notes

- **Keep the `/admin.html` link private.** Don't add it to any menu or share it
  publicly — only people who know the exact URL and have your login can reach
  it, but no need to make it easy to stumble onto either.
- **Cost:** Firebase's free tier comfortably covers this at your current scale
  (thousands of reads/writes per day, no credit card required). You'd only
  need to consider upgrading much later, at real volume.
- **Adding more admin users later:** repeat Step 5 (Authentication → Users →
  Add user) for anyone else you want to have access — e.g. if you hire help
  later.
- **If something doesn't load:** open your browser's developer console (F12)
  on the page that's failing — Firebase errors show up there clearly, usually
  pointing to a rules or config mismatch.
