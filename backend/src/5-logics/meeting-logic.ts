import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import DevTeamsModel from "../4-models/dev-teams-model";
import MeetingModel from "../4-models/meeting-model";
import { ValidationErrorModel } from "../4-models/errors-model";

async function getAllDevTeams(): Promise<DevTeamsModel[]> {
    const sql = "SELECT * FROM devteams"
    const devTeams = await dal.execute(sql)
    return devTeams    
}

async function getAllMeetings(): Promise<MeetingModel[]> {
    const sql = `SELECT M.meetID, M.devTeamID, CONCAT(DATE_FORMAT(M.startDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.startDate, '%H:%i')) AS 'startDate',
                CONCAT(DATE_FORMAT(M.endDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.endDate, '%H:%i')) AS 'endDate', M.meetDescription, M.meetRoom, D.devTeamName
                FROM meetings AS M JOIN devteams AS D
                ON M.devTeamID = D.devTeamID;`
    const meetings = await dal.execute(sql)
    return meetings    
}

async function getMeetingByDevTeam(devTeamID:number): Promise<MeetingModel[]> {
    const sql = `SELECT M.meetID, M.devTeamID, CONCAT(DATE_FORMAT(M.startDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.startDate, '%H:%i')) AS 'startDate',
                CONCAT(DATE_FORMAT(M.endDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.endDate, '%H:%i')) AS 'endDate', M.meetDescription, M.meetRoom, D.devTeamName
                FROM meetings AS M JOIN devteams AS D
                ON M.devTeamID = D.devTeamID
                WHERE M.devTeamID = ?`
    const meetings = await dal.execute(sql, [devTeamID])
    return meetings    
}

async function addMeeting(meeting:MeetingModel): Promise<MeetingModel> {
    if(isTimeBusy(meeting.startDate, meeting.devTeamID)) throw new ValidationErrorModel('The time is busy')
    const sql = `INSERT INTO meetings VALUES(DEFAULT, ?,?,?,?,?)`
    const info: OkPacket = await dal.execute(sql, [meeting.devTeamID, meeting.startDate, meeting.endDate,
                                                    meeting.meetDescription, meeting.meetRoom])
    meeting.meetID = info.insertId
    return meeting    
}

async function isTimeBusy(startDate:string, devTeamID: number):Promise<Boolean> {
    const sql = `SELECT COUNT(*) AS isTime FROM meetings
                WHERE startDate = ? AND devTeamID = ?`
    const info = await dal.execute(sql, [startDate, devTeamID])
    const count = info[0].isTime
    return count > 0     
}

export default {
    getAllDevTeams,
    getAllMeetings,
    getMeetingByDevTeam,
    addMeeting
}