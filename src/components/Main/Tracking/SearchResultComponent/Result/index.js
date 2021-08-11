import React from 'react'
import { OrdersJournal } from '../../../../OrdersJournal'

export const Result = ({journal,styles}) => {
    // console.log(journal)
    const filter=statu=>journal.filter(item=>item.statu===statu).length
    const showAll=()=>{
        const li=document.querySelectorAll(".journalItem");
        li.forEach(item=>{
            item.classList.add("active");
        })
    }
    const hideAll=()=>{
        const li=document.querySelectorAll(".journalItem");
        li.forEach(item=>{
        // console.log(item.classList)

            item.classList.remove("active");
        })
    }
    const onClickStatu=statu=>{
        hideAll();
        const li=document.querySelectorAll(".journalItem."+statu.replace(" ","_"));
        li.forEach(item=>{
            item.classList.add("active");
        })
    }
    return (
         <div className="container-fluid">
        {/* order status */}
  
        <ul className={styles.listDetails}>
          <li className={styles.listDetailsItem} onClick={showAll}>
            {/* status title */}
            <span className={styles.listDetailsItemTitle}>LTS</span>
            {/* status count */}
            <span className={styles.listDetailsItemCount}>({journal.length})</span>
          </li>
          {/* End of item */} 
          <li className={styles.listDetailsItem}  onClick={()=>onClickStatu("En_Delivery")}>
            {/* status title */}
            <span className={styles.listDetailsItemTitle + " text-blue"}>
              <i className="fas fa-truck"></i>
            </span>
            {/* status count */}
            <span className={styles.listDetailsItemCount}>({filter("En Delivery")})</span>
          </li>
          {/* End of item */}
          <li className={styles.listDetailsItem} onClick={()=>onClickStatu("Processing")}>
            {/* status title */}
            <span className={styles.listDetailsItemTitle + " text-primary"}>
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            {/* status count */}
            <span className={styles.listDetailsItemCount}>({filter("Processing")})</span>
          </li>
          {/* End of item */}
          <li className={styles.listDetailsItem} onClick={()=>onClickStatu("Completed")}>
            {/* status title */}
            <span className={styles.listDetailsItemTitle + " text-success"}>
              <i className="fas fa-check"></i>
            </span>
            {/* status count */}
            <span className={styles.listDetailsItemCount} >({filter("Completed")})</span>
          </li>
          {/* End of item */}
          <li className={styles.listDetailsItem} onClick={()=>onClickStatu("Cancelled")}>
            {/* status title */}
            <span className={styles.listDetailsItemTitle + " text-danger"}>
              <i className="far fa-comment-alt"></i>
            </span>
            {/* status count */}
            <span className={styles.listDetailsItemCount}>({filter("Cancelled")})</span>
          </li>
          {/* End of item */}
        </ul>
        {/* end of order status */}
        <OrdersJournal
          apply={false}
          journals={journal}
        ></OrdersJournal>
        {/* section for details */}
       
  
        {/*end of section for details */}
      </div>
   
    )
}
