const QRCodeScan = require('../models/Qrscanner');

// Controller function to handle the storage of QR code scan data
const storeQRCodeScan = async (req, res) => {
  try {
    // Extract data from the request body
    const { sessionData, userId, email, deviceId } = req.body;

    // Create a new QRCodeScan instance
    const newQRCodeScan = new QRCodeScan({
      sessionData,
      userId,
      email,
      
      
    });

    // Save the QRCodeScan instance to the database
    const savedQRCodeScan = await newQRCodeScan.save();

    res.json({ success: true, message: 'QR code scan data stored successfully', data: savedQRCodeScan });
  } catch (error) {
    console.error('Error storing QR code scan data:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  storeQRCodeScan,
};
