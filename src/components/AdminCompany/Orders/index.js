// import React from 'react'
import { makeStyles } from "@material-ui/core";
import { useContext, useEffect, useRef, useState } from "react";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
// import OrderTableauDelivery from "../../Delivery/Orders/OrderTableauDelivery";
import Header from "../Header";
import OrderTableau from "./OrderTableau";
// import OrderItem from "./OrderItem";
// import OrderTableau from "./OrderTableau";
const useStyles = makeStyles((t) => ({
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

  },
  p: {
    padding: "10px",
    textAlign: "center",
    width: "100%",
    marginBottom: "0!important",
  
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

export default function Orders() {
  const styles = useStyles();
  const filter = useRef(null);
  const [orders,setOrders] = useState([]);
  const [deliveries,setDeliveries] = useState([]);
  const [status,setStatus] = useState([]);
  const [loading,setloading] = useState(false);
  // selected delivery
  const [selectedDelivery,setselectedDelivery] = useState([]);
  const [selectedStatus,setselectedStatus] = useState([]);

  const [selectedDate,setselectedDate] = useState("desc");
  const [phone,setPhone] = useState([]);
  // end of selected inputs
  const [count,setCount] = useState(null);
  const [pages,setPages] = useState(null);
  const [perPage,setPerPage] = useState(5);
  const handleOnClickFilter = () => {
    const a = (b) => (filter.current.style.height = b),c = filter.current.style.height === "100%";
    if (c) a("0px");
    else a("100%");
  };
  const getOrders=(status="All",delivery_id="All",phone="",date="desc")=>{
    setloading(false)
    admin.getAllOrders(status,delivery_id,phone,date).then(res=>{
      setOrders(res.data.orders)
      setCount(res.data.count) 
    setloading(true)

    });
  }
  const admin=useContext(AdminCompanyContext);

  useEffect(()=>{
    getOrders();
    admin.getAllUsers().then(res=>{setDeliveries(res.data.users)});
    admin.getAllStatus().then(res=>{setStatus(res.data.status)});
    setPages(Math.ceil(count/perPage));
    // console.log(status);
  },[])
  return (
    <div>
      <Header icon="fab fa-first-order">Orders</Header>
      <div className="py-4 px-3">
        <div className="btns d-flex  mb-3">
          <button className="btn bg-success p-3">
            <i className="fas fa-redo-alt"></i> Reload
          </button>
          <button
            className="btn bg-primary p-3 mx-2"
            onClick={handleOnClickFilter}
          >
            <i class="fas fa-filter"></i>
          </button>
        </div>
        <div className={styles.filtersection} ref={filter}>
          <div className={styles.filtersectionElement}>
            <p>Phone :</p>
            <input
              className="form-control"
              type="text"
              placeholder="+2126***********"
              onChange={
                e=>{
                  setPhone(e.target.value)
                  getOrders(selectedStatus,selectedDelivery,e.target.value,selectedDate)
                }
              }
            />
          </div>
          <div className={styles.filtersectionElement}>
            <p>Delivery :</p>
            <select className="form-select"   onChange={
                e=>{
                  setselectedDelivery(e.target.value)
                  getOrders(selectedStatus,e.target.value,phone,selectedDate)
                }
              }>
              <option value="All">All</option>
              <option value="0">Unaffected Delivery</option>
              {
            deliveries.map(delivery=>(<option key={delivery.id} value={delivery.id}>{delivery.name}</option>)) 
              }
            </select>
          </div>
          <div className={styles.filtersectionElement}>
            <p>Status :</p>
            <select className="form-select"
            onChange={
              e=>{
                setselectedStatus(e.target.value)
                getOrders(e.target.value,selectedDelivery,phone,selectedDate)
              }
            }
            >
              <option>All</option>
              {
                status.map(statu=>(<option key={statu.id} value={statu.id}>{statu.name}</option>))
              }
            </select>
          </div>
          <div className={styles.filtersectionElement}>
            <p>Date :</p>
            <select className="form-select"
            onChange={
              e=>{
                setselectedDate(e.target.value)
                getOrders(selectedStatus,selectedDelivery,phone,e.target.value)
              }
            }
            >
              <option value="desc" selected>Desc</option>
              <option value="asc">Asc</option>
            </select>
          </div>
        </div>
        <p className="my-3">
          Showing <span className="text-blue">{count}</span> of{" "}
          <span className="text-blue">{count}</span> Order
        </p>
        <div className="data mt-3">
          <OrderTableau count={count}  orders={orders}  loading={loading}/>
        </div>
        <nav className="mt-3">
          <ul className="pagination pagination-lg">

       
        
          </ul>
        </nav>
     </div> 
    </div>
  );
}
