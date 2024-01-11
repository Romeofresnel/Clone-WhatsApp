import React from "react";

export default function FindChaine() {
  return (
    <>
      <div className="find-chaine">
        <div className="name-find-chaine">
          <h2>Trouver des chaines</h2>
          <h3>
            Tout voir
            <i className="fas fa-angle-right" />
          </h3>
        </div>
        <div className="find-all">
          <div className="card-chaine">
            <div className="icons-chaine">
              <div className="chaine-icons">
                <img src="./public/tokyo.jpg"/>
              </div>
              <div className="icons-check">
                <i className="fas fa-check" />
                <i className="fas fa-certificate" />
              </div>
            </div>
            <div className="text-chaine">
              <h2>RFI</h2>
            </div>
            <div className="buttons-chaine">
              <button className="btn">Suivre</button>
            </div>
          </div>
          <div className="card-chaine">
            <div className="icons-chaine">
              <div className="chaine-icons">
                <img src="./public/tokyo.jpg"/>
              </div>
              <div className="icons-check">
                <i className="fas fa-check" />
                <i className="fas fa-certificate" />
              </div>
            </div>
            <div className="text-chaine">
              <h2>RFI</h2>
            </div>
            <div className="buttons-chaine">
              <button className="btn">Suivre</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
