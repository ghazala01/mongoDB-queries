// query 01 ==== Get total money spent by TCS company as salary
db.employees.aggregate([
    { $match: {"company.name": "TCS"} },
    { $group: {_id: {companyName: "$company.name"}, "Total Money": {$sum: "$salary"} }}
])

// query 02 ==== Get total money spent by TCS & CTS as salary
db.employees.aggregate([
    { $match: {"company.name": {$in: ["TCS","CTS"]} }},
    { $group: {_id: {companyName: "$company.name"}, "Total Salary": {$sum: "$salary"}} }
])

// query 03 ==== Get total money spent by individual company as salary
db.employees.aggregate([
    { $group: {_id: {companyName: "$company.name"}, "Total Salary": {$sum: "$salary"}} }
])

// query 04 ==== Get total money spent by companies for software developers
db.employees.aggregate([
    { $match: {"role": {$in : [/developer/] }}},
    { $group: {_id: {role: "$role"}, "Total Salary": {$sum: "$salary"}} }
])

// query 05 ==== average salary for "Lead software developer" in industry
db.employees.aggregate([
    { $match: {"role": "Lead software developer" }},
    { $group: {_id: {role: "$role"}, "Average Salary": {$avg: "$salary"}} }
])

// query 06 ==== minimum salary for "Lead software developer" in industry
db.employees.aggregate([
    { $match: {"role": "Lead software developer" }},
    { $group: {_id: {role: "$role"}, "Minimum Salary": {$min: "$salary"}} }
])

// query 07 ==== maximum salary for "Lead software developer" in industry
db.employees.aggregate([
    { $match: {"role": "Lead software developer" }},
    { $group: {_id: {role: "$role"}, "Maximum Salary": {$max: "$salary"}} }
])

// query 08 ==== list all the companies which have "Lead software developer" 
db.employees.aggregate([
    { $match: {"role": "Lead software developer" }},
    { $group: {_id: {role: "$role" , Company: "$company.name" }}}
])

// query 09 ==== list all the companies which have "Senior software developer" 
db.employees.aggregate([
    { $match: {"role": "Senior software developer" }},
    { $group: {_id: {role: "$role" , Company: "$company.name" }}}
])

// query 10 ==== get average salary based on each role
db.employees.aggregate([
    { $match: {"role": {$in : [/developer/, "Intern"]} }},
    { $group: {_id: {role: "$role"}, "Average Salary": {$avg: "$salary"}} }
])

// query 11 ==== get all highest paid in each company
db.employees.aggregate([
    { $group: {_id: {Company: "$company.name"}, "Highest Salary": {$max: "$salary"}} }
])

// query 12 ==== get all the roles in companies
db.employees.aggregate([
    { $group: {_id: {role: "$role"} }}
])

// query 13 ==== get all the roles in companies and show in order
db.employees.aggregate([
    { $group: {_id: {role: "$role"} }},
    { $sort: {role: 1}}
])

// query 14 ==== split out individual skills with name
db.fakeusers.aggregate([
    { $project: {skills: 1, name: 1 }},
    { $unwind: "$skills" }
])

// query 15 ==== how many people are online in each company
db.employees.aggregate([
    { $match: {"status.online": true} },
    { $count: "count"}
])

// query 16 ==== count of companies in the collection
db.employees.aggregate([
    { $group: {_id: {Company: "$company.name"}} },
    { $count: "count"}
])




