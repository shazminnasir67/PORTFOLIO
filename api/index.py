from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from pathlib import Path
import os

app = FastAPI(
    title="Shazmin Nasir Portfolio",
    description="FastAPI backend for serving portfolio website with project showcases",
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

# Base directory - adjust path for Vercel deployment
BASE_DIR = Path(__file__).parent.parent / "www.ShazminNasir.com"

# Mount static files
try:
    app.mount("/_astro", StaticFiles(directory=str(BASE_DIR / "_astro")), name="astro")
except Exception:
    pass  # Directory might not exist in all deployments

try:
    app.mount("/media", StaticFiles(directory="media"), name="media")
except Exception:
    pass  # Directory might not exist in all deployments

@app.get("/", response_class=HTMLResponse)
async def read_root():
    """Serve the main index.html file"""
    index_path = BASE_DIR / "index.html"
    if index_path.exists():
        return FileResponse(index_path)
    raise HTTPException(status_code=404, detail="Index file not found")

@app.get("/work/{path:path}", response_class=HTMLResponse)
async def read_work_page(path: str):
    """Serve work/project pages"""
    file_path = BASE_DIR / "work" / path
    if file_path.exists():
        return FileResponse(file_path)
    raise HTTPException(status_code=404, detail=f"Work page '{path}' not found")

@app.get("/favicon.ico")
async def favicon():
    """Serve favicon"""
    favicon_path = BASE_DIR / "favicon 2.svg"
    if favicon_path.exists():
        return FileResponse(favicon_path, media_type="image/svg+xml")
    raise HTTPException(status_code=404, detail="Favicon not found")

@app.get("/privacy-policy", response_class=HTMLResponse)
async def privacy_policy():
    """Serve privacy policy page"""
    policy_path = BASE_DIR / "privacy-policy"
    if policy_path.exists():
        return FileResponse(policy_path)
    raise HTTPException(status_code=404, detail="Privacy policy not found")

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "Portfolio API is running",
        "version": "1.0.0"
    }

@app.get("/api/projects")
async def list_projects():
    """List all available projects"""
    work_dir = BASE_DIR / "work"
    if not work_dir.exists():
        return {"projects": []}
    
    projects = []
    for item in work_dir.iterdir():
        if item.is_file():
            projects.append(item.name)
    
    return {"projects": projects}

# Vercel serverless handler
handler = Mangum(app)
