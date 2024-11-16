import React from 'react'
import NavbarFirst from '../../components/NavbarFirst/NavbarFirst'
import NavbarSeconde from '../../components/NavbarSeconde/NavbarSeconde'
import { Link, Outlet } from 'react-router-dom'
import "../Profile/Profile.css"

function Profile() {
  return (
    <div>
        <NavbarFirst />
        <NavbarSeconde />
        <div className="container-profile">
        <div className="boxprofile">
            <div className="aboutyou">
                <div className="name">
                    <h4>رهام قاسمی <br /><span>09301034598</span></h4>
                    <i class="fa-solid fa-pencil fa-xl color-blue" ></i>
                </div>
                <div className="wallet">
                    <h4>کیف پول <br /><span className='color-blue'>فعالسازی</span></h4>
                    <p>0تومان</p>
                </div>
                <div className="digiclube">
                    <h4>دیجی کلاب <br /><span className='color-blue'>مشاهده ماموریت ها</span></h4>
                    <p>0امتیاز</p>
                </div>
            </div>
            <Link to="SummaryOfActivities">خلاصه فعالیت ها</Link>
            <Link to="plus">پلاس</Link>
            <Link to="orders">سفارش ها</Link>
            <Link to="mylists">لیست های من</Link>
            <Link to="views">دیدگاه ها</Link>
            <Link to="giftcards">کارت های هدیه</Link>
        </div>
        <Outlet />
        </div>
    </div>
  )
}

export default Profile