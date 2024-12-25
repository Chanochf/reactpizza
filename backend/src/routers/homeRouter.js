import { Router } from "express";
import { homeStart} from "../controlers/homepage/homePageControler";
const router = Router();

router.post("/home", homeStart);

export default router