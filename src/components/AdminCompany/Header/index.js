import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import { withRouter } from "react-router";

const useStyles = makeStyles((t) => ({
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
 function Header(props) {
    const styles=useStyles();
    const handleToggleSidebar=()=>{
        const sidebar=document.querySelector("#sidebar");
        sidebar.classList.toggle("sidebar-active");
    }
   const admin=useContext(AdminCompanyContext);
   const doSignOut=async ()=>{
    //  console.log(props)
   await admin.signout().then(res=>{
      localStorage.removeItem("token");
      props.history.push("/company/sign");
    })
    }
  return (
      <React.Fragment>
        {/* content header */}
        <button className={styles.toggleBtn +" d-block d-md-none"} onClick={handleToggleSidebar}>
          <i className="fas fa-align-left"></i>
        </button>
        <div className={styles.header}>
          <p className="m-0">
            <i className={props.icon}></i>
            <span className={styles.pagetitle}>{props.children}</span>
          </p>
          <div className={styles.userDetail}>
            {/* <button className={styles.btnSearch}>
              <i className="fas fa-search"></i>
            </button> */}
            <div className="nav-item dropdown m-0">
              <a
                className="nav-link dropdown-toggle m-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" className={styles.userimg} alt="img" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li  onClick={doSignOut}>
                  <a className="dropdown-item text-danger" href="#">
                   Sign Out
                  </a>
                </li>
              </ul>
            </div>
            {/* <button className={styles.userDetailContent}>
              <img src={img} className={styles.userimg} alt="img" />
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </button> */}
          </div>
        </div>
        {/* end of header */}
        </React.Fragment>
  );
}

export default withRouter(Header)