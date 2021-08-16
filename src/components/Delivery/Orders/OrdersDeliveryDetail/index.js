/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@material-ui/core";
import format from "date-fns/format";
import React, { useContext, useEffect, useState } from "react";
import DeliveryContext from "../../../../DB/Delivery/DeliveryContext";
import { Tableau } from "../../../AdminCompany/Orders/OrderDetail/Tableau";
import { OrdersJournal } from "../../../OrdersJournal";
import Header from "../../Header";
const useStyles = makeStyles((t) => ({
  retour: {
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    border: "1px solid black",
    marginBottom: "10px",
    cursor: "pointer",
  },
  orderDetailTitle: {
    textDecoration: "underline",
  },
  orderDetailText: {
    fontSize: "1rem",
  },
}));
export const OrdersDeliveryDetail = ({ match,history }) => {
  const styles = useStyles();
  const delivery = useContext(DeliveryContext);
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [message, setMessage] = useState("");
  // const [message,setMessage]=useState(null);
  const handleOnsubmit = (e) => {
    const id = match.params.id;
    e.preventDefault();
    delivery.updateStatus(id,message,selectedStatus).then(()=>onload())
  };
  const onload = async () => {
    const id = match.params.id;
    const uid = match.params.uid;

    await delivery
      .getOneOrder(uid, id)
      .then((res) => {
        // setMessage(res.data.message)
        if (res.data.order) {
          setSelectedStatus(res.data.order.status.id);
          setOrder(res.data.order);
        }
      })
      .catch((err) => console.log(err));
    await getStatus();
  };
  const getStatus = async () => {
    delivery.status().then((res) => setStatus(res.data.status));
  };
  useEffect(() => {
    onload();
    
  }, []);
  return (
    <React.Fragment>
      <Header icon="fab fa-first-order">Orders</Header>
      <div className="py-4 px-3">
        <div
            className={styles.retour}
            onClick={() => {
              history.push("/delivery/"+match.params.uid);
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </div>

        {order ? (
          <div className="d-flex justify-content-between">
            <div className="col-8">
              {/* begin of card */}
              <div className="card mb-2">
                <div className="card-body">
                  <h4>Orders <span className="text-blue">#{order.number}</span></h4>
                  <p>
                    Passed on {format(new Date(order.created_at), "MM/dd/yyyy")}
                    . Customer IP:  {order.ip}
                  </p>
                  <div className="row mt-5">
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <p
                          className={
                            "font-weight-bold mb-3 " + styles.orderDetailTitle
                          }
                        >
                          billing :
                        </p>
                      </div>
                      <div className={styles.orderDetailText + " lead"}>
                        <p>{order.location}</p>

                        <p>{order.customer.phone}</p>
                      </div>
                    </div>
                    {/* <BreakLine bg="bg-secondary" height="2px"/> */}

                    <div className="col-4">
                      <p
                        className={
                          "font-weight-bold mb-3 " + styles.orderDetailTitle
                        }
                      >
                        shipping :
                      </p>
                      <div className={styles.orderDetailText + " lead"}>
                        <p>
                          <strong className="font-weight-bold">address:</strong>{" "}
                          {order.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of row */}
                </div>
              </div>
              {/* end of card */}
              <Tableau order={order} total={0}></Tableau>

              <div className="card my-3">
                <div className="card-header">Orders Journal</div>
                <div className="card-body bg-gray">
                  <OrdersJournal apply={false} journals={order.order_journal} />
                </div>
              </div>
            </div>
            <div className="col-4 mx-2 ">
              <div className="card mb-2">
                <div className="card-header bg-white">Order Action</div>
                <div className="card-body">
                  <form onSubmit={handleOnsubmit}>
                    <label className="mb-2">Status :</label>
                    <select
                      className="form-select mb-3"
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      {status.map((statu) =>
                        statu.id === order.status.id ? (
                          <option selected value={statu.id}>
                            {statu.name}
                          </option>
                        ) : (
                          <option value={statu.id}>{statu.name}</option>
                        )
                      )}
                    </select>
                    <label className="mb-2">Mesage :</label>
                    <textarea
                      className="form-control mb-3"
                      onChange={(e) => setMessage(e.target.value)}
                      // ref={textarea}
                    ></textarea>
                    <button className="btn bg-primary w-100">Submit</button>
                  </form>
                </div>
              </div>
              {/* end of card */}

              {/* end of card */}
            </div>
            {/* end of col */}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};
