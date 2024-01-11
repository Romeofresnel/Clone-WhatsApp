import React from "react";
import NavBarre from "../Components/NavBarre";
import Status from "../Components/Status";
import Chaine from "../Components/Chaine";

export default function Statut() {
  return (
    <>
      <div className="Actu-whatsapp">
        <div className="nav-barre3">
          <NavBarre />
        </div>
        <div className="body-Actu">
          <div className="statut">
            <Status />
          </div>
          <div className="Chaines">
            <div className="chaine"><Chaine/></div>
          </div>
        </div>
        <i className="fas fa-pen"/>
        <i className="fas fa-camera-retro"/>
      </div>
    </>
  );
}
