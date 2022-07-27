INSERT INTO users(name, password_hash) VALUES ('rina', '$2b$10$vkSEjPUVM5NZYh7CRrdykO1FNgfGU07wGYjrdrX6iC5dSQDFvLhIO');

INSERT INTO questions(question, level, genre) VALUES ('OSI参照モデルとは何ですか？', 'easy', 'network');
INSERT INTO questions(question, level, genre) VALUES ('OSとは何ですか？', 'easy', 'linux');

INSERT INTO genres(name) VALUES ('easy');
INSERT INTO genres(name) VALUES ('normal');
INSERT INTO genres(name) VALUES ('hard');