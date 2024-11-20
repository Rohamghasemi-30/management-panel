import React from 'react'
import NavbarFirst from '../../components/NavbarFirst/NavbarFirst.jsx'
import NavbarSeconde from '../../components/NavbarSeconde/NavbarSeconde.jsx'
import StoryBox from '../../components/StoryBox/StoryBox.jsx'
import Slider from '../../components/Slider/Slider.jsx'
import AmazingBox from '../../components/AmazingBox/AmazingBox.jsx'
import IconBox from '../../components/IconBox/IconBox.jsx'
import AmazingMarket from '../../components/AmazingMarket/AmazingMarket.jsx'

function Home() {
  return (
    <div>
        <NavbarFirst />
        <NavbarSeconde /><br />
        <StoryBox /><br />
        <Slider /><br />
        <IconBox /><br /><br />
        <AmazingBox /><br /><br />
        <AmazingMarket />
    </div>
  )
}

export default Home