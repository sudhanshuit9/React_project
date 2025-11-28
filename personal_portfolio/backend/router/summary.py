from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import model, schemas

router = APIRouter(prefix="/summary", tags=["Summary"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def add_summary(summary: schemas.SummaryCreate, db: Session = Depends(get_db)):
    new_sum = model.Summary(**summary.dict())
    db.add(new_sum)
    db.commit()
    return {"message": "Summary saved"}
