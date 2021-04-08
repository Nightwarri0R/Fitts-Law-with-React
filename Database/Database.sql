
CREATE 

DROP TABLE IF EXISTS scors;

CREATE TABLE scores(
user_id SERIAL PRIMARY KEY, 
device_name TEXT NOT NULL,
top_score INT NOT NULL, 
bottom_score INT NOT NULL

);
