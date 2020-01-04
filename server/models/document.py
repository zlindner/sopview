from extensions import db
from sqlalchemy import Column, Integer, String

class Document(db.Model):
    id = Column(Integer, primary_key=True)
    filename = Column(String(256), nullable=False)
    email = Column(String(50), nullable=False)

    def __init__(self, filename, email):
        self.filename = filename
        self.email = email
       