import React from 'react'
import img from './404.gif'
export default function NotFound() {
    return (
        <div >
            <img src={img} style={{width:"100%",maxHeight:"100vh"}} alt="404"/>
        </div>
    )
}
