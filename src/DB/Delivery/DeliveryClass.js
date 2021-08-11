import axios from "axios";
import { BaseName } from "../config";

class DeliveryClass{

    constructor(){
        this.basename=BaseName+"company/delivery/";
    }
    getOrders=(uid)=>axios.get(this.basename+"orders",{headers:{"uid":uid}})

    getOneOrder=(uid,id)=>axios.get(this.basename+"orders/"+id,{headers:{"uid":uid}})

    status=()=>axios.get(this.basename+"status")

    updateStatus=(id,message,status_id)=>axios.put(this.basename+"orders/"+id+"/update",{message,status_id})
}
export default DeliveryClass