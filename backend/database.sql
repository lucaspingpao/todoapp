CREATE DATABASE todoapp;

CREATE TABLE todo(
    TaskID SERIAL PRIMARY KEY,
    TaskName VARCHAR(255),
    PriorityLevel VARCHAR(255),
    TaskDate DATE
);