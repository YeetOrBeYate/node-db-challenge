const db = require('../data/db.config.js')



// Resource Functions*****************************

const getResources = ()=>{
    return db
    .select('*')
    .from('Resource')
}
const getResourceById = (id)=>{
    return db
    .select("*")
    .from("Resource")
    .where("id", id)
    .first()
}
const addResource = (resource)=>{
    return db("Resource")
    .insert(resource, "id")
    .then(ids=>{
        return getResourceById(ids[0])
    })
}

// Project Functions***********************************

const getProjects = ()=>{
    return db
    .select("*")
    .from('Project')
}

const getProjectbyId = (id)=>{
    return db
    .select("*")
    .from("Project")
    .where("id", id)
    .first()
}

const addProject = (Project)=>{
    return db("Project")
    .insert(Project, "id")
    .then(ids=>{
        return getProjectbyId(ids[0])
    })
}

// Task Functions**********************************

const getTasks = ()=>{
    return db
    .select("*")
    .from('Task')
}

const getTaskbyId = (id)=>{
    return db
    .select("*")
    .from("Task")
    .where("id", id)
    .first()
}

const addTask = (task)=>{
    return db("Task")
    .insert(task, "id")
    .then(ids=>{
        return getTaskbyId(ids[0])
    })
}

// Test Functions******************************
const AddTransaction = (ProjectID, ResouceId)=>{
    return db ("Project_Resource")
    .insert([{Project_Id: ProjectID}, {Resource_Id:ResouceId}])
    
}



module.exports = {
    getResources,
    addResource,
    addProject,
    getProjects,
    getTasks,
    addTask
}