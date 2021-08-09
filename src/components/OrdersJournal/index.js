import { colors, makeStyles } from "@material-ui/core";
// import Aos from "aos";
import React from "react";
import { Item } from "./Item";
const useStyles = makeStyles((t) => {
  return {
    listOrderShow: {
      listStyle: "none",
      marginTop: "30px",
      padding: "0!important",
    },
    listOrderShowItem: {
      padding: 20 + "px",
      backgroundColor: "white",
      boxShadow: "0 2px 6px rgba(0,0,0,.2)",
      display: "flex",
      marginTop: "15px",
      flexWrap: "wrap",
      transition: ".5s",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)!important",
      },
      // alignItems:"center"
    },
    listOrderShowItemIcon: {
      padding: "10px 20px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      marginRight: "35px",
    },
    listDetailsItemMessage: {
      marginLeft: "30px",
      fontSize: "0.9rem",
    },
    containerInput: {
      position: "relative",
    },
    inputSearch: {
      width: 100 + "%",
      height: 300 + "px",
      outline: "none",
      border: "3px solid black",
      resize: "none",
      padding: "10px 20px",
      fontSize: "1.4rem",
      backgroundColor: "white",
      borderRadius: "3px",
    },
    iconInput: {
      position: "absolute",
      bottom: "20px",
      right: "17px",
      padding: " 20px",
      backgroundColor: colors.light,
      color: "black",
      borderRadius: "5px",
      transition: ".5s",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    btn: {
      width: "100%",
      padding: "5px 0",
      backgroundColor: colors.primary,
      border: "none",
      fontSize: 1.3 + "rem",
      color: "black",
      textTransform: "uppercase",
      margin: "10px 0",
      borderRadius: "6px",
    },
    secondCol: {
      padding: "40px",
      [t.breakpoints.down(700)]: {
        padding: "10px",
        borderBottomLeftRadius: "4px",
        position: "absolute",
        right: "28px",
        maxWidth: "350px",
        maxHeight: "",
        overflow: "hidden",
        // marginTop:"10px",
        transition: ".6s",
      },
      info: {
        fontSize: "40rem",
        [t.breakpoints.down(800)]: {
          display: "none",
        },
      },
    },
  };
});

export const OrdersJournal = ({ journals,apply }) => {
  const styles = useStyles();
  return (
    <div>
      <ul className={styles.listOrderShow}>
        {journals.map((item) => (
          <Item styles={styles} item={item} key={item.id} apply={apply}/>
        ))}
      </ul>
    </div>
  );
};
