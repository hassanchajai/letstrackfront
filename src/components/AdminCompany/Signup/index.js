import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
// import bg from '../images/bg.jpg'
const usestyle = makeStyles((t) => ({
  root: {
    display: "flex",
    width:"100%",
    minHeight:"100vh",
    flexDirection:"row",
    [t.breakpoints.down(500)]: {
          alignItems:"center",
          flexDirection:"column",
          textAlign:"center",
        //   flexDirection: "row-reverse"
    }
  },
  signin:{
      width:"40%",
      marginTop:"50px",
      display:"flex",
    //   justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      textAlign:"center",
      [t.breakpoints.down(500)]: {
        width:"100%",

  }
  },
  h2:{
    fontWeight:"bold",
    fontSize:"3rem"
  },
  text:{
    fontWeight:"bold",
    fontSize:"1.4rem",
    margin:"10px 0 40px 0"
  },
  form:{
      textAlign:"left",
      fontSize:"1.5rem",
      width:"80%"
  },
  description:{
    width:"60%",
    backgroundImage:'url(../../images/bg.jpg)',
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    [t.breakpoints.down(500)]: {
       display:"none"

  }
  },
  link:{
    //   margin:"50px 0 0 0",
      color:"black",

  }, 
  descriptionContent:{
      width:"60%",
      padding:"20px 40px",
      backgroundColor:"white",
    //   margin:"120px auto",
      borderRadius:"7px",
      [t.breakpoints.down(500)]: {
        width:"100%",

  }
  },
  titleContainer:{
      display:"flex",
      justifyContent:"space-between",
      marginBottom:"20px"
  }
}));
export default function Signin() {
  const [plans,setPlans]=useState([]);
  const [SelectedPlan,setPlan]=useState(1);
  const [showmodal,toogleModal]=useState(false);
  const selectItem=()=>{

  };
  const togglePlans=()=>{
    toogleModal(!showmodal);
  }
  const styles = usestyle();
  return (
    <div className={styles.root}>
      <div className={styles.signin}> 
        <h2 className={styles.h2}>Create Account</h2>
        <p className={styles.text}>
        Already have an account ?  <NavLink to="/company/sign" className="text-primary">Login Now</NavLink>
        </p>
        <form className={styles.form}>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control px-2 py-3 "
              id="exampleFormControlInput1"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="email"
              className="form-control px-2 py-3 "
              id="exampleFormControlInput1"
              placeholder="Last Name"
            />
          </div>
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
      
          <button type="submit" className="btn w-100 p-3 bg-primary mb-4">
                Submit
            </button>
        </form>
      </div>
      {/* details */}
      <div className={styles.description}>
          {/* here we add the children */}
          <div className={styles.descriptionContent}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>LTSTRACK Premium</h2>
                <p className="text-primary">Free !</p>
            </div>
            <ul className={"p-0"}>
                <li className="d-flex align-items-center mb-3">
                    <span className={"bg-secondary text-primary p-1 rounded mr-2"}><i className="fas fa-check"></i></span>
                    <h4 className="my-0 mx-2">1 User</h4>
                </li>
                <li className="d-flex align-items-center mb-3">
                    <span className={"bg-secondary text-primary p-1 rounded mr-2"}><i className="fas fa-check"></i></span>
                    <h4 className="my-0 mx-2">Unlimited Requests</h4>
                </li>
                <li className="d-flex align-items-center mb-3">
                    <span className={"bg-secondary text-primary p-1 rounded mr-2"}><i className="fas fa-check"></i></span>
                    <h4 className="my-0 mx-2">1000 Order</h4>
                </li>
                <li className="d-flex align-items-center mb-3">
                    <span className={"bg-secondary text-primary p-1 rounded mr-2"}><i className="fas fa-check"></i></span>
                    <h4 className="my-0 mx-2">Showing Spams</h4>
                </li>
                <li className="d-flex align-items-center mb-3">
                    <span className={"bg-secondary text-primary p-1 rounded mr-2"}><i className="fas fa-check"></i></span>
                    <h4 className="my-0 mx-2">Dashboard</h4>
                </li>
                <li className="d-flex align-items-center mb-3">
                    <span className={"bg-secondary text-primary p-1 rounded mr-2"}><i className="fas fa-check"></i></span>
                    <h4 className="my-0 mx-2">RealTime</h4>
                </li>
            </ul>
            <button type="submit" className=" mt-3 btn w-100 p-3 bg-primary " onClick={()=>{
              togglePlans();
            }}>
                Select a Plan
            </button>
          </div>
      </div>
      {/* end of details */}
      {
          showmodal ? <Modal close={togglePlans}/> : null
      }
    </div>
  );
}
