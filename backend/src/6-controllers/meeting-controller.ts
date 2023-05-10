import express, { NextFunction, Request, Response } from "express"
import meetingLogic from "../5-logics/meeting-logic"

const router = express.Router()

//Get all dev-Teams
router.get("/dev-teams", async (request: Request, response: Response, next: NextFunction)=>{
    const devTeams = await meetingLogic.getAllDevTeams()
    response.json(devTeams)
})

//Get meetings by dev-Team
router.get("/meetings/:devTeamID", async (request: Request, response: Response, next: NextFunction)=>{
    const devTeamID = +request.params.devTeamID
    const meetings = await meetingLogic.getMeetingByDevTeam(devTeamID)
    response.json(meetings)
})

export default router