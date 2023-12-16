const fs = require('fs');
const bigInt = require("big-integer");

function cubeRoot(value) {
    let low = bigInt(0), high = value;
    while (low.lesser(high)) {
        let mid = low.add(high).divide(2);
        if (mid.pow(3).lesser(value)) {
            low = mid.add(1);
        } else {
            high = mid;
        }
    }
    return low;
}

function hexToText(hexString) {
    let hex = hexString.toString(16);
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

// Read RSA parameters from msg.txt
fs.readFile('msg.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Extract parameters from the file content
    const params = {};
    data.split('\n').forEach(line => {
        const [key, value] = line.split('=').map(part => part.trim());
        if (key && value) {
            // Remove the '0x' prefix if present and parse as big integer
            params[key] = bigInt(value.replace(/^0x/, ''), 16);
        }
    });

    // Extract N, e, and C
    const { N, e, C } = params;

    // Decrypting the message
    try {
        const root = cubeRoot(C);
        const decryptedMessage = hexToText(root);
        console.log("Decrypted message:", decryptedMessage);
    } catch (error) {
        console.log("An error occurred during decryption:", error);
    }
});
