from pydantic import BaseModel

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

class Contact(ContactCreate):
    id: int
    class Config:
        orm_mode = True

class BlogCreate(BaseModel):
    title: str
    content: str

class SummaryCreate(BaseModel):
    description: str
