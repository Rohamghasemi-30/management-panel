import React from 'react'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SummaryOfActivities from './pages/SummaryOfActivities/SummaryOfActivities';
import Plus from './pages/Plus/Plus';
import Orders from './pages/Orders/Orders';
import MyLists from './pages/MyLists/MyLists';
import Views from './pages/Views/Views';
import GiftCards from './pages/GiftCards/GiftCards';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/profile" element={<Profile />}>
        <Route path='SummaryOfActivities' element={<SummaryOfActivities />} />
        <Route path='plus' element={<Plus />}/>
        <Route path='orders' element={<Orders />} />
        <Route path='mylists' element={<MyLists />} />
        <Route path='views' element={<Views />} />
        <Route path='giftcards' element={<GiftCards />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App