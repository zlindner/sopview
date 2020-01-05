from flask import Flask, render_template, send_from_directory
from extensions import celery, db
import auth, documents

def create_app(testing=False, cli=False):
    app = Flask(__name__, static_folder='../client/build/static', template_folder='../client/build')
    app.config.from_object('config')

    configure_extensions(app)
    register_blueprints(app)
    register_routes(app)

    return app

def configure_extensions(app):
    db.init_app(app)

    from models import user, document

    with app.app_context():
        db.create_all()
    
    # jwt

def register_blueprints(app):
    app.register_blueprint(auth.bp)
    app.register_blueprint(documents.bp)

def register_routes(app):
    @app.route('/<path:path>')
    def serve(path):
        return render_template('index.html')

    @app.route('/pdf.worker.js')
    def serve_pdfjs_worker():
        return send_from_directory(app.static_folder, 'pdf.worker.js')

def init_celery():
    app = create_app()

    celery.conf.broker_url = app.config['CELERY_BROKER_URL']
    #celery.conf.result_backend = app.config['CELERY_RESULT_BACKEND']
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