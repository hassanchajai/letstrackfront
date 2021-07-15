import React from "react";
import { makeStyles } from "@material-ui/core";
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

export default Delivery;
