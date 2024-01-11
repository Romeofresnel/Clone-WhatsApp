import React, { useState } from "react";
import FindChaine from "../Components/FindChaine";
import Portal1 from "../Portals/Portal1";
import Portal3 from "../Portals/Portal3";
import SettingChaine from "./SettingChaine";
import OpenChaine from "./OpenChaine";
export default function Chaine() {
  const [aff, setAff] = useState(false);
  const [sab, setSab] = useState(false);
  const date = new Date();
  const time = Date.parse(date);
  const updata = new Date(time).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour:"numeric",
    // minute:'numeric'
  });

  return (
    <>
      <div className="chaine-whatsapp">
        <div className="name-chaine">
          <h2>Chaines</h2>
          <i
            className="fas fa-plus"
            onClick={() => (aff ? setAff(false) : setAff(true))}
          ></i>
        </div>
        <div className="map">
          <div
            className="map-chaine"
            onClick={() => (sab ? setSab(false) : setSab(true))}
          >
            <div className="name-map-chaine">
              <img src="./public/tokyo.jpg" />
              <h2>OtakuZone</h2>
            </div>
            <div className="map-body-chaine">
              <div className="text">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas voluptatem assumenda modi facilis. Cum illum qui
                  error illo ipsam natus!
                </p>
              </div>
              <div className="img">
                <img src="./public/lol.jpg" />
              </div>
            </div>
            <div className="count-chaine">
              <h2>5 non lus</h2>
              <p>{updata}</p>
            </div>
          </div>
          <div className="map-chaine">
            <div className="name-map-chaine">
              <img src="./public/tokyo.jpg" />
              <h2>OtakuZone</h2>
            </div>
            <div className="map-body-chaine">
              <div className="text">
                <p>
                  askldjlaskjdlaskjdla jdalsjdasldkjasldjl alsdjasjidalsdjal
                </p>
              </div>
              <div className="img">
                <img src="./public/lol.jpg" />
              </div>
            </div>
            <div className="count-chaine">
              <h2>5 non lus</h2>
              <p>{updata}</p>
            </div>
          </div>
          <div className="map-chaine">
            <div className="name-map-chaine">
              <img src="./public/tokyo.jpg" />
              <h2>OtakuZone</h2>
            </div>
            <div className="map-body-chaine">
              <div className="text">
                <p>
                  askldjlaskjdlaskjdla jdalsjdasldkjasldjl alsdjasjidalsdjal
                </p>
              </div>
              <div className="img">
                <img src="./public/lol.jpg" />
              </div>
            </div>
            <div className="count-chaine">
              <h2>5 non lus</h2>
              <p>{updata}</p>
            </div>
          </div>
          <div className="trouver-chaine">
            <FindChaine />
          </div>
        </div>
      </div>
      {aff && (
        <Portal1>
          <SettingChaine />
        </Portal1>
      )}
      {sab && (
        <Portal3>
          <OpenChaine close={setSab} />
        </Portal3>
      )}
    </>
  );
}
