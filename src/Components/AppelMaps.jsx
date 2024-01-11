import React from 'react'

export default function AppelMaps() {
    const date = new Date();
    const time = Date.parse(date);
    const updata = new Date(time).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour:"numeric",
      minute:'numeric'
    });
  return (
    <>
        <div className='appel-map-all'>
            <div className='appel-map-recent'>
                <h2>Recents</h2>
            </div>
            <div className='appel-map-body'>
                <div className='appel-map-card'>
                    <div className='appel-map-img'>
                        <img src='./public/tokyo.jpg'/>
                    </div>
                    <div className='appel-map-info'>
                        <div className='appel-map-text'>
                            <div className='appel-nom'>
                                <h2>John Alexender</h2>
                            </div>
                            <div className='appel-date'>
                                <i className='fas fas fa-arrow-up-long'/>
                                <p>{updata}</p>
                            </div>
                        </div>
                        <div className='appel-map-icons-video'>
                            <i className='fas fa-video'/>
                        </div>
                    </div>
                </div>
                <div className='appel-map-card'>
                    <div className='appel-map-img'>
                        <img src='./public/tokyo.jpg'/>
                    </div>
                    <div className='appel-map-info'>
                        <div className='appel-map-text'>
                            <div className='appel-nom'>
                                <h2>Tom Alexender</h2>
                            </div>
                            <div className='appel-date'>
                                <i className='fas fa-arrow-up-long'/>
                                <p>{updata}</p>
                            </div>
                        </div>
                        <div className='appel-map-icons-video'>
                            <i className='fas fa-phone'/>
                        </div>
                    </div>
                </div>
                <div className='appel-map-card'>
                    <div className='appel-map-img'>
                        <img src='./public/tokyo.jpg'/>
                    </div>
                    <div className='appel-map-info'>
                        <div className='appel-map-text'>
                            <div className='appel-nom'>
                                <h2><span>Jenny Alexender</span></h2>
                            </div>
                            <div className='appel-date'>
                                <i className='fas fa-arrow-down-long'/>
                                <p>{updata}</p>
                            </div>
                        </div>
                        <div className='appel-map-icons-video'>
                            <i className='fas fa-video'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
