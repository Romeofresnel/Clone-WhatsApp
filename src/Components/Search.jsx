import React from "react";

export default function Search({close}) {
  return (
    <>
      <div className="search-barre">
        <div className="barre">
          <input type="search" placeholder="Recherche..."/>
          <i className="fas fa-arrow-left-long" onClick={()=>close(false)}/>
        </div>
        <div className="filter">
          <div className="option1">
            <ul>
              <li>
                <i className="fas fa-circle-notch"></i>Non lues
              </li>
              <li>
                <i className="fas fa-image"></i>Photos
              </li>
              <li>
                <i className="fas fa-video"></i>Videos
              </li>
            </ul>
          </div>
          <div className="option2">
            <ul>
              <li>
                <i className="fas fa-link"></i>Liens
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>Gif
              </li>
              <li>
                <i className="fas fa-headphones"></i>Audio
              </li>
            </ul>
          </div>
          <div className="option3">
            <ul>
              <li>
                <i className="fas fa-file"></i>Documents
              </li>
              <li>
                <i className="fas fa-signal"></i>Sondages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
