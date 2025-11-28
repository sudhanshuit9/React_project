from fastapi import APIRouter, UploadFile, File
import shutil
from pathlib import Path

router = APIRouter(prefix="/resume", tags=["Resume"])

UPLOAD_DIR = Path("app/uploads")

@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"message": "File uploaded successfully", "file_path": str(file_path)}
