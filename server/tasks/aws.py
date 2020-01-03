import os
import boto3
from botocore.exceptions import ClientError
from extensions import celery

bucket = os.getenv('AWS_BUCKET')

@celery.task(name='tasks.test')
def test():
    return 'OK'

@celery.task(name='tasks.presign_post')
def presign_post(file, filename):
    s3 = boto3.client('s3')

    try:
        print('upload')
        #res = s3.upload_fileobj(file, bucket, filename)
    except ClientError as err:
        print(err)
        return False

    return True