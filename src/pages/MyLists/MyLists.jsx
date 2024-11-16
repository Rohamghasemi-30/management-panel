import "../MyLists/MyLists.css"
import React, { useState } from 'react'
import "../Orders/Orders.css"

function MyLists() {
    const [activeTab, setActiveTab] = useState("current");
  
    const renderContent = () => {
      switch (activeTab) {
        case "current":
          return <div className='box-center'> <img src="../src/image/favorites-list-empty.svg" alt="" />
                 لیست علاقه‌مندی‌های شما خالی است.</div>;
        case "delivered":
          return <div className='box-center list-box'><br /> <p>لیستی از کالاهای دلخواه خود بسازید!</p> <button className="newlist">لیست جدید+</button></div>;
        case "returned":
          return <div className='box-center'><br /> <img src="../src/image/announcements-list-empty.svg" alt="" />
                   لیست اطلاع‌رسانی‌های شما خالی است.</div>;
       
      }
    };
  
    return (
      <div className='container-order'>
        <h3>لیست ها</h3><br /><br />
        <div className="tab-buttons">
          <button
            className={activeTab === "current" ? "active" : ""}
            onClick={() => setActiveTab("current")}
          >
            لیست علاقه مندی
          </button>
          <button
            className={activeTab === "delivered" ? "active" : ""}
            onClick={() => setActiveTab("delivered")}
          >
              لیست های دیگر
          </button>
          <button
            className={activeTab === "returned" ? "active" : ""}
            onClick={() => setActiveTab("returned")}
          >
              اطلاع رسانی ها
          </button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    );
}

export default MyLists


