INSERT INTO users(name, password_hash) VALUES ('rina', '$2b$10$vkSEjPUVM5NZYh7CRrdykO1FNgfGU07wGYjrdrX6iC5dSQDFvLhIO');

INSERT INTO questions(question, level, genre) VALUES ('OSI参照モデルとは何か？', 'easy', 'network');
INSERT INTO questions(question, level, genre) VALUES ('OSとは何か？', 'easy', 'linux');
INSERT INTO questions(question, level, genre) VALUES ('認証と認可の違いは何か？', 'easy', 'web');
INSERT INTO questions(question, level, genre) VALUES ('SQLとNoSQLの違いは何か？', 'normal', 'web');
INSERT INTO questions(question, level, genre) VALUES ('CORSはなぜ存在するのか？', 'normal', 'web');
INSERT INTO questions(question, level, genre) VALUES ('正規化とは何か？', 'normal', 'web');
INSERT INTO questions(question, level, genre) VALUES ('セキュリティ三大原則とは何か？', 'normal', 'web');
INSERT INTO questions(question, level, genre) VALUES ('負荷分散は何のために存在しているのか？', 'normal', 'network');
INSERT INTO questions(question, level, genre) VALUES ('ウォーターフォル型とは何か？', 'normal', 'network');
INSERT INTO questions(question, level, genre) VALUES ('アジャイルとは何か？', 'normal', 'network');
INSERT INTO questions(question, level, genre) VALUES ('マイクロサービスとは何か？', 'normal', 'network');
INSERT INTO questions(question, level, genre) VALUES ('TCP/UDPの違いは何か？', 'normal', 'network');
INSERT INTO questions(question, level, genre) VALUES ('DoS(DDoS)とは何か？また、その対策法は？', 'normal', 'security');
INSERT INTO questions(question, level, genre) VALUES ('XSSとは何か？また、その対策法は？', 'normal', 'security');
INSERT INTO questions(question, level, genre) VALUES ('CSRFとは何か？また、その対策法は？', 'normal', 'security');
INSERT INTO questions(question, level, genre) VALUES ('SQLインジェクションとは何か？また、その対策法は？', 'normal', 'security');
INSERT INTO questions(question, level, genre) VALUES ('ブラウザであるURLを叩いて、ページが表示されるまでの流れを教えてください', 'normal', 'network');
INSERT INTO questions(question, level, genre) VALUES ('CI/CDとは何か？', 'hard', 'network');
INSERT INTO questions(question, level, genre) VALUES ('DevOpsとは何か？', 'hard', 'network');
INSERT INTO questions(question, level, genre) VALUES ('クリーンアーキテクチャとは何か？', 'hard', 'network');
INSERT INTO questions(question, level, genre) VALUES ('インデックスが効かないケースはどんな時？', 'hard', 'database');

INSERT INTO genres(name) VALUES ('easy');
INSERT INTO genres(name) VALUES ('normal');
INSERT INTO genres(name) VALUES ('hard');
