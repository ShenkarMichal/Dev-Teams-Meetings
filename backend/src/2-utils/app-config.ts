class AppConfig {

    public host = "localhost"
    public user = "root"
    public password = ""
    public database = "devteammeetings"

    public port = 3001
    public frontEndUrl = "http://localhost:3000"
}



const appConfig =  new AppConfig()
export default appConfig