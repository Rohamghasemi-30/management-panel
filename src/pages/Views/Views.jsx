import React, { useState } from 'react'

function Views() {
    const [activeTab, setActiveTab] = useState("current");
  
    const renderContent = () => {
      switch (activeTab) {
        case "current":
          return <div className='box-center'><br /> <img src="../src/image/order-empty.svg" alt="" />
                 هنوز هیچ نظری ندارید</div>;
        case "delivered":
          return <div className='box-center'><br /> <img src="../src/image/order-empty.svg" alt="" />
                   هنوز هیچ نظری ندارید</div>;
        case "returned":
          return <div className='box-center'><br /> <img src="../src/image/question-empty-state.svg" alt="" />
                    تا به حال پرسشی نداشتی</div>;
      }
    };
  
    return (
      <div className='container-order'>
        <h3>دیدگاه‌ها و پرسش‌ها</h3><br /><br />
        <div className="tab-buttons">
          <button
            className={activeTab === "current" ? "active" : ""}
            onClick={() => setActiveTab("current")}
          >
            در انتظار دیدگاه
          </button>
          <button
            className={activeTab === "delivered" ? "active" : ""}
            onClick={() => setActiveTab("delivered")}
          >
              دیدگاه های من
          </button>
          <button
            className={activeTab === "returned" ? "active" : ""}
            onClick={() => setActiveTab("returned")}
          >
             پرسش های من 
          </button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    );
}

export default Views