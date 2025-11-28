from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from  app import model, schemas

router = APIRouter(prefix="/contact", tags=["Contact"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    new_message = model.Contact(**contact.dict())
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return {"message": "Contact saved successfully", "data": new_message}
