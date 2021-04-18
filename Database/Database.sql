
DROP TABLE IF EXISTS jsondata;


CREATE TABLE jsondata(
user_id SERIAL PRIMARY KEY,
data json NOT NULL

);
