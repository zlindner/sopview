import aws
from flask import Blueprint, request

bp = Blueprint('documents', __name__, url_prefix='/documents')

@bp.route('/upload', methods=['POST'])
def upload():
    if not request.files:
        return '', 400

    email = 'zach.lindner@hotmail.com'

    for file in request.files.getlist('files[]'):
        aws.upload_file(file, email + '/' + file.filename)

    return '', 200