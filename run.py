import subprocess
import os
import sys
import threading
import time
import webbrowser

def start_backend():
    print("[Backend] Starting FastAPI server...")
    backend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "backend")
    # We use python main.py since it has uvicorn.run inside
    subprocess.run([sys.executable, "main.py"], cwd=backend_dir)

def start_frontend():
    print("[Frontend] Starting HTTP server on port 3000...")
    frontend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "frontend")
    subprocess.run([sys.executable, "-m", "http.server", "3000"], cwd=frontend_dir)

if __name__ == "__main__":
    print("=========================================")
    print("   Starting Electrifying Portfolio...    ")
    print("=========================================")
    
    # Start Backend
    backend_thread = threading.Thread(target=start_backend)
    backend_thread.daemon = True
    backend_thread.start()
    
    # Start Frontend
    frontend_thread = threading.Thread(target=start_frontend)
    frontend_thread.daemon = True
    frontend_thread.start()
    
    print("Waiting for servers to start...")
    time.sleep(3)
    
    print("Opening browser to http://localhost:3000...")
    webbrowser.open("http://localhost:3000")
    
    print("\n[INFO] Both servers are running!")
    print("[INFO] Press CTRL+C to stop them.\n")
    
    try:
        # Keep main thread alive
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nShutting down servers...")
        sys.exit(0)
