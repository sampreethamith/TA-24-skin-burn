CREATE DATABASE TEST;

USE TEST;

CREATE TABLE TBL1 (
	uid INT PRIMARY KEY,
    name VARCHAR (20) NOT NULL,
    count DECIMAL(13, 2) NOT NULL
    );
    
DESCRIBE TBL1;

INSERT INTO TBL1 VALUES (1, 'vivek', 10);
INSERT INTO TBL1 VALUES (2, 'sam', 20);
INSERT INTO TBL1 VALUES (3, 'liu', 30);
INSERT INTO TBL1 VALUES (4, 'pen', 40);
INSERT INTO TBL1 VALUES (5, 'yang', 50);

SELECT * FROM TBL1;
    