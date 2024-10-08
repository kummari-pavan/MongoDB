use ("PServer")

//Field Update Operators---------------------------------->
db.Trainee.updateMany(
    { name: "Pavan" },
    { $currentDate: { joinedDate: true } })
//Updates the joinedDate field to the current date for all documents where name is "Pavan."

db.Trainee.updateMany(
    { isEmployed: true },
    { $inc: { age: 1 } })
 //Increases the age by 1 for all employed employees.

 db.Trainee.updateMany(
    {},
    { $rename: { "Ratindg": "Rating" } }
 )
 //Renames the field Ratindg to Rating in all documents.

 db.Trainee.updateMany(
    { Company: "Wipro" },
    { $set: { Company: "TCS" } }
 )
 //Sets the Company to "TCS" for all documents where it was previously "Wipro."

 db.Trainee.updateMany(
    { Backlogs: { $exists: true } },
    { $unset: { Backlogs: "" } }
 )
 //Removes the Backlogs field from all documents where it exists.aftr clearing the backlogs we should update it right


//Array Update Operators---------------------------------->

db.Trainee.updateMany(
    { name: "Pavan" },
    { $addToSet: { skills: "Node.js" } }
 )
 //Adds "Node.js" to the skills array only if it is not already present for the user "Pavan."

 db.Trainee.updateMany(
    { name: "Pavan" },
    { $pop: { skills: -1 } }  // -1 removes the first element, 1 would remove the last element
 )
//Removes the first element from the skills array of the user "Pavan."

db.Trainee.updateMany(
    { name: "Pavan" },
    { $pull: { skills: "JavaScript" } }
 )
//Removes "JavaScript" from the skills array of the user "Pavan."

db.Trainee.updateMany(
    { name: "Pavan" },
    { $push: { skills: "Python" } }
 )
//Adds "Python" to the skills array of the user "Pavan."