import { BaseName } from "../config";
import axios from "axios";
class AdminCompanyClass{
     constructor(){
        this.basename=BaseName+"company";
    }
    // Authentification
    login=(email,password)=>axios.post(this.basename+"/login",{email,password})
    
    register=(email,password,firstname,lastname,logo,pack_id)=>axios.post(this.basename+"/register",{email,password,firstname,lastname,logo,pack_id})
    
    profil=()=>axios.get(this.basename+"/profil",{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    signout=()=> axios.post(this.basename+"/signout",{},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
        
    refresh=() =>axios.post(this.basename+"/refresh",{},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
        
    // end of authentification
    // dashboard
    orders= ()=>axios.get(this.basename+"/dashbaord/orders",{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    lastorders= ()=>axios.get(this.basename+"/dashbaord/lastorders",{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    chartdata= ()=>axios.get(this.basename+"/dashbaord/chartdata",{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    // end of dashboard
}
export default AdminCompanyClass