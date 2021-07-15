import React from "react";
import Header from "../components/Main/Header";

export default function Main({children}) {
  return (
    <React.Fragment>
  
        <Header />
         {children}
          {/* <Redirect from="/company"  ="/company" /> */}
  
        
        
    </React.Fragment>
  );
}
