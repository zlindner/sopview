import pytest
from sopview.app import init_celery
from sopview.tasks.example import dummy_task

@pytest.fixture
def celery_app(celery_app, app):
    celery = init_celery(app)

    celery_app.conf = celery.conf
    celery_app.Task = celery_app.Task

    yield celery_app

def test_example(celery_app, celery_worker):
    res = dummy_task.delay()
    assert res.get() == 'OK'