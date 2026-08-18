# இளைஞர் முழக்கம் — Premium Demo UI v2

This build is intentionally **Firebase-hidden / demo mode** for UI/UX testing.

## Included
- Premium mobile-first Tamil news UI inspired by modern short-news products
- Hero story + highlights + category chips + responsive cards
- Dark mode, search, drawer, bottom navigation
- Demo profile login (no real account / Firebase call)
- Online Unsplash image URLs for testing
- Article reader with source link
- Article PDF download using html2pdf.js
- Monthly edition demo PDF download
- Editorial Studio link preserved

## Firebase
Firebase files are retained in the package for later integration, but the current `index.html` does not load Firebase. This prevents Firebase configuration errors during UI testing.

## Testing
Open `index.html` directly or use any static hosting server. `localStorage` is used for future demo data compatibility.
