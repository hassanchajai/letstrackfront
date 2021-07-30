import { makeStyles } from "@material-ui/core";
import { format } from "date-fns";
// import { setDate } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import AdminCompanyContext from "../../../../DB/AdminCompany/AdminCompanyContext";
// import BreakLine from "../../../../StyledComponents/BreakLineVertical";
import Header from "../../Header";
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
    marginBottom: "30px",
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
  const [showForm, toggleShowForm] = useState(false);
  const [order, setOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total,setTotal]=useState(0);
  // date
  const [date, setdate] = useState(null);
  const [hour, setHour] = useState(null);
  const [minutes, setMinute] = useState(null);

  // end of date
  const toggle = () => {
    toggleShowForm(!showForm);
  };
  const admin = useContext(AdminCompanyContext);
  useEffect(() => {
    const id = props.match.params.id;
    admin
      .getOneOrder(id)
      .then((res) => {
        let dt = format(new Date(res.data.order.order_date), "yyyy-MM-dd");
        setdate(dt);
        // console.log(date)
        setHour(new Date(res.data.order.order_date).getHours());
        setMinute(new Date(res.data.order.order_date).getMinutes());
        let j=0;
        res.data.order.order_detail.forEach(item=>{
          j+=item.price*item.qte;
        });
        setTotal(j);
        setOrder(res.data.order);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                      <form className={styles.orderDetailText}>
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
                            max="24"
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                          />{" "}
                          -
                          <input
                            className="form-control d-block-line w-25"
                            type="text"
                            value={minutes}
                            onChange={(e) => setMinute(e.target.value)}
                          />
                        </div>
                        {/* <label className="mb-2">Status :</label>
                    <select className="form-select mb-3">
                      <option>All</option>
                      <option>Process</option>
                      <option>En delivery</option>
                    </select> */}
                        <label className="mb-2">Delivery Man :</label>
                        <select className="form-select mb-3">
                          <option>{order.delivery.name}</option>
                        </select>
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
                        ></i>
                      </div>
                      <div className={styles.orderDetailText + " lead"}>
                        <p>{order.location}</p>
                        <p>{order.phone}</p>
                      </div>
                      <form className="d-none">
                        {/* <label className="mb-2">Status :</label>
                    <select className="form-select mb-3">
                      <option>All</option>
                      <option>Process</option>
                      <option>En delivery</option>
                    </select> */}
                        <label className="mb-2">Delivery Man :</label>
                        <select className="form-select mb-3">
                          <option>Hassan Essajai</option>
                          <option>Test Test</option>
                        </select>
                      </form>
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
                </div>
              </div>
              {/* end of card */}
              {/* begin of tableau */}
              <div className="card ">
                <div className="card-header bg-gray">
                  <div className="d-flex">
                    {/* <div className="d-flex"><img src="" alt="product" width="60" height="60"/><h5>Product</h5></div>  */}
                    <p className="w-50">Product</p>
                    <p className="w-25">cost</p>
                    <p className="w-25">qte</p>
                    <p className="w-25">Total</p>
                  </div>
                </div>
                {/* card body */}
                <div className="card-body bg-white">
                  {order.order_detail.map((item, i) => {
                    if(order.order_detail.length===1){
                      return (
                        <div className="d-flex mb-3">
                          <div className="d-flex w-50 align-items-center">
                            <img
                              src="https://s1.piq.land/2012/06/17/LIc7N4wKWoqpMp2ciVKH1Gzm_400x400.png"
                              alt="product"
                              width="50"
                              height="50"
                            />
                            <p>Product</p>
                          </div>
                          {/* <p className="w-50">Product</p> */}
                          <p className="w-25">{item.price}$</p>
                          <p className="w-25">{item.qte}</p>
                          <p className="w-25">{item.price * item.qte }$</p>
                        </div>
                      ); 
                    }
                    else{
                      if (i === order.order_detail.length-1 ) {
                        return (
                          <div className="d-flex mb-3">
                            <div className="d-flex w-50 align-items-center">
                              <img
                                src="https://s1.piq.land/2012/06/17/LIc7N4wKWoqpMp2ciVKH1Gzm_400x400.png"
                                alt="product"
                                width="50"
                                height="50"
                              />
                              <p>Product</p>
                            </div>
                            {/* <p className="w-50">Product</p> */}
                            <p className="w-25">{item.price}$</p>
                          <p className="w-25">{item.qte}</p>
                          <p className="w-25">{item.price * item.qte }$</p>
                          </div>
                        );
                      }
  
                      return (
                        <React.Fragment>
                          <div className="d-flex mb-3">
                            <div className="d-flex w-50 align-items-center">
                              <img
                                src="https://s1.piq.land/2012/06/17/LIc7N4wKWoqpMp2ciVKH1Gzm_400x400.png"
                                alt="product"
                                width="50"
                                height="50"
                              />
                              <p>Product</p>
                            </div>
                            {/* <p className="w-50">Product</p> */}
                            <p className="w-25">{item.price}$</p>
                          <p className="w-25">{item.qte}</p>
                          <p className="w-25">{item.price * item.qte }$</p>
                          </div>
                          <hr></hr>
                        </React.Fragment>
                      );
                    }
                
                  })}
                </div>
                {/*end of card body */}
                {/* card footer */}
                <div className="card-footer bg-white ">
                  {/* <p className="w-50">Product</p> */}
                  <div className="row">
                    <div className="col-6">
                      <div></div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <p>
                          <strong>Order Total:</strong>
                        </p>
                        <p>{total}$</p>
                      </div>
                   
                    </div>
                  </div>
                </div>
                {/*end of card footer */}
              </div>
              {/* end of tableau */}
            </div>
            <div className="col-4 mx-2 ">
              <div className="card mb-2">
                <div className="card-header bg-white">Order Action</div>
                <div className="card-body">
                  <label className="mb-2">Status :</label>
                  <select className="form-select mb-3">
                    <option>All</option>
                    <option>Process</option>
                    <option>En delivery</option>
                  </select>
                  <button className="btn bg-primary w-100">Submit</button>
                </div>
              </div>
              {/* end of card */}
              <div className="card mb-2">
                <div className="card-header bg-white">Order Spam</div>
                <div className="card-body">
                  <button className="btn bg-danger w-100">Spam</button>
                </div>
              </div>
              {/* end of card */}
            </div>
            {/* end of col */}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};
export default withRouter(OrderDetail);
