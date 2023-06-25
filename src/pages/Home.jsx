import React from 'react'
import './Home.css'

function Home(){


  return (
    
        <div className="container">
    <div className="head">
        <div className="spotify">
            SPOTIFY
           </div>
          <div className="premium">
              premium
          </div>
          <div className="help">
              help<a className='' href=''></a>
          </div>
          <div className="download">
              download<a className='' href=''></a>
          </div>
          <div className="sign">
              sign up<a className=''href=''></a>
          </div>
          <div className="login">
              login<a  className='link' href=''>/Login</a>
          </div>
          

    </div>
    <div className="content">
        <div className="first">
            MUSIC FOR EVERYONE.
        </div>
        <div className="second">
            Millions of songs.No credit card needed.
        </div>
        <div className="third">
            <button className="btn">Get spotify free</button>
        </div>
    </div>
    
 </div>

  )
}

export default Home