import { makeStyles } from "@material-ui/core";
import React from "react";
import colors from "../../../../Helpers/Colors";

const useStyle = makeStyles((t) => ({
  root: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    transition: ".5s",
  },
  modal: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    position: "relative",
    borderRadius: "5px",
    padding: "80px 60px",
    [t.breakpoints.down(1285)]: {
      flexDirection: "column",
      width: "100%",
      height: "100%",
      padding: "0",
    },
  },
  close: {
    position: "absolute",
    top: "20px",
    right: "25px",
    zIndex: "99",
  },
  card: {
    backgroundColor: colors.primary,
    borderRadius: "4px",
    textAlign: "center",
    padding: "50px 90px",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [t.breakpoints.down(1285)]: {
      marginBottom: "20px",
      "&:last-child": {
        marginBottom: "0px",
      },
    },
  },
}));
export default function Modal({ setPlan, plans, close }) {
  const styles = useStyle();

  return (
    <div className={styles.root} onClick={e=>{e.stopPropagation();close();}}>
      <div className={styles.modal} >
        <button className={styles.close + " btn bg-danger"} onClick={close}>
          x
        </button>
        {plans.map((plan) => (
          <div className={styles.card} key={plan.id}>
            <h2 className="mb-4">
                   {plan.title.split(" ")[0]  }
                   <br/>
                   {plan.title.split(" ")[1]  }
            </h2>
            <div className={styles.cardprice}>
              <h3>{plan.price}$</h3>
              <p className="font-italic">Per Year</p>
            </div>
            <button className="btn bg-white" onClick={()=>setPlan(plan.id)}>Select</button>
          </div>
        ))}

      </div>
    </div>
  );
}
