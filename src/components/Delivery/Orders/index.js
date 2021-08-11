// import React from 'react'
import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import DeliveryContext from "../../../DB/Delivery/DeliveryContext";
import OrderTableau from "../../AdminCompany/Orders/OrderTableau";
import Header from "../Header";
import OrderTableauDelivery from "./OrderTableauDelivery";
const useStyles = makeStyles((t) => ({}));

function Orders({ match }) {
  const styles = useStyles();
  const [message, setMessage] = useState(null);

  const [orders, setOrders] = useState(null);
  const delivery = useContext(DeliveryContext);
  const onload = () => {
    const uid = match.params.uid;
    delivery
      .getOrders(uid)
      .then((res) => {
        setMessage(res.data.message)
       if(!!res.data.orders )setOrders(res.data.orders);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    onload();
  }, []);
  return (
    <div>
      <Header icon="fab fa-first-order">Orders</Header>
      <div className="py-4 px-3">
        <div class="alert bg-blue" role="alert">
          {message}
        </div>
        {orders ? (
          <React.Fragment>
            <div className="btns d-flex justify-content-between">
              <button className="btn bg-success p-3" onClick={onload}>
                <i className="fas fa-redo-alt"></i> Reload
              </button>
            </div>
            <h4 className="my-3">
              Showing <span className="text-blue">{orders.length}</span> of{" "}
              <span className="text-blue">{orders.length}</span> Order
            </h4>
            <div className="data mt-3">
              <OrderTableauDelivery orders={orders} loading={true} />
            </div>
          </React.Fragment>
        ) : null}

        {/* <nav className="mt-3">
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
          </nav> */}
      </div>
    </div>
  );
}
export default withRouter(Orders);
