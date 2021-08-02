import { makeStyles } from "@material-ui/core";
import { format } from "date-fns";
// import { setDate } from "date-fns";
import React, { useContext, useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import AdminCompanyContext from "../../../../DB/AdminCompany/AdminCompanyContext";
import { OrdersJournal } from "../../../OrdersJournal";
// import BreakLine from "../../../../StyledComponents/BreakLineVertical";
import Header from "../../Header";
import { Tableau } from "./Tableau";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {v4 as uuid} from 'uuid'
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
const OrderDetail = (props) => {
  const styles = useStyles();
  // const [showForm, toggleShowForm] = useState(false);
  const [order, setOrder] = useState(false);
  const [status, setStatus] = useState([]);
  const [Selectedstatus, setSelectedStatus] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [editform, seteditform] = useState(false);
  const admin = useContext(AdminCompanyContext);
  const [total, setTotal] = useState(0);
  // date
  const [date, setdate] = useState(null);
  const [hour, setHour] = useState(null);
  const [minutes, setMinute] = useState(null);
  const [deliveries, setDeliveries] = useState([]);
  const [idDelivery, setIdDelivery] = useState([]);
  const [address, setAddress] = useState("");
  const [spamChecked, setSpamChecked] = useState(false);
  const [updated, setUpdated] = useState("");
  const [message, setMessage] = useState("");
  const textarea=useRef();
  const showmsgUpdate = () => {
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 3000);
  };
  const onLoad=()=>{
    const id = props.match.params.id;
    admin
      .getOneOrder(id)
      .then((res) => {
        let dt = format(new Date(res.data.order.order_date), "yyyy-MM-dd");
        setdate(dt);
        // console.log(date)
        setHour(new Date(res.data.order.order_date).getHours());
        setMinute(new Date(res.data.order.order_date).getMinutes());
        setAddress(res.data.order.location);
        let j = 0;
        res.data.order.order_detail.forEach((item) => {
          j += item.price * item.qte;
        });
        setTotal(j);
        setOrder(res.data.order);
        setIdDelivery(res.data.order.delivery.id);
        setSelectedStatus(res.data.order.status.id);
        if(res.data.order.spamChecked>0){
          setSpamChecked(true)
        }

      })
      .catch((err) => {
        console.log(err);
      });
    // get deliveries
    admin
      .getAllUsers()
      .then((res) => {
        setDeliveries(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
      getAllStatus();
  }
  const getAllStatus = async () =>
    await admin.getAllStatus().then((res) => setStatus(res.data.status));

  useEffect(() => {
    onLoad();
    
  }, []);
  const handleOnChangeAddress = async (e) => {
    setAddress(e.target.value);
    await admin.UpdateOrderAddress(order.order_id, e.target.value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let dt = `${date} ${hour}:${minutes}:00 `;
    await admin.UpdateOrder(order.order_id, idDelivery, dt).then((res) => {
      showmsgUpdate();
    });
  };
  const handleOnUpdateStatus = async (e) => {
    e.preventDefault();
    await admin
      .UpdateOrderStatus(order.order_id, Selectedstatus,message)
      .then((res) => {
        textarea.current.value="";
        AddCurrentStatusToOriginal();
      });
  };
  const handleOnClickSpam=async e=>{
    e.preventDefault();
    let type="add";
    let spam_id=0;
    try {
      if(order.spam[0].id){
        type="delete";spam_id=order.spam[0].id;
    }} catch (error) {}
   
    await admin.spam(type,order.order_id,order.customer.id,spam_id).then(res=>{
      onLoad();
      setSpamChecked(!spamChecked);
    })
  }
  const AddCurrentStatusToOriginal = () => toast.success("Add Current Status To Original");
  return (
    <React.Fragment>
      <Header icon="fab fa-first-order">Orders</Header>
      <div className="py-4 px-3">
        <div
          className={styles.retour}
          onClick={() => {
            props.history.push("/company/orders");
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
                  <h4>Orders #32341</h4>
                  <p>
                    Passed on {format(new Date(order.created_at), "MM/dd/yyyy")}
                    . Customer IP: 127.0.0.1
                  </p>
                  <div className="row mt-5">
                    <div className="col-4">
                      <p
                        className={
                          "font-weight-bold mb-3 " + styles.orderDetailTitle
                        }
                      >
                        General :
                      </p>
                      <form
                        className={styles.orderDetailText}
                        onSubmit={handleOnSubmit}
                      >
                        <label className="mb-2">Date created :</label>
                        <div className="align-items-center d-flex mb-3">
                          <input
                            className="form-control w-50"
                            type="date"
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                          />{" "}
                          -
                          <input
                            className="form-control d-block-line w-25"
                            type="number"
                            min="1"
                            max="23"
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                          />{" "}
                          -
                          <input
                            className="form-control d-block-line w-25"
                            type="number"
                            value={minutes}
                            onChange={(e) => setMinute(e.target.value)}
                            min="1"
                            max="59"
                          />
                        </div>
                        {/* <label className="mb-2">Status :</label>
                    <select className="form-select mb-3">
                      <option>All</option>
                      <option>Process</option>
                      <option>En delivery</option>
                    </select> */}
                        <label className="mb-2">Delivery Man :</label>
                        <select
                          className="form-select mb-3"
                          onChange={(e) => setIdDelivery(e.target.value)}
                        >
                          {deliveries.map((user) =>
                            user.id === order.delivery.id ? (
                              <option selected value={order.delivery.id}>
                                {order.delivery.name}
                              </option>
                            ) : (
                              <option value={user.id}>{user.name}</option>
                            )
                          )}
                        </select>
                        {updated ? (
                          <p className="my-2 text-success">
                            Order updated succefuly
                          </p>
                        ) : null}
                        <button type="submit" className="btn bg-primary w-100">
                          Submit
                        </button>

                        {/* <button className="btn bg-primary w-100">Submit</button> */}
                      </form>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <p
                          className={
                            "font-weight-bold mb-3 " + styles.orderDetailTitle
                          }
                        >
                          billing :
                        </p>
                        <i
                          className="fas fa-pen"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            seteditform(!editform);
                          }}
                        ></i>
                      </div>
                      <div className={styles.orderDetailText + " lead"}>
                        {editform ? (
                          <input
                            type="text"
                            className="form-control mb-2"
                            value={address}
                            onChange={handleOnChangeAddress}
                          />
                        ) : (
                          <p>{address}</p>
                        )}
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
                          {address}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of row */}
                
                </div>
              </div>
              {/* end of card */}
              <Tableau order={order} total={total}></Tableau>
              <div className="card my-3">
                <div className="card-header">
                  Orders Journal
                </div>
                <div className="card-body bg-gray">
                  <OrdersJournal journals={order.order_journal}/>
                </div>
              </div>
            </div>
            <div className="col-4 mx-2 ">
              <div className="card mb-2">
                <div className="card-header bg-white">Order Action</div>
                <div className="card-body">
                  <form onSubmit={handleOnUpdateStatus}>
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
                      ref={textarea}
                    ></textarea>
                    <button
                      className="btn bg-primary w-100"     
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              {/* end of card */}
              <div className="card mb-2">
                <div className="card-header bg-white">Order Spam</div>
                <div className="card-body">
                  {!spamChecked  ? (
                    <button className="btn bg-success w-100" onClick={handleOnClickSpam}>Spam</button>
                  ) : (
                    <button className="btn bg-danger w-100"  onClick={handleOnClickSpam}>Annule</button>
                  )}
                </div>
              </div>
         
              {/* end of card */}
            </div>
            {/* end of col */}
          </div>
        ) : null}
      </div>
      <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}/>
    </React.Fragment>
  );
};
export default withRouter(OrderDetail);
