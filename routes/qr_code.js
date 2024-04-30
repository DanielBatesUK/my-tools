// ################################################################################################

// Imports
import express from 'express';
import qrCode from 'qrcode';
import path from 'path';
import { fileURLToPath } from 'url';

// ################################################################################################

// Express
const router = express.Router();

// ################################################################################################

// GET Request
router.get('/', async (req, res) => {
  try {
    console.log(`Processing HTTP ${req.method} request for '${req.path}' as 'qr-code'`);
    res.render('qr_code');
    res.end();
  } catch (error) {
    console.error(error);
    if (!res.writableEnded) {
      res.send('QR-code error');
      res.end();
    }
  }
});

// ################################################################################################

router.get('/qrcode', async (req, res) => {
  try {
    const dataString = (req.query.chl && decodeURIComponent(req.query.chl)) || 'Hello World!';
    const colorDark = (req.query.chcd && decodeURIComponent(req.query.chcd)) || '#000000ff';
    const colorLight = (req.query.chcl && decodeURIComponent(req.query.chcl)) || '#ffffffff';
    const options = {
      type: 'png',
      errorCorrectionLevel: req.query.chld || 'M',
      width: (req.query.chs && Number(req.query.chs)) || 256,
      margin: (req.query.chm && Number(req.query.chm)) || 4,
      scale: (req.query.chsc && Number(req.query.chsc)) || 4,
      color: { dark: colorDark, light: colorLight },
    };
    const qrCodeImage = await qrCode.toBuffer(dataString, options);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': qrCodeImage.length,
    });
    res.end(qrCodeImage);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// ################################################################################################

// Exports
export default router;

// ################################################################################################
