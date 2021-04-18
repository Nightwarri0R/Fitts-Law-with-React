
DROP TABLE IF EXISTS jsonscores;

CREATE TABLE jsonscores(
user_id SERIAL PRIMARY KEY, 
device_name json NOT NULL,
tottal_score json NOT NULL, 
upper_scores json NOT NULL,
lower_scores json NOT NULL

);
