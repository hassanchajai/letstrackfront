import React from 'react'
import OrderItem from '../OrderItem'

 const OrderTableau = ({styles,orders,loading}) => {
    //  console.log(orders)
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

     {!orders ? null :  orders.map(order=><OrderItem styles={styles} order={order}  key={order.order_id} loading={loading}/>) } 
    
    </div>
    )
}
export default OrderTableau