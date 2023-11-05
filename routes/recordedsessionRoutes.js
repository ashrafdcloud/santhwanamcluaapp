const express = require('express')
const router = express.Router()
const Recordedsession = require ('../models/recordedsession')

router.get('/', async (req,res)=>{
    //to get all batches
    const recordedsession= await Recordedsession.find()
    res.status(200).json(recordedsession)
})

router.post('/', async (req,res)=>{
    //to post a new batch
    const data = req.body
    const recordedsession = new Recordedsession(data);
    await recordedsession.save()
    res.status(201).json(recordedsession)
})

module.exports = router