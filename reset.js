// Deleting 'dist' folder

const fs = require('fs');
const path = require('path');

const subfolder = path.resolve(__dirname, 'dist');

fs.rmSync(subfolder, { recursive: true, force: true });