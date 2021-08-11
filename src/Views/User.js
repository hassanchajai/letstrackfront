import React from "react";
import Header from "../components/Main/Header";
import withUserContext from "../HOC/withUser";

 function Main({children}) {
  return (
    <React.Fragment>
  
        <Header />
         {children}
          {/* <Redirect from="/company"  ="/company" /> */}
    </React.Fragment>
  );
}
export default withUserContext(Main)