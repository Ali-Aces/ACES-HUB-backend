const express = require('express');
const router = express.Router();
const qrCodeScanController = require('../controller/qrscan');

// Route to store QR code scan data
router.post('/api/scan', qrCodeScanController.storeQRCodeScan);

module.exports = router;
