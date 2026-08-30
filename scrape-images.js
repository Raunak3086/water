const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume(); // Consume response data to free up memory
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

(async () => {
  const galleryDir = path.join(__dirname, 'public', 'gallery');
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to products page...');
  await page.goto('https://home-water-solutions.preview.emergentagent.com/products', { waitUntil: 'networkidle2' });

  // Get all image sources
  const imageUrls = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    const urls = [];
    imgs.forEach(img => {
      if (img.src && img.src.startsWith('http')) {
        urls.push(img.src);
      }
    });
    return [...new Set(urls)]; // return unique URLs
  });

  console.log(`Found ${imageUrls.length} images.`);

  let i = 1;
  const downloadedFiles = [];
  for (const url of imageUrls) {
    try {
      // try to extract extension or default to jpg
      const extMatch = url.match(/\.(png|jpe?g|webp|avif|svg)(\?.*)?$/i);
      const ext = extMatch ? extMatch[1] : 'jpg';
      const filename = `gallery-img-${i}.${ext}`;
      const filepath = path.join(galleryDir, filename);
      
      console.log(`Downloading ${url} -> ${filename}`);
      await downloadImage(url, filepath);
      downloadedFiles.push(`/gallery/${filename}`);
      i++;
    } catch (e) {
      console.error(`Failed to download ${url}:`, e.message);
    }
  }

  await browser.close();
  console.log('Done downloading images.');
  console.log(JSON.stringify(downloadedFiles));
})();
