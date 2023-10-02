import React from 'react'
import './header.css'
import Typical from 'react-typical'

const Header = () => {
  return (
    <section id='header'>
      <div className='profile-name'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm Charles Aroma</span>
        <span className='text-role'>
          {""}
          <h1>
            {""}
            <Typical
              loop={Infinity}
                steps={[
                  "Front-End Web Developer",1000,
                  "React/React Native Developer",100,
                  "Graphics Designer",1000,
                ]}
            />
          </h1>
        </span>
      </div>
    </section>
  )
}

export default Header