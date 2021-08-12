import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import AdminCompanyContext from "../DB/AdminCompany/AdminCompanyContext";
import ProfilContext from "../DB/ProfilContext";
// import { Component } from 'react'

const withAuth = (Component) => {
  const Withauth = (props) => {
    const [user, setUser] = useState(null);
    const admin = useContext(AdminCompanyContext);
    const next = (res) => setUser(res.data);
    const fallback = (res) => {
      localStorage.removeItem("token");
      props.history.push("/company/sign");
    };
    const getProfilFromToken = async () =>
      await admin.profil().then(next).catch(fallback);
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        props.history.push("/company/sign");
      }
      getProfilFromToken();
      // props.children.props.history.push("/company/dash");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <ProfilContext.Provider value={{ profil: user }}>
        <Component {...props} />
      </ProfilContext.Provider>
    );
  };
  return withRouter(Withauth);
};

export default withAuth;
