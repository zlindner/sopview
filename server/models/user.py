from extensions import db
from sqlalchemy import Column, Integer, String

class User(db.Model):
    id = Column(Integer, primary_key=True)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String(60), nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.password = password