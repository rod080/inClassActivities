create database top_songsDB;
use top_songsDB;

CREATE TABLE Top5000 (
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(50) NOT NULL,
  song_name VARCHAR(100) NOT NULL,
  realease_year int(4) NOT NULL,
  aggregate_score float(7) NOT NULL,
  US_score float(7) NOT NULL,
  UK_score float(7) NOT NULL,
  Europe_score float(7) NOT NULL,
  Rest_of_World_score float(7) NOT NULL,
  PRIMARY KEY (id)
);

select * from Top5000;