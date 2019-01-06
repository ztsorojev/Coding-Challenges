/*
Write a SQL query to find all duplicate emails in a table named Person.
+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+

For example, your query should return the following for the above table:
+---------+
| Email   |
+---------+
| a@b.com |
+---------+

Note: All emails are in lowercase.
*/


SELECT Email
FROM Person
GROUP BY Email
HAVING COUNT(*) > 1


###############################
# Note: you can't just use COUNT(Email) as a value and do something like 
# WHERE COUNT(Email) > 1 --> this will be wrong! (can't use where)

SELECT Email FROM
  ( SELECT Email, COUNT(Email) AS num 
    FROM Person
    GROUP BY Email
   ) AS stats
WHERE stats.num > 1;