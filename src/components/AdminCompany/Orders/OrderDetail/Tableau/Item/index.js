import React from 'react'

export const Item = ({item}) => {
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
    )
}
