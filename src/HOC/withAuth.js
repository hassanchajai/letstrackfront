import React, { useEffect } from "react";
import { withRouter } from "react-router";
// import { Component } from 'react'

const withAuth = (Component) => {
const Withauth=(props) => {
    useEffect(() => {
      if (localStorage.getItem("token")) {
        // history.push("/sign")
        props.history.push("/company/dash");
      }
      // props.children.props.history.push("/company/dash");
    }, []);
  
    return <Component {...props} />;


};
return withRouter(Withauth)
}

export default withAuth;
