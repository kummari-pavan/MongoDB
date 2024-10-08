use ("PServer")
//sorting
db.Trainee.find({}).sort({name:1})
db.Trainee.find({}).sort({ age: -1 })

db.Trainee.find({}).sort({ Company: 1 })
db.Trainee.find({}).sort({ skills: -1 })
db.Trainee.find({}).sort({ joinedDate: 1 })
db.Trainee.find({}).sort({ name: 1, age: -1 })
db.Trainee.find({}).sort({ Backlogs: -1 })

//limiting
db.Trainee.find({}).limit(2)
db.Trainee.find({}).limit(5)
db.Trainee.find({ Company: "Wipro" }).limit(3)
db.Trainee.find({ age: { $gte: 20 } }).limit(4)
db.Trainee.find({ isEmployed: true }).limit(2)

//Sorting&Limiting
db.Trainee.find({}).sort({ age: 1 }).limit(5)
db.Trainee.find({}).sort({ name: -1 }).limit(3)
db.Trainee.find({}).sort({ joinedDate: -1 }).limit(2)
db.Trainee.find({}).sort({ Company: 1 }).limit(4)
db.Trainee.find({}).sort({ name: 1, age: -1 }).limit(2)