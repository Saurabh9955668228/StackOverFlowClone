import express from "express"
import { postanswer,deleteanswer } from "../controllers/Answer.js";
import auth from "../middlewares/auth.js";
const router=express.Router();
router.patch("/post/:id",auth,postanswer);
router.patch("/delete/:id",auth,deleteanswer);

export default router;