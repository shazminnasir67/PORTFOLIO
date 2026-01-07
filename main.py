from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import os
from pathlib import Path

app = FastAPI(
    title="Portfolio Website",
    description="FastAPI backend for serving the Shazmin Nasir portfolio website",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/_astro", StaticFiles(directory="www.ShazminNasir.com/_astro"), name="astro")
app.mount("/media", StaticFiles(directory="media"), name="images")




# Get the base directory for the website
BASE_DIR = Path("www.ShazminNasir.com")

@app.get("/", response_class=HTMLResponse)
async def read_root():
    """Serve the main index.html file"""
    index_path = BASE_DIR / "index.html"
    if index_path.exists():
        return FileResponse(index_path, media_type="text/html")
    else:
        raise HTTPException(status_code=404, detail="Index file not found")

@app.get("/index.html", response_class=HTMLResponse)
async def read_index_html():
    """Explicit route to serve index.html"""
    return await read_root()

@app.get("/index", response_class=HTMLResponse)
async def read_index():
    """Serve the index page at /index as well"""
    return await read_root()

@app.get("/work/{path:path}", response_class=HTMLResponse)
async def read_work_page(path: str):
    """Serve work pages"""
    work_path = BASE_DIR / "work" / path
    if work_path.exists() and work_path.is_file():
        return FileResponse(work_path, media_type="text/html")
    elif (work_path / "index.html").exists():
        return FileResponse(work_path / "index.html", media_type="text/html")
    else:
        raise HTTPException(status_code=404, detail="Work page not found")

@app.get("/privacy-policy", response_class=HTMLResponse)
async def read_privacy_policy():
    """Serve privacy policy page"""
    privacy_path = BASE_DIR / "privacy-policy"
    if privacy_path.exists():
        return FileResponse(privacy_path, media_type="text/html")
    else:
        raise HTTPException(status_code=404, detail="Privacy policy not found")

@app.get("/favicon.ico")
async def favicon():
    """Serve favicon.ico, falling back to SVG if .ico is missing"""
    ico_path = BASE_DIR / "favicon.ico"
    svg_path = BASE_DIR / "favicon 2.svg"
    if ico_path.exists():
        return FileResponse(ico_path, media_type="image/x-icon")
    elif svg_path.exists():
        return FileResponse(svg_path, media_type="image/svg+xml")
    else:
        raise HTTPException(status_code=404, detail="Favicon not found")

@app.get("/resume")
async def download_resume():
    """Download resume PDF"""
    resume_path = Path("Shazmin Data Science CV.pdf")
    if resume_path.exists():
        return FileResponse(
            resume_path,
            media_type="application/pdf",
            filename="Shazmin_Nasir_Resume.pdf"
        )
    else:
        raise HTTPException(status_code=404, detail="Resume not found")

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "message": "Portfolio website is running"}

@app.get("/api/info")
async def get_info():
    """Get information about the website"""
    return {
        "name": "Shazmin Nasir Portfolio",
        "description": "Personal portfolio website",
        "version": "1.0.0",
        "base_url": "/",
        "static_files": {
            "astro": "/_astro",
            "images": "/images"
        }
    }

@app.get("/{path:path}")
async def read_any_file(path: str):
    """Serve any other files from the website directory"""
    file_path = BASE_DIR / path
    if file_path.exists() and file_path.is_file():
        return FileResponse(file_path)
    else:
        raise HTTPException(status_code=404, detail="File not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
