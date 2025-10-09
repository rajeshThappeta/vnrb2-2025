import React from "react";
import { Outlet ,NavLink} from "react-router-dom";

function Technologies() {
  return (
    <div className="text-center">
      {/* nav links */}
      <ul className="nav d-flex justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="java">
            Java
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="node">
            Node
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="vue">
            Vue
          </NavLink>
        </li>
       
      </ul>
      <Outlet />
    </div>
  );
}

export default Technologies;
