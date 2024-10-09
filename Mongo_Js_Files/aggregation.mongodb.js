use ("Pserver")

db.Trainee.aggregate([
    // Stage 1: Match employees working in "Wipro"
    { $match: { Company: "Wipro" } },
    
    // Stage 2: Group by company and count employees
    { $group: { _id: "$Company", totalEmployees: { $sum: 1 } } },
    
    // Stage 3: Sort the results by the total number of employees in descending order
    { $sort: { totalEmployees: -1 } }
 ])
 
 db.Trainee.aggregate([
    // Stage 1: Match employees who have "JavaScript" as a skill
    { $match: { skills: "JavaScript" } },
    
    // Stage 2: Project only the name and skills fields
    { $project: { name: 1, skills: 1, _id: 0 } },
    
    // Stage 3: Sort by name in ascending order
    { $sort: { name: 1 } }
 ])

 
 db.Trainee.aggregate([
    // Stage 1: Match employees who are employed
    { $match: { isEmployed: true } },
    
    // Stage 2: Group by each skill in the array and count how many people have it
    { $unwind: "$skills" },
    { $group: { _id: "$skills", count: { $sum: 1 } } },
    
    // Stage 3: Add a custom field (e.g., skillLevel based on count)
    { $addFields: { skillLevel: { $cond: { if: { $gte: ["$count", 2] }, then: "Expert", else: "Beginner" } } } },
    
    // Stage 4: Sort the results by the count of people who have the skill
    { $sort: { count: -1 } }
 ])
 