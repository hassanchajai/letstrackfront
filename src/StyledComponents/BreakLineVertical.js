import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width:2+"px",
        height:25+"px",
        borderRadius:4+"px",
        margin:"0 20px"
    },
  });


function BreakLine({bg}) {
    const styles=useStyles();
    return (
        <div className={styles.root +" "+ bg}>
        </div>
    )
}

export default BreakLine
