import { makeStyles } from '@material-ui/core';
import React from 'react'
// import OrderItem from '../OrderItem'
import OrderItemDelivery from '../OrderItemDelivery';
const useStyles = makeStyles ((t) => ({
    table: {
      width: "100%",
    },
    tr: {
      backgroundColor: "white",
      marginBottom: "7px!important",
      textAlign: "center",
      // borderRadius:"8px",
      // borderBottom:"1px solid black",
      display: "flex",
      // justifyContent:"space-around",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
    h4: {
      padding: "30px 0",
      // border:"1px solid black",
      width: "100%",
      textAlign: "center",
      [t.breakpoints.down(1000)]:{
        "&:nth-child(3)":{
          display:"none"
        },
        "&:nth-child(4)":{
  display:"none"
        },
        "&:nth-child(5)":{
          display:"none"
                },
          
      }
    },
    p: {
      padding: "10px",
      textAlign: "center",
      width: "100%",
      marginBottom: "0!important",
      [t.breakpoints.down(1000)]:{
        "&:nth-child(3)":{
          display:"none"
        },
        "&:nth-child(4)":{
  display:"none"
        },
        "&:nth-child(5)":{
          display:"none"
                },
          
      }
      // border:"1px solid black"
    },
    filtersection: {
      // border:"1px solid black",
      borderRadius: "3px",
      // padding:"10px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "white",
      height: "0px",
      overflow: "hidden",
      // transition:"1s",
      // transition:".5s ease",
  
      [t.breakpoints.down(790)]: {
        display: "block",
      },
    },
    filtersectionElement: {
      width: "100%",
      padding: "10px",
    },
  }));
  
 const OrderTableauDelivery = ({orders,loading}) => {
    //  console.log(orders)
  const styles = useStyles();

    return (
        <div className={styles.table}>
        <div className={styles.tr}>
            <h4 className={styles.h4}>Pickup Time <i className="fas fa-chevron-down text-danger"></i></h4>
            <h4 className={styles.h4}>Location</h4>
            <h4 className={styles.h4}>Spam</h4>
            <h4 className={styles.h4}>Order Id</h4>
            <h4 className={styles.h4}>Order Status</h4>
            <h4 className={styles.h4}>Action</h4>
        </div>

     {!orders ? null :  orders.map(order=><OrderItemDelivery styles={styles} order={order}  key={order.order_id} loading={loading}/>) } 
    
    </div>
    )
}
export default OrderTableauDelivery