const { encrypt, decrypt } = require('./index');

// Encrypt a message
const encryptedData = encrypt('Hello, World!');
console.log('Encrypted:', encryptedData);

// Decrypt the message
const decryptedData = decrypt(encryptedData);
console.log('Decrypted:', decryptedData);
