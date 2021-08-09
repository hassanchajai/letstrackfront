import React from "react";
const withloading =
  (Component) =>
  ({ loading, ...rest }) => {
    return (
      <React.Fragment>
        {loading ? (
          <Component {...rest} />
        ) : (
          <div className="min-height-100 d-flex justify-content-center align-items-center">
            <div class="spinner-border text-primary display-4" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  export default withloading