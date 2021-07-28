import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import AdminCompanyContext from "../../../../DB/AdminCompany/AdminCompanyContext";
// import AdminCompanyContext from "../../../../DB/AdminCompany/AdminCompanyContext";
import Header from "../../Header";
import Details from "./Details";
import Update from "./Update";
// import {v4 as uuid} from 'uuid'
const useStyles = makeStyles((t) => ({
  retour: {
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    border: "1px solid black",
    marginBottom: "30px",
    cursor: "pointer",
  },
}));
const ShowUser = (props) => {
  const styles = useStyles();
  const [showForm, toggleShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const [statistique, setstatistique] = useState(null);
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    toggleShowForm(!showForm);
  };
  const admin = useContext(AdminCompanyContext);
  const getUserFromId = async (id) => {
    await admin
      .getOneUser(id)
      .then((res) => {
        setUser(res.data.user);
        setstatistique(res.data.orders);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const id = props.match.params.user_id;
    getUserFromId(id);
  }, []);
  return (
    <React.Fragment>
      <Header icon="fas fa-plus">Add Hereos</Header>
      <div className="py-4 px-3">
        <div
          className={styles.retour}
          onClick={() => {
            props.history.push("/company/users");
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </div>

        {loading ? (
          <div>
            {" "}
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="mb-3">{user.name} <button className="btn bg-blue get" data-clipboard-text={"localhost:3000/delivery/"+user.uid}>GET</button></h2>

              {/* <p>32 order</p> */}
              <div className=" py-3 px-5   rounded text-white bg-primary">
                Hero
              </div>
            </div>
            <hr></hr>
            {showForm ? (
              <Update close={toggle} user={user} />
            ) : (
              <Details open={toggle} user={user} statistique={statistique} />
            )}
          </div>
        ) : (
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default ShowUser;
