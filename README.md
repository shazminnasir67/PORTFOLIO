# Portfolio Website - FastAPI Backend

This is a FastAPI backend for serving the Blinkpath portfolio website.

## Features

- Serves static HTML, CSS, and JavaScript files
- Handles routing for work pages and other content
- Provides API endpoints for health checks and information
- CORS enabled for cross-origin requests
- Proper static file serving for images and assets

## Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

### Option 1: Using Python directly
```bash
python main.py
```

### Option 2: Using Uvicorn
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### Option 3: Using Uvicorn with development mode
```bash
uvicorn main:app --reload
```

## Accessing the Website

Once the server is running, you can access:

- **Main Website:** http://localhost:8000/
- **Work Pages:** http://localhost:8000/work/[project-name]
- **Privacy Policy:** http://localhost:8000/privacy-policy
- **API Documentation:** http://localhost:8000/docs
- **Health Check:** http://localhost:8000/api/health
- **API Info:** http://localhost:8000/api/info

## API Endpoints

- `GET /` - Main website homepage
- `GET /work/{path}` - Work project pages
- `GET /privacy-policy` - Privacy policy page
- `GET /api/health` - Health check endpoint
- `GET /api/info` - Website information

## File Structure

```
PORTFOLIO/
├── main.py                 # FastAPI application
├── requirements.txt        # Python dependencies
├── README.md              # This file
├── www.blinkpath.com/     # Website files
│   ├── index.html         # Main homepage
│   ├── _astro/            # Astro framework assets
│   ├── work/              # Work project pages
│   └── privacy-policy     # Privacy policy
└── images.prismic.io/     # Image assets
```

## Development

The server includes hot-reload functionality when using the `--reload` flag with uvicorn, making development easier.

## Troubleshooting

- Make sure all files are in the correct directories
- Check that the `www.blinkpath.com` and `images.prismic.io` directories exist
- Ensure port 8000 is not already in use
- For Windows PowerShell, use the uvicorn command instead of python main.py
