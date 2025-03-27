# Emotion Detection Website  

A **real-time emotion detection** web application that uses:  
- **OpenCV.js** (or Python backend with Flask later) for face detection.  
- **Haar Cascade** for face and emotion recognition.  
- **Tailwind CSS** for styling.  
- **Vanilla JavaScript** for webcam access and real-time processing.  

![Demo Preview](https://via.placeholder.com/600x400?text=Emotion+Detection+Demo) *(Replace with actual screenshot later)*  

## Features  
✅ **Real-time face detection** (using Haar Cascade in OpenCV).  
✅ **Emotion prediction** (happy, sad, angry, neutral, etc.).  
✅ **Responsive UI** built with **Tailwind CSS**.  
✅ **Pure frontend implementation** (for now, can extend to Flask/Django later).  

## Technologies Used  
🖥 **Frontend**:  
- HTML5, Vanilla JavaScript  
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)  
- [OpenCV.js](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html) (for browser-based face detection)  

🤖 **Computer Vision**:  
- **Haar Cascade Classifiers** (`haarcascade_frontalface_default.xml`)  
- (Optional) Emotion detection model (e.g., pre-trained CNN)  

## Setup & Run (Frontend-Only)  
Since you're starting with just `index.html`, here’s how to test it:  

1. **Clone the repo** (if applicable):  
   ```bash
   git clone https://github.com/yourusername/emotion-detection-website.git
   cd emotion-detection-website
   ```

2. **Install Tailwind CSS** (if not already set up):  
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```
   *(Ensure your `tailwind.config.js` and build process are set up.)*  

3. **Run a live server**:  
   - Use VS Code’s **Live Server** extension.  
   - Or run:  
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.  

4. **Access webcam**:  
   - The browser will ask for camera permissions.  
   - Haar Cascade/OpenCV.js will process frames in real-time.  

## Project Structure (Current)  
```
emotion-detection-website/
├── index.html            # Main HTML with Tailwind + JS
└── README.md
```

## Next Steps (Optional Backend)  
If you later want to use **Python (Flask/OpenCV Haar Cascade)**:  
1. Add `app.py` for Flask backend.  
2. Replace OpenCV.js with **Python OpenCV** for better accuracy.  
3. Use WebSocket or HTTP streaming for real-time updates.  

## Contributions  
Feel free to contribute! Open a PR or issue.  

## License  
MIT  

---

### Key Notes:  
1. **OpenCV.js vs Python OpenCV**:  
   - If you’re using **OpenCV.js** (browser-based), mention it.  
   - If you plan to switch to **Python + Flask**, note that Haar Cascades work better there.  

2. **Haar Cascade Models**:  
   - Include the `.xml` files in `/assets/models/`.  

3. **Demo GIF**:  
   - Add a `demo.gif` later to showcase real-time detection.  
