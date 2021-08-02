export const getBadge=statu=>{ 
    let badge;
    switch (statu){
        case "Cancelled" :{
            badge="fas fa-close";
            break;
        }
        case "Completed" :{
            badge="fas fa-check";
            break;
        }
        case "Call Soon" :{
            badge="fas fa-home";
            break;
        }
        default:{
            badge="fas fa-spinner";
            break;
        }
    }
    return badge;
}