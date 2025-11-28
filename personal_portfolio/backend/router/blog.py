from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import model, schemas

router = APIRouter(prefix="/blog", tags=["Blog"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_blog(blog: schemas.BlogCreate, db: Session = Depends(get_db)):
    new_blog = model.Blog(**blog.dict())
    db.add(new_blog)
    db.commit()
    return {"message": "Blog added"}
