import React from "react";
import NavBarre from "../Components/NavBarre";
import Community from "../Components/Community";

export default function Communaute() {
  return (
    <>
      <div className="community-whatsapp">
        <div className="nav-barre1">
          <NavBarre />
        </div>
        <div className="community-body">
          <div className="community-new">
            <div className="community-users-icons">
              <i className="fas fa-users" />
              <div className="plus-plus">
                <i className="fas fa-plus" />
              </div>
            </div>
            <div className="community-new-text">
              <h2>Nouvelle communauter</h2>
            </div>
          </div>
          <div className="community-bodys">
            <Community />
          </div>
        </div>
      </div>
    </>
  );
}
