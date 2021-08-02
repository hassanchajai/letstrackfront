export const getIcon=statu=>{ 
    let icon;
    switch (statu){
        case "Cancelled" :{
            icon="fas fa-close";
            break;
        }
        case "Completed" :{
            icon="fas fa-check";

            break;
        }
        case "Call Soon" :{
            icon="fas fa-home";
            break;
        }
        default:{
            icon="fas fa-spinner";
            break;
        }
    }
    return icon;
}