import express, { NextFunction, Request, Response } from "express"
import meetingLogic from "../5-logics/meeting-logic"
import MeetingModel from "../4-models/meeting-model"

const router = express.Router()

//Get all dev-Teams
router.get("/dev-teams", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const devTeams = await meetingLogic.getAllDevTeams()
        response.json(devTeams)        
    } 
    catch (err: any) {
        next(err)        
    }

})

//Get meetings by dev-Team
router.get("/meetings/:devTeamID", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const devTeamID = +request.params.devTeamID
        const meetings = await meetingLogic.getMeetingByDevTeam(devTeamID)
        response.json(meetings)        
    } 
    catch (err: any) {
        next(err)        
    }
})

//Get all meetings
router.get("/meetings", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const meetings = await meetingLogic.getAllMeetings()
        response.json(meetings)        
    }
    catch (err: any) {
        next(err)        
    }
})

//Add meeting
router.post("/meetings", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const meeting = new MeetingModel(request.body)
        const addedmeetings = await meetingLogic.addMeeting(meeting)
        response.status(201).json(addedmeetings)        
    }
    catch (err: any) {
        next(err)        
    }
})

export default router