const db = require('../data/db.config.js')





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

const getProjectbyId = (id)=>{
    return db
    .select("*")
    .from("Project")
    .where("id", id)
    .first()
}

const AddTransaction = (ProjectID, ResouceId)=>{
    return db ("Project_Resource")
    .insert([{Project_Id: ProjectID}, {Resource_Id:ResouceId}])
    
}

const addResource = (resource)=>{
    return db("Resource")
    .insert(resource, "id")
    .then(ids=>{
        return getResourceById(ids[0])
    })
}

const addProject = (Project)=>{
    return db("Project")
    .insert(Project, "id")
    .then(ids=>{
        return getProjectbyId(ids[0])
    })
}

module.exports = {
    getResources,
    addResource,
    addProject
}