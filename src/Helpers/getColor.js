
// import colors from './Colors'
export const getColor=statu=>{ 
    let color;
    switch (statu){
        case "Cancelled" :{
            color="danger";
            break;
        }
        case "Completed" :{
            color="success";
            break;
        }
        case "En Delivery" :{
            color="blue";
            break;
        }
        default:{
            color="secondary";
            break;
        }
    }
    return color;
}