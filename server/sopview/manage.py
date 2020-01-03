import click
from flask.cli import FlaskGroup
from sopview.app import create_app

def create_sopview(info):
    return create_app(cli=True)

@click.group(cls=FlaskGroup, create_app=create_sopview)
def cli():
    '''Main entry point'''

@cli.command('init')
def init():
    '''Init application, create database tables'''

    from sopview.extensions import db

    click.echo('create database')
    db.create_all()
    click.echo('done')

    # create admin user?

if __name__ == '__main__':
    cli()