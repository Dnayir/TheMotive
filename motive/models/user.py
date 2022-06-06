from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class Reviews(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    user = db.relationship('User', backref='user')
    review_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'))


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True,
                   unique=True, default=get_uuid)
    email = db.Column(db.String(500), unique=True)
    password = db.Column(db.String(255), nullable=False)
    reviews = db.relationship('Reviews', backref='reviewer')
#     friends = db.relationship('Friends', backref='friends')


# class Friends(db.Model):
#     __tablename__ = 'friends'
#     id = db.Column(db.Integer, primary_key=True)
#     friend_request = db.Column(db.Integer,
#                                db.ForeignKey(
#                                    'users.id', ondelete='CASCADE', onupdate='CASCADE'),
#                                nullable=False)
#     friend_accept = db.Column(db.Integer,
#                               db.ForeignKey(
#                                   'users.id', ondelete='CASCADE', onupdate='CASCADE'),
#                               nullable=False)
#     user = db.relationship('Users', backref='user')
