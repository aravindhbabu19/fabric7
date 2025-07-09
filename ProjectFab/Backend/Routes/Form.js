const express=require('express')
const { getApplication } = require('../Controllers/Formcontroller')
const router=express.Router()

router.route('/Fabrication').post(getApplication)


module.exports=router