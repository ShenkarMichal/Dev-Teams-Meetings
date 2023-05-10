import dal from "../2-utils/dal";
import DevTeamsModel from "../4-models/dev-teams-model";
import MeetingModel from "../4-models/meeting-model";

async function getAllDevTeams(): Promise<DevTeamsModel[]> {
    const sql = "SELECT * FROM devteams"
    const devTeams = await dal.execute(sql)
    return devTeams    
}

async function getMeetingByDevTeam(devTeamID:number): Promise<MeetingModel[]> {
    const sql = `SELECT M.*, D.devTeamName 
                FROM meetings AS M JOIN devteams AS D
                ON M.devTeamID = D.devTeamID
                WHERE M.devTeamID = ?`
    const meetings = await dal.execute(sql, [devTeamID])
    return meetings    
}

export default {
    getAllDevTeams,
    getMeetingByDevTeam
}