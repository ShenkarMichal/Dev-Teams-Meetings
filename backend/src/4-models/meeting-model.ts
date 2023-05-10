class MeetingModel {
    public meetID: number
    public devTeamID: number
    public startDate: Date
    public endDate: Date
    public meetDescription: string
    public meetRoom: string

    public constructor(meeting: MeetingModel) {
        this.meetID = meeting.meetID
        this.devTeamID = meeting.devTeamID
        this.startDate = meeting.startDate
        this.endDate = meeting.endDate
        this.meetDescription = meeting.meetDescription
        this.meetRoom = meeting.meetRoom
    }

}

export default MeetingModel
