from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/')
def public_ip():
    try:
        ip_address = request.remote_addr
        # If the IP address is localhost or a private IP address, use a public IP lookup service
        if ip_address in ['127.0.0.1', '::1'] or ip_address.startswith(('192.168.', '10.', '172.')):
            ip_address = requests.get('https://api.ipify.org?format=json').json()['ip']
        return f'{ip_address}'
    except Exception as e:
        return f'Error fetching public IP: {str(e)}', 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
