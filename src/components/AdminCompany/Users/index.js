import { makeStyles } from "@material-ui/core";
import React from "react";
import { useContext, useEffect, useState } from "react";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import ClipboardJS from "clipboard";
import Header from "../Header";
import { toast } from "react-toastify";
import { getBadge } from "../../../Helpers/getBadge";
const useStyles = makeStyles((t) => ({
  table: {
    width: "100%",
  },
  tr: {
    backgroundColor: "white",
    marginBottom: "7px!important",
    textAlign: "center",
    // borderRadius:"8px",
    // borderBottom:"1px solid black",
    display: "flex",
    // justifyContent:"space-around",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",

  },
  h4: {
    padding: "30px 0",
    // border:"1px solid black",
    width: "100%",
    textAlign: "center",
    [t.breakpoints.down(1000)]:{
      "&:nth-child(1)":{
        display:"none"
      },
      "&:nth-child(3)":{
display:"none"
      },
      "&:nth-child(5)":{
display:"none"
      },
      "&:nth-child(6)":{
display:"none"
      }
    }
  },
  p: {
    padding: "10px",
    textAlign: "center",
    width: "100%",
    marginBottom:"0!important",
    [t.breakpoints.down(1000)]:{
      "&:nth-child(1)":{
        display:"none"
      },
      "&:nth-child(3)":{
display:"none"
      },
      "&:nth-child(5)":{
display:"none"
      },
      "&:nth-child(6)":{
display:"none"
      }
    }
    // border:"1px solid black"
  },
}));

 function Users(props) {
  const styles = useStyles();
  const [users,setUsers]=useState([]);
  const [message,setMessage]=useState("No users yet :)");
  const admin=useContext(AdminCompanyContext);
  const fetchAll= async ()=>{
   await admin.getAllUsers().then(res=>{    
        setUsers(res.data.users);     
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    new ClipboardJS('.get');
    fetchAll();
  },[]);
  return (
    <React.Fragment>
      <Header icon="fas fa-user">Hereos</Header>
      <div className="py-4 px-3">
        <div className="btns d-flex justify-content-between">
          <button className="btn bg-success p-3" onClick={fetchAll}>
            <i className="fas fa-redo-alt"></i> Reload
          </button>
          <button className="btn bg-primary p-3" onClick={()=>{
            props.history.push("/company/users/add")
          }}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {/* <div>
                    <h4 className="my-3">
                        Showing <span className="text-blue">25</span> of <span className="text-blue">25</span>
                    </h4>
                </div> */}
        <div className="data mt-3">
          <div className={styles.table}>
            <div className={styles.tr}>
              <h4 className={styles.h4}>
                id <i className="fas fa-chevron-down text-danger"></i>
              </h4>
              <h4 className={styles.h4}>Name</h4>
              <h4 className={styles.h4}>Email</h4>
              <h4 className={styles.h4}>Link</h4>
              <h4 className={styles.h4}>Orders</h4>
              <h4 className={styles.h4}> Status</h4>
              <h4 className={styles.h4}> Action</h4>
            </div>
           {users.length > 0 ? 
              users.map(user=>(  <div key={user.id} className={styles.tr}>
                <p className={styles.p}>{user.id}</p>
                <p className={styles.p}>{user.name}</p>
                <p className={styles.p}>{user.email}</p>
  
                <p className={styles.p}><a className=" get" href="#" onClick={()=>toast("link has copied")} data-clipboard-text={"localhost:3000/delivery/"+user.uid}>GET</a></p>
                <p className={styles.p}>
                  {" "}
                  <div className="p-2 w-25 m-auto rounded text-white bg-success">
                   {user.orders}
                  </div>
                </p>
                <p className={styles.p}>
                  <div className="p-2  rounded text-white bg-primary">{getBadge(user.orders)}</div>
                </p>
                <p className={styles.p}><div className="p-2 m-auto rounded text-black bg-white border border-dark w-25" style={{cursor:"pointer"}} onClick={()=>{
                  props.history.push(`users/${user.id}`);
                }}><i className="fas fa-chevron-down"></i></div></p>
              </div>))
            : (<div className="mt-4"><h2>{message}</h2></div>)}
          </div>
          {/* end of table */}
          {/* <nav className="mt-3">
            <ul className="pagination pagination-lg">
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
               <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Users