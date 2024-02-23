#!/usr/bin/env python3

from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String

Base = declarative_base()


class State(Base):
    __tablename__ = 'states'

    id = Column(Integer, primary_key=True, NOT_)
    name = Column(String(128))
