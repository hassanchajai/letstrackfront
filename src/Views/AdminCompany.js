import React from "react";
import { makeStyles } from "@material-ui/core";
import Sidebar from "../components/AdminCompany/Sidebar";
import withAdminCompany from "../HOC/withAdminCompany";
import withAuth from "../HOC/withAuth";

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
  toggleBtn: {
    backgroundColor: "#242A32",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "0% 9% 10% 0% / 10% 10% 10% 10% ",
    fontSize: "1.3rem",
    display:"none",
    position:"fixed",
    top: "96px",
    left: "0px",
    zIndex:"99",
    [t.breakpoints.down(1000)]:{
      display:"block"
    }
  },
}));
function AdminCompany({ children }) {
  const styles = useStyles();
  const handleToggleSidebar=()=>{
    // const sidebar=document.querySelector("#sidebar");
    // const sidebar=document.querySelector("#sidebar");
    document.querySelector("#sidebar").classList.toggle("sidebar-active");
   
   const btn=   document.querySelector(".btn-toggle-sidebar");
   btn.style.left === "100px" ? btn.style.left = "0": btn.style.left = "100px"
  //  if(btn.styles.left==="")
    
}
  return (
      <div className={styles.root}>
        <Sidebar />
        <button className={styles.toggleBtn+" btn-toggle-sidebar" } onClick={handleToggleSidebar}>
          <i className="fas fa-align-left"></i>
        </button>
        <div className={styles.content}>{children}</div>
      </div>
   
  );
}

export default withAdminCompany(AdminCompany);
