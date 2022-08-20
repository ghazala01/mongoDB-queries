
// query 01 ==== Get a user by _id
db.employees.find({_id: ObjectId("62f552c6d6f9da55882f41ee")})

// query 02 ==== Get user by company's name
db.employees.find({"company.name": "TCS"})

// query 03 ==== Get all users who are online
db.employees.find({"status.online" : true})

////// query 03(a) ==== Get all users who are offline
db.employees.find({"status.online" : false})

//// query 04 ==== Get all users salary more than 30k
db.employees.find({salary: {$gt: 30000}})

//// query 05 ==== Update "Glenna Reichert" salary to 45000
db.employees.updateOne({"name": "Glenna Reichert"}, {$set: {salary: 45000}})

// query 06 ==== Get all users name & their status.message
db.employees.find({}, {_id:1, "username":1, "status.message":1})

// query 07 ==== Update "Clementina DuBuque" skills with "mysql"
db.employees.updateOne({"name": "Clementina DuBuque"}, {$set: {"skills": ["mysql"]}})

// query 08 ==== Remove "oracle db" skill from "Glenna Reichert"
db.employees.update({"name": "Glenna Reichert"}, {$pull: {"skills": "oracle db"} })

// query 09 ==== search for user's name contains "en" - $regex
db.employees.find({ username: { $regex: "en", $options: "i" } })

// query 10 ==== Get who's salary is less than or equal to 20k
db.employees.find({salary: {$lte: 20000}})

// query 11 ==== Get user's whose status is "busy"
db.employees.find({"status.message": "busy"})

// query 12 ==== Get user's whose status is "PTO" or "OOO"
db.employees.find({"status.message": {$in: ["PTO", "OOO"]}})

// query 13 ==== Get all interns with "react" and "angular" skills
db.employees.find({$and: [{"role": "Intern"}, { skills: {$in: ["angular", "react"]}} ]})

// query 14 ==== Get all devs & interns with "react" or "angular" skills
db.employees.find({ $and: [ {role: {$in: ["Intern",/developer/]}}, {skills: {$all: ["react", "angular"]}} ]})

// query 15 ==== Get all 'senior devs' from "PWC" & "TCS" company
db.employees.find({ $and: [{"role": "Senior software developer"}, {"company.name": {$in: ["PWS", "TCS"]}}] })

// query 16 ==== find first user who appears as "online". (First person while searching for online:true)
db.employees.findOne({"status.online": true})

// query 17 ==== find all users whose role is "Senior software developer" or "Lead software developer" and company should be "IBM" or "TCS"
db.employees.find({ $and: [ {$or: [{"role": "Senior software developer"},{"role": "Lead software developer"}]}, {$or: [{"company.name": "IBM"},{"company.name": "TCS"}]} ]})
