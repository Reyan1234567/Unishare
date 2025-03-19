import {Router} from "express"
import accountRoutes from "./account.js"
import collegeRoutes from "./colleges.js"

const router=Router()
router.use(accountRoutes)
router.use(collegeRoutes)

export default router