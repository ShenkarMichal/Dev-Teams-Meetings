class MeetingModel {
    public meetID: number
    public devTeamID: number
    public startDate: Date
    public endDate: Date
    public meetDescription: string
    public meetRoom: string

    public constructor(meet: MeetingModel) {
        this.meetID = meet.meetID
        this.devTeamID = meet.devTeamID
        this.startDate = meet.startDate
        this.endDate = meet.endDate
        this.meetDescription = meet.meetDescription
        this.meetRoom = meet.meetRoom
    }

}

export default MeetingModel
