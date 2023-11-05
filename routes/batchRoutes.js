const express = require('express')
const router = express.Router()
const Batch = require ('../models/batch')
const Recordedsession = require ('../models/recordedsession')


router.get('/', async (req,res)=>{
    //to get all batches
    const batches= await Batch.find()
    res.status(200).json(batches)
})

router.get('/:batchId/recorded-sessions', async (req,res)=>{
    const recordedSessions= await Recordedsession.find({batch:req.params.batchId})
    res.status(200).json(recordedSessions)
})


router.post('/', async (req,res)=>{
    //to get all batches
    const data = req.body
    const batch = new Batch(data);
    await batch.save()
    res.status(201).json(batch)
})

module.exports = router