import React from 'react'
import AdminCompanyClass from '../DB/AdminCompany/adminCompany'
import AdminCompanyContext from '../DB/AdminCompany/AdminCompanyContext'

const withAdminCompany=Component=>props=>{
    return (
        <AdminCompanyContext.Provider value={new AdminCompanyClass()}>
            <Component {...props}  />
        </AdminCompanyContext.Provider>
    )
}
export default withAdminCompany