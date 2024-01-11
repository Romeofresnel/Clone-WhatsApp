import React from "react";
import NavBarre from "../Components/NavBarre";
import AppeLink from "../Components/AppeLink";
import AppelMaps from "../Components/AppelMaps";
export default function Appels() {
  return (
    <>
      <div className="Appel-whatsapp">
        <div className="nav-barre2">
          <NavBarre />
        </div>
        <div className="appel-bodys">
          <div className="appel-link"><AppeLink/></div>
          <div className="appel-body"><AppelMaps/></div>
        </div>
        <i className="fas fa-phone-flip"/>
      </div>
    </>
  );
}
