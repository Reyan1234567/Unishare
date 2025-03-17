import {Router} from "express"
import accountRoute from "./account.js"

const router=Router()
router.use(accountRoute)


export default router