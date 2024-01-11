import React from "react";

export default function OpenChaine({close}) {
  return (
    <>
      <div className="open-chaine">
        <div className="open-nav-chaine">
          <div className="open-img">
            <i className="fas fa-arrow-left-long" onClick={()=> close(false)}/>
            <img src="./public/tokyo.jpg" />
          </div>
          <div className="open-text">
            <div className="open-Text">
              <h2>OtakuZone</h2>
              <i className="fas fa-check" />
              <i className="fas fa-certificate" />
            </div>
            <h3>1,2M followers</h3>
          </div>
          <div className="open-icons">
            <i className="fas fa-bell-slash" />
            <i className="fas fa-ellipsis-vertical" />
          </div>
        </div>
        <div className="open-body-chaine">
          <div className="open-card">
            <div className="open-imgs">
              <img src="./public/lol.jpg" />
              <p>loraajdlkaksjsdllnancjacnsna</p>
            </div>
            <div className="open-bodys">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                animi rerum quaerat harum beatae blanditiis, in eum numquam
                ducimus quos, unde sunt iste excepturi laborum ab. Temporibus
                nam eveniet id mollitia non, iusto cumque quas tempore vero
                dolor dolore error.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
