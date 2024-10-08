use ("PServer")

//Delete Single Doc

db.Trainee.deleteOne({name:"Jhon"})

//Delete Multiple Docs

db.Trainee.deleteMany({name:"Jhon"}) //i have 3 docs ,name associate to Jhon so deleting all

db.Trainee.deleteMany({Company:"Wipro Techno"})