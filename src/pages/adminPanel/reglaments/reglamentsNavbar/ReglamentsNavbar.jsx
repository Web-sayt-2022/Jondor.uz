import React from "react";
import { NavLink } from "react-router-dom";

const ReglamentsNavbar = () => {
  return (
    <>
      <li className="nav-item" >
        <NavLink exact to="/admin/hotline" className="nav-link " activeclassname='NavLinkLi' style={{ marginLeft: "20px" }}>
          <i className="icon-plus2 mr-1 sx-none"></i> Ishonch telefoni
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink exact to="/admin/general_settings" className="nav-link " activeclassname='NavLinkLi'>
          <i className="icon-plus2 mr-1 sx-none"></i> Umumiy bo'lim
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink exact to="/admin/elektron_address" className="nav-link " activeclassname='NavLinkLi'>
          <i className="icon-plus2 mr-1 sx-none"></i> Elektron manzil
        </NavLink>
      </li>
    </>
  )
}

export default React.memo(ReglamentsNavbar);