/*
The Employee table holds all employees. Every employee has an Id, and there is also a column for the department Id.

+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
+----+-------+--------+--------------+
The Department table holds all departments of the company.

+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
Write a SQL query to find employees who earn the top three salaries in each of the department. For the above tables, your SQL query should return the following rows.

+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Randy    | 85000  |
| IT         | Joe      | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+

*/

# Algo:
# 1. Find the top 3 salary in the company
# 2. Join the Employee table with the Department in order to retrieve the department information.
#	 The JOIN operation creates one table that will contain the 2. From there, we can select the columns we need.

SELECT dep.Name AS 'Department', emp.Name AS 'Employee', emp.Salary
FROM Employee emp INNER JOIN Department dep ON emp.DepartmentId = dep.Id
WHERE
    (SELECT COUNT(DISTINCT Salary) FROM Employee WHERE DepartmentId = dep.Id AND Salary > emp.Salary ) < 3
ORDER BY Department, Salary DESC
;