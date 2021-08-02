// import React from 'react'
import { makeStyles } from "@material-ui/core";
import colors from "../../../Helpers/Colors";
import Header from "../Header";
const useStyles = makeStyles((t) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "calc( 100vh - 84px )",
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
    "& .active": {
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
  return (
    <div>
      <Header icon="fas fa-code">Integrate</Header>
      <div className={styles.root}>
        {/* content */}
        <div className="d-flex">
          {/* col 1 */}
          <div className={"col-3 " + styles.endpoints}>
            {/* input search */}
            <div className={styles.inputSearch}>
              <input
                className={"form-control " + styles.input}
                placeholder="search endpoint"
              />
              <i className={"fas fa-search " + styles.icon} />
            </div>
            {/* end of input search */}
            <ul className={styles.endpointsList}>
              <li className={styles.endpointsListItem}>
                <p className={styles.endpointsMethod}>POST</p>
                <p className={styles.endpointsName}>Add an Order</p>
              </li>
            </ul>
          </div>
          {/* col 2 */}
          <div className={"col-5 " + styles.parametres}>
            <div className={styles.parametresitem}>
              <div className={styles.header}>
                <div className="d-flex p-2 align-items-center">
                  <p className={styles.endpointsMethod}>POST</p>
                  <h5 className={styles.endpointsName}>Add an Order</h5>
                </div>
              </div>
              {/* end of header */}
              <div className={styles.body}>
                <form>
                  <label className={"mb-3 " + styles.titleInput}>
                    LtsAPI APP :
                  </label>
                  <select className="form-select">
                    <option>Lts Default Application 3360#2021</option>
                  </select>
                </form>
              </div>
              {/* end of body */}
            </div>
            <div className={styles.parametresitem}>
              <div className={styles.header}>
                <h5>Headers Parameter</h5>
              </div>
              {/* end of header */}
              <div className={styles.body}>
                <form>
                  <label className={"mb-3 " + styles.titleInput}>
                    API Key :
                  </label>
                  <input className="form-control mb-3" type="text" value="HJGCDZHGV121E32N?V12UYKGZDYI232842$"  readOnly />
                  <label className={"mb-3 " + styles.titleInput}>
                    API HOST :
                  </label>
                  <input className="form-control" type="text" value="https://onlinestore.com"  readOnly />
                </form>
              </div>
              {/* end of body */}
            </div>
          </div>
          {/* col 3 */}
          <div className="col-4"></div>
        </div>

        {/* end of content */}
      </div>
    </div>
  );
}
