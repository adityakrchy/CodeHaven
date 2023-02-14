import React from 'react'

const Dashboard = () => {
  return (
    // <div>This is dashboard</div>
    <>
      <div className="mainContainer">

        <div className="navContainer">
          <div className="Dashboardlogo">
            <img src="/logo_bg_removed.png" alt="logo" className='DashboardLogoImg' />
          </div>
          <div className="profileInfo">
            <img src="/avatar.png" alt="avatar" className='AvatarImg' />
            <div className="userInfo">
              <span className='username'>Aditya Kumar</span>
              <span className='useremail'>adityakrchy101@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="heroWrapper">

          <div className="heroText">
            <span className='promptHero'>Welcome Back, </span>
            <span className='usernameHero'>Aditya Kumar</span>
          </div>
          <div className="time">
            <span>Thursday, 9th Feb 2023</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard