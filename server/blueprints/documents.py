import os
import boto3
from flask import Blueprint, request, jsonify
from botocore.client import Config
from botocore.exceptions import ClientError
from extensions import db
from models.document import Document

bp = Blueprint('documents', __name__, url_prefix='/documents')

@bp.route('/load_documents', methods=['POST'])
def load_documents():
    email = request.get_json()['email']

    if not email:
        return 'Unauthorized', 403

    s3 = boto3.client('s3', region_name='us-east-2', config=Config(signature_version='s3v4'))
    bucket = os.getenv('AWS_BUCKET')

    documents = []
    rows = Document.query.filter_by(email=email)

    for row in rows.all():
        url = s3.generate_presigned_url('get_object', {'Bucket': bucket, 'Key': email + '/' + row.filename})
        documents.append({'filename': row.filename, 'url': url})
        
    return jsonify(documents), 200

@bp.route('/generate_signatures', methods=['POST'])
def generate_signatures():
    # TODO send email

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
                continue

            # TODO check if exists here?

            signatures.append(s3.generate_presigned_post(bucket, email + '/' + filename))
    except ClientError as err:
        return err, 400

    return jsonify(signatures), 200

# TODO change to add documents, allow adding multiple at a time rather than a request for each file
@bp.route('/add_document', methods=['POST'])
def add_document():
    email = request.get_json()['email']
    filename = request.get_json()['filename']

    if not email:
        return 'Unauthorized', 403

    if not filename:
        return 'Error adding document', 400

    exists = Document.query.filter_by(filename=filename, email=email).first() is not None

    if exists:
        return 'Document already exists', 400

    document = Document(filename, email)
    db.session.add(document)
    db.session.commit()

    return '', 200

@bp.route('/delete_document', methods=['POST'])
def delete_document():
    email = request.get_json()['email']
    filename = request.get_json()['filename']

    if not email:
        return 'Unauthorized', 403

    if not filename:
        return 'Error deleting document', 400

    s3 = boto3.client('s3', region_name='us-east-2', config=Config(signature_version='s3v4'))
    bucket = os.getenv('AWS_BUCKET')

    try:
        s3.delete_object(Bucket=bucket, Key=email + '/' + filename)
    except ClientError as err:
        return err, 400

    Document.query.filter_by(filename=filename, email=email).delete()
    db.session.commit()

    return '', 200
