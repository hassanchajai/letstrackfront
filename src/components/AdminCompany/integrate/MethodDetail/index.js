import React from "react";

export const MethodDetail = ({ styles, CurrentMethod,App }) => {
  return (
    <React.Fragment>
      {CurrentMethod ? (
        <div className={"col-5 " + styles.parametres}>
          <div className={styles.parametresitem}>
            <div className={styles.header}>
              <div className="d-flex p-2 align-items-center">
                <p className={styles.endpointsMethod}>{CurrentMethod.method}</p>
                <h5 className={styles.endpointsName}>{CurrentMethod.name}</h5>
              </div>
            </div>
            {/* end of header */}
            <div className={styles.body}>
              <form>
                <label className={"mb-3 " + styles.titleInput}>
                  LtsAPI APP :
                </label>
                <input
                      className="form-control mb-3"
                      type="text"
                      value={App}
                      readOnly
                    />
                  
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
                {CurrentMethod.headers.map((header) => (
                  <React.Fragment>
                    <label className={"mb-3 " + styles.titleInput}>
                      {header.name} :
                    </label>
                    <input
                      className="form-control mb-3"
                      type="text"
                      value={header.defaultValue}
                      readOnly
                    />
                  </React.Fragment>
                ))}
              </form>
            </div>
            {/* end of body */}
          </div>
          {
              CurrentMethod.body.length >0 ? (   <div className={styles.parametresitem}>
                <div className={styles.header}>
                  <h5>Body Parameter</h5>
                </div>
                {/* end of header */}
                <div className={styles.body}>
                  <form>
                    {CurrentMethod.body.map((item) => (
                      <React.Fragment>
                        <label className={"mb-3 " + styles.titleInput}>
                          {item.name} :
                        </label>
                        <input
                          className="form-control mb-3"
                          type="text"
                          value={item.defaultValue}
                          readOnly
                        />
                      </React.Fragment>
                    ))}
    
           
    
                  </form>
                </div>
                {/* end of body */}
              </div>
            ): null
          }
       </div>
      ) : null}
    </React.Fragment>
  );
};
