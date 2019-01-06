/*
Mary is a teacher in a middle school and she has a table seat storing students' names and their corresponding seat ids.

The column id is continuous increment.
Mary wants to change seats for the adjacent students.

Can you write a SQL query to output the result for Mary?
+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Abbot   |
|    2    | Doris   |
|    3    | Emerson |
|    4    | Green   |
|    5    | Jeames  |
+---------+---------+

For the sample input, the output is:
+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Doris   |
|    2    | Abbot   |
|    3    | Green   |
|    4    | Emerson |
|    5    | Jeames  |
+---------+---------+

Note:
If the number of students is odd, there is no need to change the last one's seat.
*/

# ALGO:
#	 - Instead of switching the student, simply switch all the ids and then order them.
#	 - We know that for even ids, they will become (id-1) and odd ids will become (id+1)
# Problem: this will only work with even number of seats. We need to consider the case where this number is odd
#		   and we don't move the last student
SELECT (CASE
            WHEN id % 2 != 0 THEN id + 1
            ELSE id - 1
        END) AS id,
        student
FROM seat
ORDER BY id ASC;


# FULL VERSION that works for both even and odd number of seats :)
SELECT (CASE
            WHEN (id % 2 != 0 AND id != counts) THEN id + 1
            WHEN (id % 2 != 0 AND id = counts) THEN id
            ELSE id - 1
        END) AS id,
        student
FROM seat,
	(SELECT COUNT(*) AS counts FROM seat) AS seat_counts
ORDER BY id ASC;