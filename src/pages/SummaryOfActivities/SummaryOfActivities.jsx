import React from 'react'
import "../SummaryOfActivities/SummaryOfActivities.css"

function SummaryOfActivities() {
  return (
    <div className="myorders">
        <h3>سفارش های من</h3>
        <div className="boxactivities">
            <div className="activities">
            <img src="../src/image/myorders-1.svg" alt="" />
            <p>0 سفارش <br />جاری</p>
            </div>
            <div className="activities">
            <img src="../src/image/myorders-2.svg" alt="" />
            <p>0 سفارش <br />تحویل شده</p>
            </div>
            <div className="activities">
            <img src="../src/image/myorder-3.svg" alt="" />
            <p>0 سفارش <br />مرجوع شده</p>
            </div>
        </div>
    </div>
  )
}

export default SummaryOfActivities