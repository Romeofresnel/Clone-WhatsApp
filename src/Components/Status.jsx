import React, { useState } from "react";
import Portal2 from "../Portals/Portal2";
import SettingStatus from "./SettingStatus";
export default function Status() {
  const [aff, setAff] = useState(false);
  return (
    <>
      <div className="status-comments">
        <div className="stat">
          <h2>Statut</h2>
          <i className="fas fa-ellipsis-vertical" onClick={()=>aff? setAff(false):setAff(true)}/>
        </div>
        <div className="comments">
          <div className="profil">
            <div className="arriere">
              <img src="./public/lol.jpg" />
            </div>
            <p>Mon stat...</p>
          </div>
          <div className="profil">
            <div className="arriere">
              <img src="./public/lol.jpg" />
            </div>
            <p>Joel</p>
          </div>
        </div>
      </div>
      {aff && <Portal2>
        <SettingStatus/>
      </Portal2>}
    </>
  );
}
