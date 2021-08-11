import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import colors from "../../../Helpers/Colors";
import "aos/dist/aos.css";
// import { OrdersJournal } from "../../OrdersJournal";
import Aos from "aos";
import UserContext from "../../../DB/User/UserContext";
import  SearchResultComponent from "./SearchResultComponent";

const useStyles = makeStyles((t) => {
  return {
    root: {
      minHeight: "calc( 100vh - 86px ) ",
    },
    tracking: {
      display: "flex",
    },
    trackingDetails: {
      padding: "30px 0",
    },
    listDetails: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
    },
    listDetailsItem: {
      marginRight: "50px",
      position: "relative",
      cursor: "pointer",
      "&::before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 4 + "px",
        width: 0 + "%",
        transition: ".6s",
      },
      "&:hover::before": {
        width: "100%",
      },
      "&:nth-child(1)::before": {
        backgroundColor: "black",
      },
      "&:nth-child(2)::before": {
        backgroundColor: "black",
      },
      "&:nth-child(3)::before": {
        backgroundColor: colors.primary,
      },
      "&:nth-child(4)::before": {
        backgroundColor: colors.success,
      },
      "&:nth-child(5)::before": {
        backgroundColor: colors.danger,
      },
      [t.breakpoints.down("md")]: {
        marginRight: "20px",
      },
    },
    listDetailsItemTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    listDetailsItemCount: {
      marginLeft: "5px",
    },
    listOrderShow: {
      listStyle: "none",
      marginTop: "30px",
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
      // backgroundColor:"Gray",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      marginRight: "35px",
    },
    listDetailsItemMessage: {
      marginLeft: "30px",
      fontSize: "1.4rem",
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
function Tracking() {
  const [searchNumber, setSearchNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState("");
  // const [status,setStatus]=useState(null);
  const user = useContext(UserContext);
  const handleOnSubmitFormSearch = async (e) => {
    e.preventDefault();
    setSearchResult({});
    setLoading(false);
    await user.search(searchNumber).then((res) => {
      setSearchResult(res.data);
      setLoading(true);
    });
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const styles = useStyles();
  return (
    <div className={styles.root + " row m-0 flex-wrap"}>
      <div className="col-12 col-md-8 py-3">
        {searchResult ? (
          <SearchResultComponent styles={styles} result={searchResult} loading={loading}/>
        ) : (
          <div> LTS LET'S TRACK EVERTHING</div>
        )}
      </div>
      <div
        className={styles.secondCol + " col-12 col-md-4 bg-white"}
        id="search"
      >
        <form onSubmit={handleOnSubmitFormSearch}>
          <div className={styles.containerInput}>
            <textarea
              className={styles.inputSearch}
              minLength="10"
              placeholder="1. Enter up to 10 tracking numbers"
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
            />
            <i className={styles.iconInput + " fas fa-trash"}></i>
          </div>
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>
        {searchResult && searchResult.status &&  searchResult.company ? (
          <div className="d-none d-md-block">
            <p> Information About Company</p>
            <ul>
              <li>Name: {searchResult.company.name}</li>
              <li>Address: {searchResult.company.address}</li>
              <li>Site: {searchResult.company.site}</li>
              <li>Country: {searchResult.company.country}</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Tracking;
