import axios from "axios"
import { BaseName } from "../config"

class UserClass{
    constructor(){
        this.base=BaseName+"";
    }
    search=number=>axios.post(`${this.base}search`,{number})
}
export default UserClass