window.onload = function() {
    fetch('https://ipecho.io/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').innerText = data.ip;
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
        document.getElementById('ip-address').innerText = 'Unable to fetch IP address';
    });
};
