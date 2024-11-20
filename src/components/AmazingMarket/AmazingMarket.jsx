import React from 'react'
import '../AmazingMarket/AmazingMarket.css'

function AmazingMarket() {
  return (
   <div className="container-amazingmarket">
     <div className="amazingmarket">
        <div className="box-text">
            <img src="../src/image/fresh.webp" alt="" />
            <h2>شگفت انگیز سوپر مارکتی</h2>
            <span>تا 50% تخفیف</span>
        </div>
        <div className="productbox">
            <img src="../src/image/d952740efe62202a30eb9e0279bda6632d977e62_1720615602.webp" alt="" />
            <img src="../src/image/3116af1b6e1c68dea5cb3d833a03b3984fae3849_1692686624.webp" alt="" />
            <img src="../src/image/6dba5d5c0aaae622b5e989e77ae305e732970531_1716096899.webp" alt="" />
            <img src="../src/image/6c70970b29d7b99a2ef9374223f38b6e34a20c42_1698649388.webp" alt="" />
            <img src="../src/image/fd9f668cab523fced5912bbc6ae14e7580d8b205_1636959362.webp" alt="" />
            <img src="../src/image/7ef12f7f44c20e607a66a0a6f84fcacddb3c74f8_1602075510.webp" alt="" />
            <div className="button-product">بیش از 100 کالا</div>
        </div>
    </div><br />
    <div className="image-box">
        <img src="../src/image/062ad02ec6f73f24f54aa6482eb30ab598de970b_1732014515.webp" alt="" />
        <img src="../src/image/a5a5f14686df9323e0bc3454052e624e3885b2f4_1731847740.webp" alt="" /> 
        <img src="../src/image/59c2624395ec3a68c280a47717a5185dea29b166_1731738527.webp" alt="" />
        <img src="../src/image/a365a7c21ccf3e1553b542e42e3aae95c581a3fd_1731313933.gif" alt="" />
    </div>
   </div>
  )
}

export default AmazingMarket