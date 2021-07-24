import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// import React from "react";
import { makeStyles } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import img from "../../../Views/img.png";
import colors from "../../../Helpers/Colors";
import Header from "../../AdminCompany/Header";
import { useContext } from "react";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import { format, formatDistance } from "date-fns";
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

        {loading ? (
          <React.Fragment>
            {" "}
            <ul className={styles.statistique}>
              <li className={styles.statistiqueItem}>
                <div className={styles.statistiqueItemDetail}>
                  {/* statisqtique details */}
                  <div>
                    <h3 className="mb-2">Requests</h3>
                    <p>{ordersState.orders.ordersCompleted}</p>
                  </div>
                  {/* icon container */}
                  <div className={styles.statistiqueItemDetailIcon}>
                    <i className="fas fa-home"></i>
                  </div>
                  {/* end icon container */}
                </div>
                {/* percent */}

                <p>
                  <span className="text-success">
                    {ordersState.ordersPercent.ordersCompleted}%
                  </span>{" "}
                  since last month
                </p>

                {/* end of percent */}
              </li>
              {/* end of list item */}
              <li className={styles.statistiqueItem}>
                <div className={styles.statistiqueItemDetail}>
                  {/* statisqtique details */}
                  <div>
                    <h3 className="mb-2">Requests</h3>
                    <p>{ordersState.orders.ordersProcessing}</p>
                  </div>
                  {/* icon container */}
                  <div
                    className={styles.statistiqueItemDetailIcon + " bg-primary"}
                  >
                    <i className="fas fa-home"></i>
                  </div>
                  {/* end icon container */}
                </div>
                {/* percent */}

                <p>
                  <span className="text-success">
                    {ordersState.ordersPercent.ordersProcessing}%
                  </span>{" "}
                  since last month
                </p>

                {/* end of percent */}
              </li>
              {/* end of list item */}
              <li className={styles.statistiqueItem}>
                <div className={styles.statistiqueItemDetail}>
                  {/* statisqtique details */}
                  <div>
                    <h3 className="mb-2">Requests</h3>
                    <p>{ordersState.orders.ordersCancelled}</p>
                  </div>
                  {/* icon container */}
                  <div
                    className={styles.statistiqueItemDetailIcon + " bg-danger"}
                  >
                    <i className="fas fa-home"></i>
                  </div>
                  {/* end icon container */}
                </div>
                {/* percent */}

                <p>
                  <span className="text-success">
                    {ordersState.ordersPercent.ordersCancelled}%
                  </span>{" "}
                  since last month
                </p>

                {/* end of percent */}
              </li>
              {/* end of list item */}
              <li className={styles.statistiqueItem}>
                <div className={styles.statistiqueItemDetail}>
                  {/* statisqtique details */}
                  <div>
                    <h3 className="mb-2">Requests</h3>
                    <p>{ordersState.orders.ordersEnDelivery}</p>
                  </div>
                  {/* icon container */}
                  <div
                    className={styles.statistiqueItemDetailIcon + " bg-blue"}
                  >
                    <i className="fas fa-home"></i>
                  </div>
                  {/* end icon container */}
                </div>
                {/* percent */}

                <p>
                  <span className="text-success">
                    {ordersState.ordersPercent.ordersEnDelivery}%
                  </span>{" "}
                  since last month
                </p>

                {/* end of percent */}
              </li>
              {/* end of list item */}
            </ul>
            <div className="row m-0 mt-4">
              <div className="col-12 col-md-8">
                <Bar
                  data={{
                    labels: chartdata.map(item=>item.month),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: chartdata.map(item=>item.count),
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                    options: {
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="col-12 col-md-4 card p-0 ">
                <div className="card-header">
                  <p>Last {lastOrders.length} orders</p>
                </div>
                {lastOrders.length ? (
                  <table className="table card-body mb-0 text-center">
                    <thead>
                      <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Shipping Address</th>
                        <th scope="col">Date</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lastOrders.map((order) => (
                        <tr>
                          <td>{order.shipping_address}</td>
                          <td>
                            {" "}
                            {formatDistance(
                              new Date(order.created_at),
                              new Date(),
                              { addSuffix: true }
                            )}
                          </td>
                          <td>
                            <button className="btn btn-warning text-white">
                              Show
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div>loading ...</div>
        )}
      </div>
    </React.Fragment>
  );
}
