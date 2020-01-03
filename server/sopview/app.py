from flask import Flask
from extensions import db, migrate, celery
from sopview import auth, documents

def create_app(testing=False, cli=False):
    app = Flask('sopview', static_folder='../client/build/static', template_folder='../client/build')
    app.config.from_object('sopview.config')

    if testing is True:
        app.config['TESTING'] = True

    configure_extensions(app, cli)
    register_blueprints(app)

    return app

def configure_extensions(app, cli):
    db.init_app(app)
    # jwt

    if cli is True:
        migrate.init_app(app, db)

def register_blueprints(app):
    app.register_blueprint(auth.bp)
    app.register_blueprint(documents.bp)

def init_celery(app=None):
    app = app or create_app()

    celery.config.broker_url = app.config['CELERY_BROKER_URL']
    celery.conf.result_backend = app.config['CELERY_RESULT_BACKEND']
    celery.conf.update(app.config)

    # wrap task execution in an app context    
    class ContextTask(celery.Task):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return self.run(*args, **kwargs)
    
    celery.Task = ContextTask
    return celery

# start redis: $redis-server
# start celery: $celery -A sopview.celery worker (starts app?)

'''
@app.route('/<path:path>')
def serve(path):
    return render_template('index.html')

app.run(debug=True)
'''