import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const lettersOrder = [
  'alif.png', 'ba.png', 'ta.png', 'tha.png', 'jeem.png', 'ha_lower.png',
  'kha.png', 'dal.png', 'dhal.png', 'ra.png', 'zay.png', 'seen.png',
  'sheen.png', 'sad.png', 'dad.png', 'tah.png', 'za.png', 'ayn.png',
  'ghain.png', 'fa.png', 'qaf.png', 'kaf.png', 'lam.png', 'meem.png',
  'noon.png', 'ha_upper.png', 'waw.png', 'ya.png'
];

// Smart route for letter images: auto-organize if uploaded to root or under number
app.get('/images/letters/:filename', (req, res, next) => {
  const lettersDir = path.join(__dirname, 'images', 'letters');
  if (!fs.existsSync(lettersDir)) {
    fs.mkdirSync(lettersDir, { recursive: true });
  }

  const requestedFilename = req.params.filename;
  const targetPath = path.join(lettersDir, requestedFilename);

  if (fs.existsSync(targetPath)) {
    return res.sendFile(targetPath);
  }

  // Check if user uploaded with exact filename to root directory
  const rootPath = path.join(__dirname, requestedFilename);
  if (fs.existsSync(rootPath)) {
    fs.renameSync(rootPath, targetPath);
    return res.sendFile(targetPath);
  }

  // Check if user uploaded as sequence number (1.png, 2.png, 01.png, etc.)
  const letterIndex = lettersOrder.indexOf(requestedFilename);
  if (letterIndex !== -1) {
    const seqNum = letterIndex + 1;
    const numCandidates = [
      `${seqNum}.png`,
      `${seqNum < 10 ? '0' + seqNum : seqNum}.png`,
      `${seqNum}_${requestedFilename}`,
      `${seqNum < 10 ? '0' + seqNum : seqNum}_${requestedFilename}`
    ];

    for (const cand of numCandidates) {
      const candRoot = path.join(__dirname, cand);
      const candLetters = path.join(lettersDir, cand);

      if (fs.existsSync(candRoot)) {
        fs.renameSync(candRoot, targetPath);
        return res.sendFile(targetPath);
      }
      if (fs.existsSync(candLetters)) {
        fs.renameSync(candLetters, targetPath);
        return res.sendFile(targetPath);
      }
    }
  }

  next();
});

// Serve static files from root directory
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
