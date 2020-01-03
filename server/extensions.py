from celery import Celery
from flask_sqlalchemy import SQLAlchemy

celery = Celery()
db = SQLAlchemy()
