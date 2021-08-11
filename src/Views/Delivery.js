import React from "react";
import { makeStyles } from "@material-ui/core";
// import withAdminCompany from "../HOC/withAdminCompany";
import withDelivery from "../HOC/withDeliveryContext";
// import Sidebar from "../components/Delivery/Sidebar"

const useStyles = makeStyles((t) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
  },
  content: {
    position: "relative",
    width: "100%",
    transition: ".5s",
  },
}));

function Delivery({children}) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
        {/* <Sidebar /> */}
        <div className={styles.content}>
         {children}
        </div>
    </div>
  );
}

export default withDelivery(Delivery);

