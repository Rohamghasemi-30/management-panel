import React, { useState } from 'react'
import "../Orders/Orders.css"

function Orders() {
    const [activeTab, setActiveTab] = useState("current");
  
    const renderContent = () => {
      switch (activeTab) {
        case "current":
          return <div className='box-center'><br /> <img src="../src/image/order-empty.svg" alt="" />
              هیچ سفارشی جاری نیست</div>;
        case "delivered":
          return <div className='box-center'><br /> <img src="../src/image/order-empty.svg" alt="" />
               هیچ سفارشی تحویل نداده شده</div>;
        case "returned":
          return <div className='box-center'><br /> <img src="../src/image/order-empty.svg" alt="" />
               هیچ سفارشی مرجوع نشده است</div>;
        case "canceled":
          return <div className='box-center'><br /> <img src="../src/image/order-empty.svg" alt="" />
                هیچ سفارشی لغو نشده است</div>;
       
      }
    };
  
    return (
      <div className='container-order'>
        <h3>تاریخچه سفارشات</h3><br /><br />
        <div className="tab-buttons">
          <button
            className={activeTab === "current" ? "active" : ""}
            onClick={() => setActiveTab("current")}
          >
            جاری
          </button>
          <button
            className={activeTab === "delivered" ? "active" : ""}
            onClick={() => setActiveTab("delivered")}
          >
             تحویل شده0
          </button>
          <button
            className={activeTab === "returned" ? "active" : ""}
            onClick={() => setActiveTab("returned")}
          >
             مرجوع شده0
          </button>
          <button
            className={activeTab === "canceled" ? "active" : ""}
            onClick={() => setActiveTab("canceled")}
          >
            لغو شده
          </button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    );
}

export default Orders


