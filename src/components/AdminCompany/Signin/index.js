import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
// import bg from '../images/bg.jpg'
const usestyle = makeStyles((t) => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "row",
    [t.breakpoints.down(500)]: {
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      //   flexDirection: "row-reverse"
    },
  },
  signin: {
    width: "40%",
    marginTop: "120px",
    display: "flex",
    //   justifyContent:"center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    [t.breakpoints.down(500)]: {
      width: "100%",
    },
  },
  h2: {
    fontWeight: "bold",
    fontSize: "3rem",
  },
  text: {
    fontWeight: "bold",
    fontSize: "1.4rem",
    margin: "10px 0 40px 0",
  },
  form: {
    textAlign: "left",
    fontSize: "1.5rem",
    width: "80%",
  },
  description: {
    width: "60%",
    backgroundImage: "url(../../images/bg.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [t.breakpoints.down(500)]: {
      display: "none",
    },
  },
  link: {
    //   margin:"50px 0 0 0",
    color: "black",
  },
  descriptionContent: {
    width: "60%",
    padding: "20px 40px",
    backgroundColor: "white",
    //   margin:"120px auto",
    borderRadius: "7px",
    [t.breakpoints.down(500)]: {
      width: "100%",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
}));
export default function Signin() {
  const styles = usestyle();
  return (
    <div className={styles.root}>
      <div className={styles.signin}>
        <h2 className={styles.h2}>Log In</h2>
        <p className={styles.text}>
          Don't Have an account ?{" "}
          <NavLink to="/company/signup" className="text-primary">
            Get LTS PRO
          </NavLink>
        </p>
        <form className={styles.form}>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control px-2 py-3 "
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control px-2 py-3"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mb-3" for="flexCheckDefault">
              Remmeber me for 2 weeks
            </label>
          </div>
          <button type="submit" className="btn w-100 p-3 bg-primary mb-4">
            Submit
          </button>
          <a href="#" className={styles.link}>
            {" "}
            Forgot password ?
          </a>
        </form>
      </div>
      {/* details */}
      <div className={styles.description}>
        {/* here we add the children */}
        <div className={styles.descriptionContent}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Introducing The User Journey</h2>
            {/* <p className="text-primary">Free !</p> */}
          </div>
          <p className="lead">
            Discover The Steps Your Visitors Take Before They Submit Your Forms,
            Without All The Complicated Analytics. With Our New User Journey
            Addon You Can Easily See The Content That’s Driving The Most
            Valuable Form Conversions, Right In Your Wordpress Dashboard.
          </p>
          <button type="submit" className=" mt-3 btn w-100 p-3 bg-primary ">
            Learn more
          </button>
        </div>
      </div>
      {/* end of details */}
    </div>
  );
}
