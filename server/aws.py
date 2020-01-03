import os
import boto3
from botocore.exceptions import ClientError

bucket = os.getenv('AWS_BUCKET')

@celery.task
def upload_file(file, filename):
    s3 = boto3.client('s3')

    try:
        res = s3.upload_fileobj(file, bucket, filename)
    except ClientError as err:
        print(err)
        return False

    return True

'''textract = boto3.client('textract')

textract.start_document_text_detection(
    DocumentLocation = {
        'S3Object': {
            'Bucket': 'bucket_name',
            'Name': 'filename'
        }
    }
)'''