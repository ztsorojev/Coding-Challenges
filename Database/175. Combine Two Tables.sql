/*
Table: Person
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.


Table: Address
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.
 

Write a SQL query for a report that provides the following information for each person in the Person table, 
regardless if there is an address for each of those people:

									FirstName, LastName, City, State
*/


SELECT 
	FirstName, LastName, City, State
FROM
	Person LEFT JOIN Address
ON 
	Person.PersonId = Address.PersonId
;



# NOTES:
# 	1. Using WHERE clause to filter the records will fail if there is no address information 
#	   for a person because it will not display the name information.
# 
# 	2. INNER JOIN only returns records that are in BOTH tables. 
# 	   That means for a person who does not have an address record in the Address Table 
# 	   will not be displayed in your solution using INNER JOIN. 
# 	   Remember in the question it mentioned "regardless if there is an address for each of those people".