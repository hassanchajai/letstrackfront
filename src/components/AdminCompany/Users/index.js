// import React from 'react'
import { makeStyles } from "@material-ui/core";
// import colors from "../../../Helpers/Colors";
import Header from "../Header";
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
  },
  td: {
    padding: "30px",
    textAlign: "center",
    width: "100%",
    // border:"1px solid black"
  },

}));

export default function Users() {
  const styles = useStyles();
  return (
    <div>
      <Header icon="fas fa-user">Hereos</Header>
      <div className="py-4 px-3">
        <div className="btns d-flex justify-content-between">
          <button className="btn bg-success p-3">
            <i className="fas fa-redo-alt"></i> Reload
          </button>
          <button className="btn bg-primary p-3">
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
                Pickup Time <i className="fas fa-chevron-down text-danger"></i>
              </h4>
              <h4 className={styles.h4}>Location</h4>
              <h4 className={styles.h4}>Product</h4>
              <h4 className={styles.h4}>Spam</h4>
              <h4 className={styles.h4}>Order Id</h4>
              <h4 className={styles.h4}>Order Status</h4>
            </div>
            <div className={styles.tr}>
              <td className={styles.td}>2021-07-16</td>
              <td className={styles.td}>161 lot essalam</td>
              <td className={styles.td}>Product</td>

              <td className={styles.td}>
                <div className="p-2 w-25 m-auto rounded text-white bg-success">
                  3
                </div>
              </td>
              <td className={styles.td}>3</td>
              <td className={styles.td}>
                <div className="p-2  rounded text-white bg-success">
                  Delivred
                </div>
              </td>
            </div>
          </div>
          {/* end of table */}
          <nav className="mt-3">
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
          </nav>
        </div>
      </div>
    </div>
  );
}
