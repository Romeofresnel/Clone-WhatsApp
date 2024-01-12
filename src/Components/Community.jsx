import React, { useState } from "react";
import Portal4 from "../Portals/Portal4";
import OpenCommunity from "./OpenCommunity";
// import AppelMaps from "./AppelMaps"
export default function Community() {
  const[aff,setAff]=useState(false)
  const date = new Date();
  const time = Date.parse(date);
  const updata = new Date(time).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return (
    <>
      <div className="community-espace">
        <div className="community-nav" onClick={()=> aff? setAff(false):setAff(true)}>
          <div className="community-nav-icons">
            <i className="fas fa-users" />
          </div>
          <div className="community-nav-text">
            <h2>Shopping Scott</h2>
          </div>
        </div>
        <div className="community-content">
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="community-button" onClick={()=> aff?setAff(false):setAff(true)}>
          <i className="fas fa-angle-right"/>
          <h3>Tout Voir</h3>
        </div>
      </div>
      <div className="community-espace">
        <div className="community-nav">
          <div className="community-nav-icons">
            <i className="fas fa-users" />
          </div>
          <div className="community-nav-text">
            <h2>Shopping Scott</h2>
          </div>
        </div>
        <div className="community-content">
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="community-button">
          <i className="fas fa-angle-right"/>
          <h3>Tout Voir</h3>
        </div>
      </div>
      <div className="community-espace">
        <div className="community-nav">
          <div className="community-nav-icons">
            <i className="fas fa-users" />
          </div>
          <div className="community-nav-text">
            <h2>Shopping Scott</h2>
          </div>
        </div>
        <div className="community-content">
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
          <div className="community-maps">
            <div className="community-map-img">
              <img src="./public/tokyo.jpg" />
            </div>
            <div className="community-map-info">
              <div className="community-map-text">
                <div className="community-nom-users">
                  <h2>
                    <span>Jenny Alexender</span>
                  </h2>
                </div>
                <div className="community-user">
                  <p>ines insam: cool</p>
                </div>
              </div>
                <div className="community-data">
                  <p>{updata}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="community-button">
          <i className="fas fa-angle-right"/>
          <h3>Tout Voir</h3>
        </div>
      </div>
      {aff && <Portal4>
        <OpenCommunity close={setAff}/>
      </Portal4>}
    </>
  );
}
