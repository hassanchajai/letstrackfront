import React, { useContext, useEffect, useState } from "react";
import AdminCompanyContext from "../../../DB/AdminCompany/AdminCompanyContext";
import ProfilContext from "../../../DB/ProfilContext";
import Header from "../Header";

export default function Profil() {
  const user=useContext(ProfilContext);
  const [nameCompany,setNameCompany]=useState("");
  const [City,setCity]=useState("");
  const [Country,setCountry]=useState("");
  const [Site,setSite]=useState("");
  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [email,setemail]=useState("");
  // errors
  const [ErrorsCompanyDetai,setErrorsCompanyDetail]=useState("");

  // end of errors
  const admin =useContext(AdminCompanyContext);

  useEffect(()=>{
  if(user.profil){
    setNameCompany(user.profil.company.name);
    setCountry(user.profil.company.country)
    setSite(user.profil.company.site)
    setCity(user.profil.company.address)
    // firstname lastname,email
    setfirstname(user.profil.user.firstname)
    setlastname(user.profil.user.lastname)
    setemail(user.profil.user.email)
  }
  },[user]);
 const handleOnSumbitUpdateDetail=e=>{
  e.preventDefault();
  admin.updateDetail({
    nameCompany,City,Country,Site
  }).then(res=>{
    if(res.data.status){
      setErrorsCompanyDetail(res.data.errors)
      return true;
    }
    else{
      alert(res.data.message);
    }
  });
  }

  return (
    <div>
      <Header icon="fab fa-first-order">Orders</Header>
      <div className="py-4 px-3">
        <h1 className="h3 mb-3">Settings</h1>

        <div className="row">
          <div className="col-md-3 col-xl-2">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Profil Settings</h5>
              </div>

              <div className="list-group list-group-flush" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  data-bs-toggle="list"
                  href="#account"
                  role="tab"
                >
                  Account
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-bs-toggle="list"
                  href="#password"
                  role="tab"
                >
                  Password
                </a>
         </div>
            </div>
          </div>

          <div className="col-md-9 col-xl-10">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
              >
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Public info</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleOnSumbitUpdateDetail}>
                      <div className="row">
                        <div className="col-md-8">
                        <div className="mb-3">
                        <label className="form-label" for="inputAddress">
                          Name Company
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                          value={nameCompany}
                          onChange={e=>setNameCompany(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputAddress2">
                          Country 
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                          value={Country}
                          onChange={e=>setCountry(e.target.value)}
                       
                      />
                      </div>
                      
                        <div className="mb-3 ">
                          <label className="form-label" for="inputCity">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            value={City}
                            onChange={e=>setCity(e.target.value)}
                         
                          />
                        </div>
                        <div className="mb-3 ">
                          <label className="form-label" for="inputState">
                            Site
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            value={Site}
                            onChange={e=>setSite(e.target.value)}
                         
                          />
                        </div>
                    
                      
                  </div>
                        {/* <div className="col-md-4">
                          <div className="text-center">
                            <img
                              alt="Charles Hall"
                              src="img/avatars/avatar.jpg"
                              className="rounded-circle img-responsive mt-2"
                              width="128"
                              height="128"
                            />
                            <div className="mt-2">
                              <span className="btn bg-primary">Upload</span>
                            </div>
                            <small>
                              For best results, use an image at least 128px by
                              128px in .jpg format
                            </small>
                          </div>
                        </div> */}
                      </div>

                      <button type="submit" className="btn bg-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Private info</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label className="form-label" for="inputFirstName">
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputFirstName"
                            placeholder="First name"
                            value={firstname}
                            onChange={e=>setfirstname(e.target.value)}
                         
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" for="inputLastName">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputLastName"
                            placeholder="Last name"
                            value={lastname}
                            onChange={e=>setlastname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputEmail4">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                          value={email}
                            onChange={e=>setemail(e.target.value)}
                        />
                      </div>
                 <button type="submit" className="btn bg-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="password" role="tabpanel">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Password</h5>

                    <form>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="inputPasswordCurrent"
                        >
                          Current password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordCurrent"
                        />
                       
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputPasswordNew">
                          New password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordNew"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputPasswordNew2">
                          Verify password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordNew2"
                        />
                      </div>
                      <button type="submit" className="btn bg-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
