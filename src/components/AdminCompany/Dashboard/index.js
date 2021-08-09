import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import React from "react";
import { makeStyles } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import img from "../../../Views/img.png";
import colors from "../../../Helpers/Colors";
import Header from "../../AdminCompany/Header";
import { useContext } from "react";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
// import { formatDistance } from "date-fns";
import  Statistique  from "./Statistique";
// import colors from "../Helpers/Colors";
const useStyles = makeStyles((t) => ({
  statistique: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    listStyle: "none",
    [t.breakpoints.down(925)]: {
      display: "block",
    },
  },
  statistiqueItem: {
    backgroundColor: "white",
    padding: "15px 30px",
    borderRadius: "3px",
    width: "23%",
    [t.breakpoints.down(925)]: {
      width: "100%",
      margin: "20px 0",
    },
  },
  statistiqueItemDetail: {
    display: "flex",
    justifyContent: "space-between",
  },
  statistiqueItemDetailIcon: {
    borderRadius: "50px",
    backgroundColor: colors.success,
    alignSelf: "center",
    padding: "18px",
    color: "white",
  },
}));
export default function Dashboard() {
  const styles = useStyles();
  const [ordersState, setOrdersState] = useState(null);
  const [lastOrders, setLastOrders] = useState(null);
  const [chartdata, setchartdata] = useState(null);
  const [loading, setloading] = useState(false);

  const admin = useContext(AdminCompanyContext);
  useEffect(() => {
    async function getdata() {
      await admin
        .orders()
        .then((res) => {
          setOrdersState(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      await admin
        .lastorders()
        .then((res) => {
          setLastOrders(res.data.orders);
        })
        .catch((err) => {
          console.log(err);
        });
      await admin
      .chartdata()
      .then(res=>{
        
        setchartdata(res.data.orders);
      })
      .catch(err=>{
        console.log(err);
      })

      // chartdata.orders.map((item)=>{
      //   console.log(item.month)
      // });
      setloading(true);
    }


    getdata();
  }, []);
  return (
    <React.Fragment>
      <Header icon="fas fa-chart-bar">Dashboard</Header>

      <div className="py-4 px-3">
        {/* <p className="font-weight-bold text-center mb-4">Welcome Back !</p> */}

       
          <Statistique loading={loading} chartdata={chartdata} ordersState={ordersState} lastOrders={lastOrders} styles={styles} />
       
      </div>
  </React.Fragment>
  );
}
