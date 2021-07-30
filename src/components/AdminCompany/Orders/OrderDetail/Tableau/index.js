import React from "react";
import { Item } from "./Item";

export const Tableau = ({ order, total }) => {
  return (
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
          if (order.order_detail.length === 1) {
            return <Item item={item} key={i} />;
          } else {
            if (i === order.order_detail.length - 1) {
              return <Item item={item} key={i} />;
            }

            return (
              <React.Fragment>
                <Item item={item} key={i} />
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
  );
};
