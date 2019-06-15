### Schema

CREATE TABLE POI
(
	ENTRY_ID INT NOT NULL AUTO_INCREMENT,
	USERNAME VARCHAR(30) NOT NULL,
	PASSWORD VARCHAR(30)NOT NULL,
	CITY VARCHAR(30)NOT NULL,
	COUNTRY VARCHAR(30)NOT NULL,
	PRIMARY KEY (ENTRY_ID)
);

CREATE TABLE ATTR
(
	ATTR_ID INT NOT NULL AUTO_INCREMENT,
	ENTRY_ID INT NOT NULL,
	NAME VARCHAR(30)NOT NULL,
	PRIMARY KEY (ATTR_ID)
);
