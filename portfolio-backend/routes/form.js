
const express=require('express')
const router=express.Router();


const {createForm}=require('../controllers/createForm')
const {getForms}=require('../controllers/getForms')
const {updateForm}=require('../controllers/updateForm')
const {postAttendence,getAttendence}=require('../controllers/postAttendence')

router.post('/createForm',createForm);
router.get('/getForm',getForms)
router.put('/updateform/:id',updateForm);
router.post('/postattendence',postAttendence)
router.get('/getattendence',getAttendence)
module.exports=router