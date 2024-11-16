import React from 'react'
import NavbarFirst from '../../components/NavbarFirst/NavbarFirst.jsx'
import NavbarSeconde from '../../components/NavbarSeconde/NavbarSeconde.jsx'
import StoryBox from '../../components/StoryBox/StoryBox.jsx'
import Slider from '../../components/Slider/Slider.jsx'

function Home() {
  return (
    <div>
        <NavbarFirst />
        <NavbarSeconde /><br />
        <StoryBox /><br />
        <Slider />
    </div>
  )
}

export default Home