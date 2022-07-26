DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS done_questions CASCADE;
DROP TABLE IF EXISTS genres CASCADE;

CREATE TABLE users(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE custom_questions(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  question VARCHAR(255) NOT NULL
);

CREATE TABLE done_questions(
	id SERIAL PRIMARY KEY NOT NULL,
	user_id INT NOT NULL REFERENCES users(id),
  question_id INT REFERENCES questions(id) NOT NULL,
  jap_answer VARCHAR(255),
  eng_answer VARCHAR(255),
  ai_answer VARCHAR(255),
  memo TEXT,
  favorite BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE custom_done_questions(
	id SERIAL PRIMARY KEY NOT NULL,
	user_id INT NOT NULL REFERENCES users(id),
  question_id INT REFERENCES custom_questions(id) NOT NULL,
  jap_answer VARCHAR(255),
  eng_answer VARCHAR(255),
  ai_answer VARCHAR(255),
  memo TEXT,
  favorite BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE questions(
	id SERIAL PRIMARY KEY NOT NULL,
	question VARCHAR(255) NOT NULL,
  description TEXT,
  level VARCHAR(20) NOT NULL,
  genre VARCHAR(20) NOT NULL
);

CREATE TABLE genres(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL
);

