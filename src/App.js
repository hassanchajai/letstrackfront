// import { Route } from 'react-router';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
// import Sign from "./components/Main/Sign";
// import Tracking from "./components/Main/Tracking";
import NotFound from "./components/NotFound";
// import Admin from "./Views/Admin";
import AdminCompany from "./Views/AdminCompany";
import Delivery from "./Views/Delivery";
import User from "./Views/User";
import React from "react";
// import Main from "./Views/Main";
// import RoutesUser from "./Routes/RoutesUser";
// import "index.css"
import Dashboard from "./components/AdminCompany/Dashboard";
import Tracking from "./components/Main/Tracking";
import Users from "./components/AdminCompany/Users";
import Orders from "./components/AdminCompany/Orders";
import  OrdersDelivery from "./components/Delivery/Orders";
import Integrate from "./components/AdminCompany/integrate";
import Signin from "./components/AdminCompany/Signin";
import Signup from "./components/AdminCompany/Signup";

const AppLayoutRoute = ({ Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AdminCompany>
        <Component {...matchProps} />
      </AdminCompany>
    )} />
  )
};
const UserRouteLayout=({Component,...rest})=>{
return (
<Route  {...rest} render={matchProps=>(<User>
  <Component {...matchProps} />
</User>)}/>
)
}
const DeliveryRouteLayout=({Component,...rest})=>{
  return (
  <Route  {...rest} render={matchProps=>(<Delivery>
    <Component {...matchProps} />
  </Delivery>)}/>
  )
  }
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* part user */}
          <UserRouteLayout path="/" exact Component={Tracking} />
          {/* part admin */}
          {/* <Route path="/admin" exact component={Admin} /> */}
        
          {/* part admin company */}

          <AppLayoutRoute exact path="/company/dash"  Component={Dashboard} />
          <AppLayoutRoute exact path="/company/users"  Component={Users} />
          <AppLayoutRoute exact path="/company/orders"  Component={Orders}/>
          <AppLayoutRoute exact path="/company/integrate"  Component={Integrate} />
          <Redirect exact path="/company" to="/company/dash" />
          {/* part delivery */}
          <DeliveryRouteLayout exact path="/delivery/:delivery_id" Component={OrdersDelivery}/>
          {/* <Route path="/delivery/:delivery_id" exact component={Delivery} /> */}
          {/* not found */}
          <Route exact path="/company/signup" component={Signup} />
          <Route exact path="/company/sign" component={Signin} />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
