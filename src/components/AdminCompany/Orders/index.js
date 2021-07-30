// import React from 'react'
import { makeStyles } from "@material-ui/core";
import { useContext, useEffect, useRef, useState } from "react";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import Header from "../Header";
import OrderItem from "./OrderItem";
import OrderTableau from "./OrderTableau";
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
  const [count,setCount] = useState(null);
  const [perPage,setPerPage] = useState(5);
  const handleOnClickFilter = () => {
    const a = (b) => (filter.current.style.height = b),
      c = filter.current.style.height === "100%";
    if (c) a("0px");
    else a("100%");
  };

  const admin=useContext(AdminCompanyContext);
  useEffect(()=>{
    admin.getAllOrders().then(res=>{
      setOrders(res.data.orders)
      setCount(res.data.count)
    });
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
            />
          </div>
          <div className={styles.filtersectionElement}>
            <p>Delivery :</p>
            <select className="form-select">
              <option>All</option>
              <option>Hassan Essajai</option>
              <option>Mohammed boumlik</option>
            </select>
          </div>
          <div className={styles.filtersectionElement}>
            <p>Status :</p>
            <select className="form-select">
              <option>All</option>
              <option>Process</option>
              <option>En delivery</option>
            </select>
          </div>
          <div className={styles.filtersectionElement}>
            <p>Date :</p>
            <select className="form-select">
              <option>Desc</option>
              <option>Asc</option>
            </select>
          </div>
        </div>
        <p className="my-3">
          Showing <span className="text-blue">25</span> of{" "}
          <span className="text-blue">25</span> Order
        </p>
        <div className="data mt-3">
          <OrderTableau styles={styles}  orders={orders}/>
        </div>
        <nav className="mt-3">
          <ul className="pagination pagination-lg">
            <li className="page-item active" aria-current="page">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
