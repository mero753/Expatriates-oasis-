from http.server import HTTPServer, SimpleHTTPRequestHandler
import webbrowser
import os

def run_server():
    # تأكد من أننا في المجلد الصحيح
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    port = 8000
    server_address = ('', port)
    
    print(f'Starting server on port {port}...')
    print(f'Open your browser and visit: http://localhost:{port}')
    
    # فتح المتصفح تلقائياً
    webbrowser.open(f'http://localhost:{port}')
    
    # تشغيل السيرفر
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
