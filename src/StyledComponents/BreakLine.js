import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width:320+"px",
        height:9+"px",
        backgroundColor:"pink",
        margin:"25px auto",
        borderRadius:4+"px"
    },
  });


function BreakLine() {
    const styles=useStyles();
    return (
        <div className={styles.root}>
        </div>
    )
}

export default BreakLine
