// import Sign from "../components/Main/Sign";
import User from "../Views/User";
import { Route } from "react-router-dom";
import React from "react";

const routes=[
  {
    path:"/",
    component:User
  },

]



const RoutesUser = () => {
    return (
      <React.Fragment>
        {
          routes.map((route,i)=><Route path={route.path} exact component={route.component} key={i} />)
        }
      </React.Fragment>
    );
  };
  export default RoutesUser