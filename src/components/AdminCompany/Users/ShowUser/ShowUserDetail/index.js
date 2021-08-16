import React from 'react'
import { toast } from 'react-toastify'
import { getBadge } from '../../../../../Helpers/getBadge'
import withloading from '../../../../../HOC/WithLoading'
import Details from './Details'
import Update from './Update'

 const ShowUserDetail = ({
    toggle,user,statistique,showForm
}) => {
  
    return (
       
          <div>
            {" "}
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="mb-3">{user.name} <button className="btn bg-blue get" onClick={()=>toast("the link has copied")} data-clipboard-text={"localhost:3000/delivery/"+user.uid}>GET</button></h2>

              {/* <p>32 order</p> */}
              <div className=" py-3 px-5   rounded text-white bg-primary">
{              getBadge(user.ordersCounter)
}              </div>
            </div>
            <hr></hr>
            {showForm ? (
              <Update close={toggle} user={user} />
            ) : (
              <Details open={toggle} user={user} statistique={statistique} />
            )}
          </div>
      
    )
}
export default withloading(ShowUserDetail)