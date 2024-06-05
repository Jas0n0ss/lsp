document.addEventListener('DOMContentLoaded', function() {
    const ipAddress = document.getElementById('ip-address');

    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress.innerText = `Your IP Address: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            ipAddress.innerText = 'Unable to fetch IP address';
        });
});
