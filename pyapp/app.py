from flask import Flask, request
import requests
import ipaddress

app = Flask(__name__)

def is_public_ip(ip):
    try:
        ip_obj = ipaddress.ip_address(ip)
        return not ip_obj.is_private
    except ValueError:
        return False

@app.route('/')
def get_public_ip():
    try:
        client_ip = request.remote_addr
        
        if not is_public_ip(client_ip):
            client_ip = requests.get('https://api.ipify.org?format=json').json()['ip']

        # Remove trailing % character, if present
        client_ip = client_ip.split('%')[0]

        return f'{client_ip}'
    except Exception as e:
        return f'Error fetching public IP: {str(e)}', 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
