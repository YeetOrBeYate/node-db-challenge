const express = require('express');
const qs = require("./ProjectModel.js")
const router = express.Router();

function ConvertToTruthy(item){

    if(item.Completed === 0){
        item.Completed = "False"

    }else{
        item.Completed = "True"

    }
}


router.get('/resources', (req,res)=>{
    qs.getResources()
    .then((re)=>{
        res.status(200).json({re})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.post('/resources', (req,res)=>{
    const name = req.body.Name;
    const desc = req.body.Description;
    const projectID = req.body.Project;
    console.log(name, desc, projectID)
    
    qs.addResource(name, desc, projectID)
    .then((yeet)=>{
        res.status(200).json({yeet})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err})
    })


})

router.post('/projects', (req,res)=>{
    const body = req.body;

    qs.addProject(body)
    .then(pro=>{
        ConvertToTruthy(pro);
        res.status(200).json({pro})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })


})

router.get("/projects", (req,res)=>{
    qs.getProjects()
    .then(projs=>{
        projs = projs.map(obj=>{
            if(obj.Completed ===0){
                obj.Completed = "False"
                return obj
            }else{
                obj.Completed = "True"
                return obj
            }
        })
        res.status(200).json({projs})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.get('/task', (req,res)=>{
    qs.getTasks()
    .then(tasks=>{
        tasks = tasks.map(obj=>{
            if(obj.Completed ===0){
                obj.Completed = "False"
                return obj
            }else{
                obj.Completed = "True"
                return obj
            }
        })
        res.status(200).json({tasks})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.post("/task", (req,res)=>{
    const body = req.body;
    qs.addTask(body)
    .then(task=>{
        ConvertToTruthy(task)
        res.status(200).json({task})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})


module.exports = router;