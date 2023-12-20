const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QRCodeScanSchema = new Schema({
  sessionData: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // deviceId: {
  //   type: String,
  //   required: true,
  // },

});

const QRCodeScan = mongoose.model('QRCodeScan', QRCodeScanSchema);

module.exports = QRCodeScan;
