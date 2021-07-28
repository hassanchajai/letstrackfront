import { makeStyles } from "@material-ui/core";
import formatDistance from "date-fns/formatDistance";
import React, { useContext } from "react";
import { withRouter } from "react-router";
import AdminCompanyContext from "../../../../../DB/AdminCompany/AdminCompanyContext";
import colors from "../../../../../Helpers/Colors";
import { v4 as uid } from "uuid";
const useStyles = makeStyles((t) => ({
  statistique: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "0!important",
    [t.breakpoints.down(925)]: {
      display: "block",
    },
  },
  statistiqueItem: {
    backgroundColor: "white",
    padding: "35px 30px",
    borderRadius: "3px",
    width: "23%",
    [t.breakpoints.down(925)]: {
      width: "100%",
      margin: "20px 0",
    },
  },
  statistiqueItemDetail: {
    display: "flex",
    justifyContent: "space-between",
  },
  statistiqueItemDetailIcon: {
    borderRadius: "50px",
    backgroundColor: colors.success,
    alignSelf: "center",
    padding: "18px",
    color: "white",
  },
}));
const Details = ({ open, user, statistique, history }) => {
  const styles = useStyles();
  const admin = useContext(AdminCompanyContext);
  const handleDeleteUser = () => {
    // console.log(admin)
    admin.DeleteUser(user.id).then((res) => {
      history.push("/company/users/");
    });
  };
  const handleRefreshToken = async (e) => {
    await admin
      .refreshUid(user.id, uid())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      });
  };
  return (
    <React.Fragment>
      {/* about */}
      <ul className={styles.statistique}>
        <li className={styles.statistiqueItem}>
          <div className={styles.statistiqueItemDetail}>
            {/* statisqtique details */}
            <div>
              <h3 className="mb-2">Completed</h3>
              <p>{statistique.ordersCompleted}</p>
            </div>
            {/* icon container */}
            <div className={styles.statistiqueItemDetailIcon}>
              <i className="fas fa-home"></i>
            </div>
            {/* end icon container */}
          </div>
          {/* percent */}

          {/* end of percent */}
        </li>
        {/* end of list item */}
        <li className={styles.statistiqueItem}>
          <div className={styles.statistiqueItemDetail}>
            {/* statisqtique details */}
            <div>
              <h3 className="mb-2">Process</h3>
              <p>{statistique.ordersProcessing}</p>
            </div>
            {/* icon container */}
            <div className={styles.statistiqueItemDetailIcon + " bg-primary"}>
              <i className="fas fa-home"></i>
            </div>
            {/* end icon container */}
          </div>
          {/* percent */}

          {/* end of percent */}
        </li>
        {/* end of list item */}
        <li className={styles.statistiqueItem}>
          <div className={styles.statistiqueItemDetail}>
            {/* statisqtique details */}
            <div>
              <h3 className="mb-2">Cancelled</h3>
              <p>{statistique.ordersCancelled}</p>
            </div>
            {/* icon container */}
            <div className={styles.statistiqueItemDetailIcon + " bg-danger"}>
              <i className="fas fa-home"></i>
            </div>
            {/* end icon container */}
          </div>
          {/* percent */}

          {/* end of percent */}
        </li>
        {/* end of list item */}
        <li className={styles.statistiqueItem}>
          <div className={styles.statistiqueItemDetail}>
            {/* statisqtique details */}
            <div>
              <h3 className="mb-2">En Delivery</h3>
              <p>{statistique.ordersEnDelivery}</p>
            </div>
            {/* icon container */}
            <div className={styles.statistiqueItemDetailIcon + " bg-blue"}>
              <i className="fas fa-home"></i>
            </div>
            {/* end icon container */}
          </div>
          {/* percent */}

          {/* end of percent */}
        </li>
        {/* end of list item */}
      </ul>
      {/* end of about */}
      <div class="card mb-3 py-5">
        <div class="row g-0">
          <div class="col-md-4 d-flex justify-content-between align-items-center flex-column">
            {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
              alt="ez"
              width="100"
              height="100"
              className="mt-3"
            />
            <p>Hero</p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">{user.name}</h4>
              <p className="text-success">Delivery man</p>
              <p class="card-text">Phone : {user.phone}</p>
              <p class="card-text">Email : {user.email}</p>
              <p class="card-text">
                created at{" "}
                <small class="text-muted">
                  {formatDistance(new Date(user.created_at), new Date(), {
                    addSuffix: false,
                  })}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn bg-primary py-4 px-5 " onClick={open}>
        Update
      </button>
      <button
        className="btn bg-danger py-4 px-5 mx-3"
        onClick={handleDeleteUser}
      >
        Delete
      </button>
      <button className="btn bg-blue py-4 px-5 " onClick={handleRefreshToken}>
        refresh Url
      </button>
    </React.Fragment>
  );
};
export default withRouter(Details);
