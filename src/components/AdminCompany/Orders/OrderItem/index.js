import formatDistance from 'date-fns/formatDistance'
import React from 'react'
import { withRouter } from 'react-router'
import withloading from '../../../../HOC/WithLoading'

 const OrderItem=({styles,history,order})=> {
     const handleOnclickShow=id=>{
        history.push("/company/orders/"+id)
     }
   let {status}=order
   let color="success";
   if(status==="Processing")color="primary";
   if(status==="Cancelled")color="danger";
   if(status==="En Delivery")color="blue";
    return (
              <div className={styles.tr}>
                       <p className={styles.p}>{formatDistance(new Date(order.pickup),new Date(),{addSuffix:true})}</p>
                       <p className={styles.p}>{order.location}</p>                   
                       <p className={styles.p}><div className="p-2 w-25 m-auto rounded text-white bg-danger">{order.spams}</div></p>
                       <p className={styles.p}>{order.order_id}</p>
                       <p className={styles.p}><div className={"p-2  rounded text-white bg-"+color}>{order.status}</div></p>
                       <p className={styles.p}><div className="p-2 m-auto rounded text-black bg-white border border-dark w-25" onClick={()=>handleOnclickShow(order.order_id)} style={{cursor:"pointer"}}><i className="fas fa-chevron-down"></i></div></p>
                    </div>
    )
}
export default withloading(withRouter(OrderItem))