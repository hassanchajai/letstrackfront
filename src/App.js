import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import AdminCompany from "./Views/AdminCompany";
import Delivery from "./Views/Delivery";
import User from "./Views/User";
import React, { useEffect } from "react";
import Dashboard from "./components/AdminCompany/Dashboard";
import Tracking from "./components/Main/Tracking";
import Users from "./components/AdminCompany/Users";
import Orders from "./components/AdminCompany/Orders";
import  OrdersDelivery from "./components/Delivery/Orders";
import Integrate from "./components/AdminCompany/integrate";
import Signin from "./components/AdminCompany/Signin";
import Signup from "./components/AdminCompany/Signup";
import AddUser from "./components/AdminCompany/Users/AddUser";
import ShowUser from "./components/AdminCompany/Users/ShowUser";
import OrderDetail from "./components/AdminCompany/Orders/OrderDetail";
import Profil from "./components/AdminCompany/Profil";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
// import axios from "axios";
import { OrdersDeliveryDetail } from "./components/Delivery/Orders/OrdersDeliveryDetail";


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
  <Component {...matchProps}  />
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
useEffect(()=>{
 
},[]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* part user */}
          <UserRouteLayout exact path="/"  Component={Tracking} />
          {/* part admin */}
          {/* <Route path="/admin" exact component={Admin} /> */}
        
          {/* part admin company */}

          <AppLayoutRoute exact path="/company/dash"  Component={Dashboard} />

          <AppLayoutRoute exact path="/company/users"  Component={Users} />
          <AppLayoutRoute exact path="/company/users/add"  Component={AddUser} />
          <AppLayoutRoute exact path="/company/users/:user_id"  Component={ShowUser} />

          <AppLayoutRoute exact path="/company/profil"  Component={Profil}/>

          <AppLayoutRoute exact path="/company/orders"  Component={Orders}/>
          <AppLayoutRoute exact path="/company/orders/:id"   Component={OrderDetail}/>
          
          <AppLayoutRoute exact path="/company/integrate"  Component={Integrate} />
          {/* <AppLayoutRoute exact path="/company/integrate/:method"  Component={Integrate} /> */}
          <Redirect exact path="/company" to="/company/dash" />
          {/* part delivery */}
          <DeliveryRouteLayout exact path="/delivery/:uid" Component={OrdersDelivery}/>
          <DeliveryRouteLayout exact path="/delivery/:uid/orders/:id" Component={OrdersDeliveryDetail}/>
          {/* <Route path="/delivery/:delivery_id" exact component={Delivery} /> */}
          {/* not found */}

          <Route exact path="/company/signup" component={Signup} />
          <Route exact path="/company/sign" component={Signin} />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
      <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}/>
    </div>
 
  );
}

export default App;
