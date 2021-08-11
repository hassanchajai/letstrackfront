import formatDistance from "date-fns/formatDistance";
import React from "react";
import { withRouter } from "react-router";
import withloading from "../../../../HOC/WithLoading";

const OrderItemDelivery = ({ styles, history, order,match }) => {
  const handleOnclickShow = (id) => {
    const uid= match.params.uid;
    history.push("/delivery/"+uid+"/orders/" + id);
  };
  let { status } = order;
  let color = "success";
  if (status === "Processing") color = "primary";
  if (status === "Cancelled") color = "danger";
  if (status === "En Delivery") color = "blue";
  return (
    <div className={styles.tr} key={order.order_id}>
      <p className={styles.p}>
        {formatDistance(new Date(order.pickup), new Date(), {
          addSuffix: true,
        })}
      </p>
      <p className={styles.p}>{order.location}</p>
      <p className={styles.p}>
        <span className="p-2 d-block w-25 m-auto rounded text-white bg-danger">
          {order.spams}
        </span>
      </p>
      <p className={styles.p}>{order.order_id}</p>
      <p className={styles.p}>
        <span className={"p-2  d-block rounded text-white bg-" + color}>
          {order.status}
        </span>
      </p>
      <p className={styles.p}>
        <span
          className="p-2 d-block m-auto rounded text-black bg-white border border-dark w-25"
          onClick={() => handleOnclickShow(order.order_id)}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-chevron-down"></i>
        </span>
      </p>
    </div>
  );
};
export default withloading(withRouter(OrderItemDelivery));
