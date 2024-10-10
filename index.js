const crypto = require('crypto');

// Define an algorithm, secret key, and initialization vector (IV)
const algorithm = 'aes-256-cbc'; // Algorithm
const secretKey = crypto.randomBytes(32); // Must be 32 bytes for aes-256-cbc
const iv = crypto.randomBytes(16); // Initialization vector must be 16 bytes

// Encryption function
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    
    return {
        iv: iv.toString('hex'),
        content: encrypted
    };
}

// Decryption function
function decrypt(hash) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    let decrypted = decipher.update(hash.content, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    
    return decrypted;
}

// Export the functions for use in other files
module.exports = {
    encrypt,
    decrypt
};
