import {create,display,todelete,displayall} from '../Controllers/ocrController.js';
import express from "express";
import formidable from 'express-formidable';
const router =express.Router();

router.post('/create-ocr' ,formidable(),create);
router.get('/display-ocr',display);
router.delete('/delete-ocr/:identificationNumber',todelete);
router.get('/getall',displayall);
// router.post('/update-ocr',update);
// router.get('/display-ocr',displlay);
// router.post('/delete-ocr',create);
export default router;