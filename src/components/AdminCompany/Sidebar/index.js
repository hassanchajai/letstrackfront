import React, { useContext } from "react";

// import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
// import img from "./img.png";
import colors from "../../../Helpers/Colors";
import "./style.css";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
// import colors from "../Helpers/Colors";
const useStyles = makeStyles((t) => ({
  root: {
    // height: "100vh",
    display: "flex",
  },
  sidebar: {
    position: "relative",
    backgroundColor: "#323A45",
    overflow: "hidden",
    width: "7%",
    transition: ".5s",
    height:"100vh"
  },
  logo: {
    width: "100%",
    padding: "30px 0",
    backgroundColor: "#242A32",
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  sidebarItems: {
    // backgroundColor: "#323A45",
    margin: "20px auto",
    // textAlign:"center",
    listStyle: "none",
    padding: "0",
    // justifyContent: "center",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    backgroundColor: "#242A32",
    margin: "0 auto",
    marginBottom: "10px",
    width: "60px",
    height: "60px",
    color: "white",
    fontSize: "1.3rem",
    transition: ".5s",
    "&:hover": {
      backgroundColor: "white",
      color: "#242A32",
    },
    "&.active": {
      backgroundColor: "white",
      color: "#242A32",
    },
  },
  content: {
    position: "relative",
    width: "100%",
    transition: ".5s",
  },
  header: {
    padding: "11.5px 20px",
    minWidth: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pagetitle: {
    fontSize: "1rem",
    margin: "0 10px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "3px",
  },
  userDetail: {
    display: "flex",
  },
  btnSearch: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
  },
  userDetailContent: {
    display: "flex",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  userimg: {
    width: 45 + "px",
    height: "45px",
    borderRadius: "50px",
    margin: "0 5px",
  },
  signout: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "50px",
    marginBottom: "10px",
    width: "60px",
    height: "60px",
    color: "white",
    fontSize: "1.3rem",
    transition: ".5s",
    backgroundColor: colors.danger,
  },
  toggleBtn: {
    position: "absolute",
    top: "96px",
    left: "0px",
    backgroundColor: "#242A32",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "0% 9% 10% 0% / 10% 10% 10% 10% ",
    fontSize: "1.3rem",
  },
}));
function Sidebar(props) {
    const styles=useStyles();
    const admin=useContext(AdminCompanyContext);
    const doSignOut=async ()=>{
     //  console.log(props)
    await admin.signout().then(res=>{
       localStorage.removeItem("token");
       props.history.push("/company/sign");
     })
     }
  return (
    
      <div className={styles.sidebar} id="sidebar">
        {/* sidebar header */}
        <div className={styles.logo}>LTS</div>
        <div className={styles.sidebarItems}>
          <NavLink to="/company/dash" className={styles.sidebarItem + " nav-link"}>
            <i className="fas fa-chart-bar"></i>
          </NavLink>
          <NavLink
            to="/company/users"
            className={styles.sidebarItem + " nav-link"}
          >
            <i className="fas fa-users"></i>
          </NavLink>
          <NavLink
            to="/company/orders"
            className={styles.sidebarItem + " nav-link"}
          >
            <i className="fab fa-first-order"></i>
          </NavLink>
          <NavLink
            to="/company/integrate"
            className={styles.sidebarItem + " nav-link"}
          >
            <i className="fas fa-code"></i>
          </NavLink>
        </div>
        <button className={styles.signout} onClick={doSignOut}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
        
      </div>
  );
}

export default withRouter(Sidebar)