use ("Pserver")
//Comparison
db.Trainee.find({ age: { $eq: 22 } })
db.Trainee.find({ Company: { $ne: "Wipro" } })
db.Trainee.find({ age: { $gt: 30 } })
db.Trainee.find({ age: { $gte: 25 } })
db.Trainee.find({ age: { $lt: 30 } })
db.Trainee.find({ age: { $lte: 25 } })
db.Trainee.find({ skills: { $in: ["JavaScript", "MongoDB"] } })

//Logical Operators
db.Trainee.find({ $and: [{ Company: "Wipro" }, { age: { $gt: 25 } }] })
db.Trainee.find({ $or: [{ age: { $lt: 20 } }, { age: { $gt: 40 } }] })
db.Trainee.find({ $nor: [{ name: "Pavan" }, { age: { $lt: 30 } }] })
db.Trainee.find({ $nor: [{ name: "Pavan" }, { age: { $lt: 30 } }] })

//Evaluation Operators
db.Trainee.find({ name: { $regex: "^P", $options: "i" } }) //Finds documents where the name starts with "P", case insensitive.
db.Trainee.find({ $text: { $search: "Wipro" } })
db.Trainee.find({ $where: "this.age > 30" })
