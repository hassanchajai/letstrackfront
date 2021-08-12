import { makeStyles } from "@material-ui/core";
import colors from "../../../Helpers/Colors";
import Header from "../Header";
// import hljs from "highlight.js";
import 'highlight.js/styles/github.css';
import { useContext, useEffect, useState } from "react";
import { ListMethods } from "./ListMethods";
import { MethodDetail } from "./MethodDetail";
import { SnippetCode } from "./SnippetCode";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import React from "react";
const useStyles = makeStyles((t) => ({
  root: {
    minHeight: "calc( 100vh - 84px )",
    borderTop:"1px solid black"
  },
  inputSearch: {
    margin: "0",
    padding: "10px 20px",
    backgroundColor: colors.gray,
    position: "relative",
    borderBottom: "1px solid black",
  },
  input: {
    paddingLeft: "26px",
  },
  icon: {
    position: "absolute",
    top: "22px",
    left: "26px",
  },
  endpoints: {
    // border:"1px solid gray"
  },
  endpointsList: {
    listStyle: "none",
    padding: "0",
  },
  endpointsListItem: {
    display: "flex",
    alignItems: "center",
    cursor:"pointer",
    // backgroundColor:colors.gray,
    justifyContent: "",
    padding: "10px 30px",
    borderTop: "1px solid gray",
    "&:first-child": {
      borderTop: "none",
    },
    "&:hover": {
      backgroundColor: colors.gray,
    },
    "&.active": {
      backgroundColor: colors.gray,
    },
  },
  endpointsMethod: {
    padding: "8px",
    backgroundColor: colors.blue,
    color: "white",
    marginRight: "15px",
    borderRadius: "4px",
  },
  parametres: {
    borderLeft: "1px solid " + colors.black,
    borderRight: "1px solid " + colors.black,
  },
  header: {
    backgroundColor: colors.gray,
    padding: "10px",
  },
  body: {
    padding: "30px",
  },
  titleInput: {
    fontSize: "1.3rem",
    fontWeight: "500",
  },
}));

export default function Integrate() {
  const styles = useStyles();
  const [methods,setMethods]=useState(null);
  const [selectedMethod,setSelectedMethod]=useState(0);
  const admin=useContext(AdminCompanyContext);

  useEffect(()=>{
    admin.getSnippets().then(res=>setMethods(res.data))
    // setMethods(endpoints);
  },[]);
  return (
    <React.Fragment>
      <Header icon="fas fa-code">Integrate</Header>
 {
    methods ? (  <div>
      
      <div className={styles.root}>
        {/* content */}
        <div className="d-block d-md-flex min-height-100">
          {/* col 1 */}
          <div className={"col-12 col-md-3 " + styles.endpoints}>
            {/* input search */}
            <div className={styles.inputSearch+" d-none"}>
              <input
                className={"form-control " + styles.input}
                placeholder="search endpoint"
              />
              <i className={"fas fa-search " + styles.icon} />
            </div>
            <div className={styles.inputSearch}>
              <h5>List of methods</h5>
            </div>
            {/* end of input search */}
            <ListMethods  styles={styles} setSelectedMethod={setSelectedMethod} selectedMethod={selectedMethod} methods={methods.methods}/>
          </div>
          {/* col 2 */}
          <MethodDetail  styles={styles} CurrentMethod={methods.methods[selectedMethod]} App={methods.name}/>
        {/* col 3 */}
        <SnippetCode  styles={styles} CurrentMethod={methods.methods[selectedMethod]}/>
       </div>

        {/* end of content */}
      </div>
    </div>) : (<div className="min-height-100 d-flex justify-content-center align-items-center"><div class="spinner-border text-primary display-4" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>)
  }
    </React.Fragment>
 

  );
}
