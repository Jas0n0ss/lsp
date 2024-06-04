from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def public_ip():
    try:
        ip_address = request.remote_addr
        return f'{ip_address}'
    except Exception as e:
        return f'Error fetching public IP: {str(e)}', 500

