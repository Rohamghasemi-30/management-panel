import React, { useState } from 'react'

function GiftCards() {
    const [activeTab, setActiveTab] = useState("current");
  
    const renderContent = () => {
      switch (activeTab) {
        case "current":
          return <div className='box-center'><br /> <img src="../src/image/empty-gift-card.webp" alt="" />
               کسی به شما کارت هدیه داده‌؟ اینجا اضافه کنید تا بعدا دنبالش نگردید 
               <button className="newlist">اضافه کردن کارت هدیه</button>
               </div>;
        case "delivered":
          return <div className='box-center'><br /> <img src="../src/image/empty-gift-card.webp" alt="" />
                      طرح های جذاب ما را دیده اید؟ 
                      <button className="newlist">مشاهده انواع کارت هدیه</button>
                      </div>;
      }
    };
  
    return (
      <div className='container-order'>
        <h3>کارت های هدیه</h3><br /><br />
        <div className="tab-buttons">
          <button
            className={activeTab === "current" ? "active" : ""}
            onClick={() => setActiveTab("current")}
          >
            هدیه گرفتم
          </button>
          <button
            className={activeTab === "delivered" ? "active" : ""}
            onClick={() => setActiveTab("delivered")}
          >
              هدیه دادم
          </button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    );
}

export default GiftCards