const fs = require('fs');
const axios = require('axios');

async function generateSite() {
    try {
        // Make a request to get the public IP address
        const response = await axios.get('https://api.ipify.org?format=text');
        const ipAddress = response.data;

        // Generate HTML content
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My IP Address</title>
            </head>
            <body>
                <h1>Your Public IP Address is:</h1>
                <p>${ipAddress}</p>
            </body>
            </html>
        `;

        // Write the HTML content to a file
        fs.writeFileSync('public/index.html', htmlContent);
        console.log('Static site generated successfully.');
    } catch (error) {
        console.error('Error fetching public IP:', error);
    }
}

generateSite();
