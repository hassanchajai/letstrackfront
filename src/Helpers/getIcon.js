export const getIcon=statu=>{ 
    let icon;
    switch (statu){
        case "Cancelled" :{
            icon="fas fa-ban";
            break;
        }
        case "Completed" :{
            icon="fas fa-check";

            break;
        }
        case "En Delivery" :{
            icon="fas fa-truck";
            break;
        }
        default:{
            icon="fas fa-spinner";
            break;
        }
    }
    return icon;
}