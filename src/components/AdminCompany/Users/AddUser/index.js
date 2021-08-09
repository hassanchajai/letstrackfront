import { makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import AdminCompanyContext from "../../../../DB/AdminCompany/AdminCompanyContext";
import Header from "../../Header";
import { v4 as uuid } from "uuid";
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
const AddUser = (props) => {
  const styles = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);
  const admin = useContext(AdminCompanyContext);
  const handleOnSubmit = async (e) => {
  //  setErrors(null)
    e.preventDefault();
    let formData = new FormData();
    //Adding files to the formdata
    formData.append("uid", uuid());
    formData.append("image", image);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    await admin.InsertUser(formData).then((res) => {
      if (!res.data.errors) {
        props.history.push("/company/users");
      }
      setErrors(res.data.errors);  
    });
  };
  const invalid = name === "" || email === "" || phone === "";
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
        <h2 className="mb-3">Add a new hero from here : </h2>
        <hr></hr>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              min="6"
              className="form-control p-3"
              id="exampleFormControlInput1"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {!(errors && errors.name) ? null : (
              <div className="text-danger my-3">{errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control  p-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {!(errors && errors.email) ? null : (
              <div className="text-danger my-3">{errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control  p-3"
              id="exampleFormControlInput1"
              placeholder="+212*********"
              onChange={(e) => setPhone(e.target.value)}
            />
            {!(errors && errors.phone) ? null : (
              <div className="text-danger my-3">{errors.phone}</div>
            )}

            {/* {!errors ? null : errors["email"] } */}
          </div>
          {/* <div className="mb-4">
          <label for="exampleFormControlInput1" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control p-3"
            id="exampleFormControlInput1"
            multiple
            onChange={(e) => setImage(e.target.files)}
          />
        </div> */}
          {/* <div className="text-danger mb-3">Message Error</div> */}
          <button
            type="submit"
            className="btn bg-success py-3 px-4"
            disabled={invalid}
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default AddUser;
