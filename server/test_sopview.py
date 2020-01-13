import pytest
from app import create_app
from extensions import db

@pytest.fixture
def client():
    app = create_app(testing=True)
    return app

@pytest.fixture
def db(app):
    db.app = app

    with app.app_context():
        db.create_all()

    yield db

    db.session.close()
    #db.drop_all()

def test_test(client):
    with client.test_client() as c:
        pass
