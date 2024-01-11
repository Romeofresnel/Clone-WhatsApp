import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Portals from "../Portals/Portals";
import Setting from "./Setting";
import Search from "./Search";
import Portal from "../Portals/Portal";
export default function NavBarre() {
  const [aff, setAff] = useState(false);
  const [see, setSee] = useState(false);

  return (
    <>
      <div className="nav-barre-whatsapp">
        <div className="icons-whatsapp">
          <div className="name-whatsapp">WhatsApp</div>
          <div className="icon-elements">
            <i className="fas fa-camera" />
            <i className="fab fa-sistrix" onClick={()=> see?setSee(false):setSee(true)}/>
            <i
              className="fas fa-ellipsis-vertical"
              onClick={() => aff?setAff(false):setAff(true)}
            />
          </div>
        </div>
        <div className="nav-link-whatsapp">
          <NavLink to="/comm" className={(nav) => (nav.isActive ? "line" : "lil")}>
            <i className="fas fa-users" />
          </NavLink>
          <NavLink to="/" className={(nav) => (nav.isActive ? "line" : "lil")}>
            <li className="disc">Disc.</li>
          </NavLink>
          <NavLink to="/Actu" className={(nav) => (nav.isActive ? "line" : "lil")}>
            <li>Actu</li>
          </NavLink>
          <NavLink
            to="/Appel"
            className={(nav) => (nav.isActive ? "line" : "lil")}
          >
            <li>Appels</li>
          </NavLink>
        </div>
      </div>
      {aff && (
        <Portals>
          <Setting close={setAff} />
        </Portals>
      )}
      {see && (
        <Portal>
          <Search close={setSee} />
        </Portal>
      )}
    </>
  );
}
