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

    // part User
    getAllUsers=()=>axios.get(this.basename+"/users/",{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    getOneUser=id=>axios.get(this.basename+"/users/"+id,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    // InsertUser=(uid,name,phone,email,image)=>axios.post(this.basename+"/users/",{uid,name,phone,email,image},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    
    InsertUser=(data)=>axios({
        // Endpoint to send files
        url: this.basename+"/users/",
        method: "POST",
        headers: {
          // Add any auth token here
          authorization:`Bearer ${localStorage.getItem('token')}`,
        },
        
        data: data
      })
    

    UpdateUser=(id,name,phone,email)=>axios.put(this.basename+"/users/"+id,{name,phone,email},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    
    DeleteUser=(id)=>axios.delete(this.basename+"/users/"+id,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    refreshUid=(id,uid)=>axios.post(this.basename+`/users/${id}/refresh`,{uid},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    // end of User

    // orders
    getAllOrders=(status="All",delivery_id="All",phone="",date="asc")=>axios.get(this.basename+`/orders?status=${status}&delivery_id=${delivery_id}&${phone}&date=${date}&phone=${phone}`,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    getOneOrder=id=>axios.get(this.basename+"/orders/"+id,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    // UpdateOrderDate=(id,date)=>axios.put(this.basename+"/orders/"+id,{date},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})

    UpdateOrder=(id,delivery_id,date)=>axios.put(this.basename+"/orders/"+id,{delivery_id,date},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    
    UpdateOrderAddress=(id,shipping_address)=>axios.put(this.basename+"/orders/"+id+"/address",{shipping_address},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    
    UpdateOrderStatus=(id,status_id,message)=>axios.put(this.basename+"/orders/"+id+"/status",{status_id,message},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    
    // end of orders
    // status
    getAllStatus=()=>axios.get(this.basename+"/status/",{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    // end of status
    // spams
    spam=(type,order_id,customer_id,spam_id)=>axios.post(this.basename+"/spams/",{type,order_id,customer_id,spam_id},{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    // end of spams
}
export default AdminCompanyClass