import express, { NextFunction, Request, Response } from "express"
import meetingLogic from "../5-logics/meeting-logic"

const router = express.Router()

//Get all dev-Teams
router.get("/dev-teams", async (request: Request, response: Response, next: NextFunction)=>{
    const devTeams = await meetingLogic.getAllDevTeams()
    response.json(devTeams)
})

export default router