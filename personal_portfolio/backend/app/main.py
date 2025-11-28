from fastapi import FastAPI
from router import blog, contact, resume, summary

from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(contact.router)
app.include_router(resume.router)
app.include_router(blog.router)
app.include_router(summary.router)
