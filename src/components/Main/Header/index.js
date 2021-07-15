import React from "react";
import BreakLine from "../../../StyledComponents/BreakLineVertical";
import { makeStyles } from "@material-ui/styles";
import colors from "../../../Helpers/Colors";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    boxShadow: "0 2px 9px 0 rgba(0,0,0,.2)",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 2.5 + "rem",
    letterSpacing: "5px",
  },
  sublogo: {
    color: colors.primary,
  },
  userIcon: {
    backgroundColor: colors.light,
    borderRadius: "50px",
    padding: "10px 40px",
    position: "relative",
    cursor: "pointer",
    marginTop: "8px",
  },
  circle: {
    position: "absolute",
    right: "0",
    bottom: "0",
    padding: "5px",
    backgroundColor: colors.primary,
    borderRadius: "50px",
  },
});

function Header() {
  const styles = useStyles();
  const handleClick = (e) => {
    const search = document.querySelector("#search");
    if (search.style.display === "block") search.style.display = "none";
    else search.style.display = "block";
  };
  return (
    <nav
      className={styles.navbar + " navbar navbar-expand navbar-light bg-white"}
    >
      <div className="container-fluid mx-5">
        <NavLink className={styles.logo + " navbar-brand"} to="/">
          <span className={styles.sublogo + " sublogo"}>LTS</span>TRACK
        </NavLink>
        <div className="d-none d-md-flex">
          <BreakLine bg="bg-secondary" />
          <span>PARCEL TRACKING FOR CASH ON DELIVERY</span>
        </div>

        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
        <div
          className="collapse navbar-collapse align-items-center justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav mr-auto align-items-center">
            <Link to="/company/" className=" nav-link d-none d-md-block ">
              Space Company
            </Link>
            <p
              onClick={handleClick}
              className={styles.userIcon + " nav-link d-block d-md-none"}
              aria-current="page"
              href="#"
            >
              <i className="fas fa-search"></i>{" "}
              <span className={styles.circle}></span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
