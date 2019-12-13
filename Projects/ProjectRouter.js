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
    const body = req.body;
    
    qs.addResource(body)
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


module.exports = router;