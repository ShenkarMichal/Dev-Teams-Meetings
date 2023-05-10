import dal from "../2-utils/dal";
import DevTeamsModel from "../4-models/dev-teams-model";

async function getAllDevTeams(): Promise<DevTeamsModel[]> {
    const sql = "SELECT * FROM devteams"
    const devTeams = await dal.execute(sql)
    return devTeams    
}

export default {
    getAllDevTeams
}