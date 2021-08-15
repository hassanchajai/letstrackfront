import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import withAdminCompany from "../../../HOC/withAdminCompany";
import withAuth from "../../../HOC/withAuth";
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
    marginTop: "50px",
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
 function SignUp(props) {
  const admin = useContext(AdminCompanyContext);
  // for selected plans
  const [plans, setPlans] = useState([
    {
      id: 0,
      title: "Lite Licence",
      price: 0,
      Features: [
        "1 User",
        "Unlimited Requests",
        "1000 Order",
        "Dashboard",
        "Realtime",
      ],
    },
    {
      id: 1,
      title: "Pro Licence",
      price: 100,
      Features: [
        "1 User",
        "Unlimited Requests",
        "1000 Order",
        "Dashboard",
        "Realtime",
      ],
    },
    {
      id: 2,
      title: "Plus Licence",
      price: 176,
      Features: [
        "Unlimited User",
        "Unlimited Requests",
        "Unlimited Order",
        "Showing Spams",
        "Dashboard",
        "Realtime",
      ],
    },
  ]);
  const [SelectedPlan, setPlan] = useState(0);
  // end of plans
  // inputs
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);
  // check if inputs are valid
  const invalide =
    confirmPassword !== password ||
    email === "" ||
    firstname === "" ||
    lastname === "";
  // end of inputs
  const [showmodal, toogleModal] = useState(false);

  const togglePlans = () => {
    toogleModal(!showmodal);
  };
  const SelectAnItem = (i) => {
    setPlan(i);
    togglePlans();
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    admin
      .register(email, password, firstname, lastname, "logo", SelectedPlan + 1)
      .then((res) => {
        // console.log(res);
        if(!res.data.errors){
              props.history.push({
          pathname: "/company/sign",
          state: {
            email: res.data.user.email,
          },
        });

        }
        setErrors(res.data.errors);
    
      })
     
  };
  const styles = usestyle();
  return (
    <div className={styles.root}>
      <div className={styles.signin}>
        <h2 className={styles.h2}>Create Account</h2>
        <p className={styles.text}>
          Already have an account ?
           <NavLink to="/company/sign" className="text-primary">
             Login Now
          </NavLink>
        </p>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              value={firstname}
              type="text"
              className="form-control px-2 py-3 "
              id="exampleFormControlInput1"
              placeholder="First Name"
              onChang
              onChange={(e) => setFirstname(e.target.value)}
            />
              {/* {!(errors && errors.firstname) ? null : (
              <div className="text-danger my-3">{errors.firstname}</div>
            )} */}
          </div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              value={lastname}
              type="text"
              className="form-control px-2 py-3 "
              id="exampleFormControlInput1"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
              {!(errors && errors.lastname) ? null : (
              <div className="text-danger my-3">{errors.lastname}</div>
            )}
          </div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              type="email"
              className="form-control px-2 py-3 "
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {!(errors && errors.email) ? null : (
              <div className="text-danger my-3">{errors.email}</div>
            )}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control px-2 py-3"
              id="exampleFormControlInput1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
              {!(errors && errors.password) ? null : (
              <div className="text-danger my-3">{errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              type="password"
              className="form-control px-2 py-3"
              id="exampleFormControlInput1"
              placeholder="Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={invalide}
            className="btn w-100 p-3 bg-primary mb-4"
          >
            Submit
          </button>
        </form>
      </div>
      {/* details */}
      <div className={styles.description}>
        {/* here we add the children */}
        <div className={styles.descriptionContent}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{plans[SelectedPlan].title}</h2>
            <p className="text-primary">{plans[SelectedPlan].price}$</p>
          </div>
          <ul className={"p-0"}>
            {plans[SelectedPlan].Features.map((item) => (
              <li className="d-flex align-items-center mb-3">
                <span className={"bg-secondary text-primary p-1 rounded mr-2"}>
                  <i className="fas fa-check"></i>
                </span>
                <h4 className="my-0 mx-2">{item}</h4>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className=" mt-3 btn w-100 p-3 bg-primary d-none"
            onClick={() => {
              togglePlans();
            }}
          >
            Select a Plan
          </button>
        </div>
      </div>
      {/* end of details */}
      {showmodal ? (
        <Modal close={togglePlans} plans={plans} setPlan={SelectAnItem} />
      ) : null}
    </div>
  );
}
export default withAdminCompany(SignUp)