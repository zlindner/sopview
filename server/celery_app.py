from celery import Celery

def init_celery(app):
    celery = Celery(
        app.import_name, 
        backend=app.config['CELERY_RESULT_BACKEND'], 
        broker=app.config['CELERY_BROKER_URL']
    )
    celery.conf.update(app.config)

    # wrap task execution in an app context    
    class ContextTask(celery.Task):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return self.run(*args, **kwargs)
    
    celery.Task = ContextTask
    return celery