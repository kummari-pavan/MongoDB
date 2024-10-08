use ("PServer")

//Updating Single FIle 
db.Trainee.updateOne({name:"Pavan"},{$set :{age:30}})
db.Trainee.find({name:"Pavan"})

db.Trainee.updateOne(
    {name:"vijaya"},
    {$set:{age:20}})

//Multiple Files

//Update the Company Name for All Employees

db.Trainee.updateMany(
    {Company:"Wipro"},
    {$set:{Company:"Wipro Tech"}}
)
db.Trainee.find({Company:"Wipro Tech"})

//Increase Age by 1 for All Employees

db.Trainee.updateMany(
   { isEmployed: true },    
   { $inc: { age: 1 } }   )