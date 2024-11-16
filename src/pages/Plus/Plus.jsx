import React from 'react'
import "../Plus/plus.css"

function Plus() {
  return (
    <div className='plusbox'>
        <h3>پلاس</h3><br />
        <div className="subscriptionbox">
                <h2>اشتراک فعال ندارید</h2>
                <button className='subscription-btn'>خرید اشتراک</button>
        </div>
    </div>
  )
}

export default Plus