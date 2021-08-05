import express from 'express';
import {getIngridients} from '../controllers/ingridients.js';
const router=express.Router();

router.get("/",getIngridients);

export default router;