import React, { useState } from 'react';
import './TabSwitcher.css';

const TabSwitcher = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (clickedInd) => {
    setActiveTab(clickedInd);
  }

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {
          tabs.map((tab,ind) =>
            <button
              data-testid={`tab-button-${tab.id}`}
              key={tab.id}
              className={`${activeTab===ind ? 'active': ''}`}
              onClick={()=>handleActiveTab(ind)}
            >
              {tab.label}
            </button>
          )
        }
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {
          tabs[activeTab].content
        }
      </div>
    </div>
  );
}

export default TabSwitcher;
