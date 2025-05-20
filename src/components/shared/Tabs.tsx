import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode[];
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  
  return (
    <div className={className}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-secondary-light hover:text-secondary hover:border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {React.Children.toArray(children).map((child, index) => (
          <div
            key={tabs[index].id}
            className={`transition-opacity duration-300 ${
              activeTab === tabs[index].id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;