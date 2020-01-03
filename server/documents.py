import os
import boto3
from flask import Blueprint, request, jsonify
from botocore.client import Config
from botocore.exceptions import ClientError

bp = Blueprint('documents', __name__, url_prefix='/documents')

@bp.route('/generate_signatures', methods=['POST'])
def upload():
    filenames = request.get_json()

    if not filenames:
        return 'No files were selected', 400

    s3 = boto3.client('s3', region_name='us-east-2', config=Config(signature_version='s3v4'))
    bucket = os.getenv('AWS_BUCKET')
    email = 'zach.lindner@hotmail.com'
    signatures = []

    try:
        for filename in filenames:
            if filename[-4:] != '.pdf':
                return 'Only pdfs are supported', 400

            signatures.append(s3.generate_presigned_post(bucket, email + '/' + filename, ))
    except ClientError as err:
        return err, 400

    return jsonify(signatures), 200