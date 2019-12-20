from flask import Flask
from celery_app import init_celery

import boto3
import config
import os

# start redis: $redis-server
# start celery: $celery -A sopview.celery worker (starts app?)

app = Flask(__name__)
app.config.update(
    CELERY_BROKER_URL = os.getenv('CELERY_BROKER_URL'),
    CELERY_RESULT_BACKEND = os.getenv('CELERY_RESULT_BACKEND')
)

celery = init_celery(app)

#s3 = boto3.resource('s3', aws_access_key_id=os.getenv('AWS_KEY'), aws_secret_access_key=os.getenv('AWS_SECRET'))
'''textract = boto3.client('textract')

textract.start_document_text_detection(
    DocumentLocation = {
        'S3Object': {
            'Bucket': 'bucket_name',
            'Name': 'filename'
        }
    }
)'''

@celery.task()
def add(a, b):
    return a + b

if __name__ == '__main__': 
    app.run()
