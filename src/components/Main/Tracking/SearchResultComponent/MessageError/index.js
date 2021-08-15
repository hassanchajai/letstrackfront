import React from 'react'

export const MessageError = ({msg,styles}) => {
    return (
        <div className={styles.logoContainer}>
            {/* <h3>Sorry</h3> */}
           <p className={styles.logoContainerP}>{msg}</p> 
        </div>
    )
}
