import React from 'react'

export default function OpenCommunity({close}) {
  return (
    <>
        <div className='open-community'>
            <div className='open-community-nav'>
                <div className='open-icons'>
                    <i className='fas fa-arrow-left-long' onClick={close(false)}/>
                    <i className='fas fa-ellipsis-vertical'/>
                </div>
                <div className='open-infos'>
                    <div className='open-img'>
                        <i className='fas fa-users'/>
                    </div>
                    <div className='open-text'>
                        <h2>Shopping Scott</h2>
                        <p>Communaute.5 groupes</p>
                    </div>
                </div>
            </div>
            <div className='open-community-body'></div>
        </div>
    </>
  )
}
