class DevTeamsModel {
    public devTeamID: number
    public devTeamName: string

    public constructor(devTeam: DevTeamsModel) {
        this.devTeamID = devTeam.devTeamID
        this.devTeamName = devTeam.devTeamName
    }


}

export default DevTeamsModel