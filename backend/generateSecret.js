import { randomBytes } from 'crypto';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const generateSecretKey = () => {
  return randomBytes(256).toString('base64');
};

const secretKey = generateSecretKey();
console.log('Generated JWT Secret Key:', secretKey);

// Update .env file
fs.readFile('.env', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading .env file:', err);
    return;
  }
  const result = data.replace(/JWT_SECRET_KEY=.*/, `JWT_SECRET_KEY=${secretKey}`);
  fs.writeFile('.env', result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing .env file:', err);
      return;
    }
    console.log('Updated .env with new JWT secret key');
  });
});
