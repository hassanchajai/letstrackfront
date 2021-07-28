import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import AdminCompanyContext from "../../../../../DB/AdminCompany/AdminCompanyContext";
import {v4 as uuid} from 'uuid'
import { withRouter } from "react-router";
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
    cursor:"pointer",
    float:"right",
    clear:"both"

  },
}));
const AddUser = ({user,close,history}) => {
  const styles = useStyles();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [image, setImage] = useState(null);
  const [errors,setErrors]=useState(null);
  const admin=useContext(AdminCompanyContext);
  useEffect(()=>{
  
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setId(user.id);
  },[]);
  const handleOnSubmit =async (e) => {
    e.preventDefault();
  await  admin.UpdateUser(id,name,phone,email).then(res=>{
    history.push("/company/users"); 
  }).catch(err=>{
    setErrors(err);

  })
  // console.log(errors)
  };
  const invalid = name === "" || email === "" || phone === "" ;
  return (
    <React.Fragment>   
       <div
          className={styles.retour}
          onClick={close}
        >
          x
        </div>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            value={email}

            onChange={(e) => setEmail(e.target.value)}
          />
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
            value={phone}

            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          {/* <label for="exampleFormControlInput1" className="form-label">
            Image
          </label> */}
          {/* <input
            type="file"
            className="form-control p-3"
            id="exampleFormControlInput1"
            multiple
            onChange={(e) => setImage(e.target.files)}
          /> */}
        </div>
        {/* <div className="text-danger mb-3">Message Error</div> */}
        <button
          type="submit"
          className="btn bg-success py-3 px-4"
          disabled={invalid}
        >
          Submit
        </button>
        </form>
 </React.Fragment>
  );
};
export default withRouter(AddUser);
