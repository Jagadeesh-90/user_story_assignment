import API from "./API"


export const getMyData=()=>{
    return API.get("/candidates")
}