import express from 'express'
import { getdata, getdatabyid, getdatabyquery } from '../controller/Controller.js'

const route=express.Router()

route.post("/createdata",getdata)
// http://localhost:5000/api/register/createdata

route.get("/getdatabyid/:id",getdatabyid)
// http://localhost:5000/api/register/getdatabyid/101

route.get("/getdatabyquery",getdatabyquery)
// http://localhost:5000/api/register/getdatabyquery


export default route