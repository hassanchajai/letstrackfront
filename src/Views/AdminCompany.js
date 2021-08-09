import React from "react";
import { makeStyles } from "@material-ui/core";
import Sidebar from "../components/AdminCompany/Sidebar";
import withAdminCompany from "../HOC/withAdminCompany";

const useStyles = makeStyles((t) => ({
  root: {
    display: "flex",
  },
  content: {
    position: "relative",
    width: "100%",
    transition: ".5s",
    overflowY:"scroll",
    height:"100vh"
  },
}));
function AdminCompany({ children }) {
  const styles = useStyles();
  
  return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
   
  );
}

export default withAdminCompany(AdminCompany);
