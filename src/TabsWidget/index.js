import React, { useState } from "react";
import { BiGridVertical } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import "./index.css";

const tabContent = {
  AboutMe: `Tim Cook, the CEO of Apple Inc., is a renowned American technology executive. Having joined Apple in 1998, he played a pivotal role in streamlining the company's operations and supply chain. 
  He was appointed as the company's CEO in 2011, succeeding Steve Jobs. Under Cook's leadership,
   Apple has continued to innovate and expand its product portfolio, solidifying its position as a global technology leader.
   Cook is known for his focus on sustainability and social responsibility, and he has been instrumental in driving Apple's commitment to environmental initiatives and diversity and inclusion.
   `,

  Experiences: `I have 5 years of experience in sales and have been working at Salesforce for the past 3 years. I've been able to close 50 deals in the past 6 months, and I'm looking forward to closing more deals in the future.

I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I've also...`,
  Recommended: `Types of Recommendations:

Personal Recommendations: These are suggestions from friends, family, or acquaintances. They can be informal or formal.
Professional Recommendations: These are recommendations from colleagues, supervisors, or clients. They are often used for job applications or academic pursuits.
`,
};

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("AboutMe");

  return (
    <div className="tabs-section">
      <div className="basic-icons">
        <FaRegQuestionCircle className="icon-2" />
        <BiGridVertical className="icon-1" />
      </div>
      <div className="tabs">
        <div className="nav-buttons">
          <button
            className={activeTab === "AboutMe" ? "active" : ""}
            onClick={() => setActiveTab("AboutMe")}
          >
            About Me
          </button>
          <button
            className={activeTab === "Experiences" ? "active" : ""}
            onClick={() => setActiveTab("Experiences")}
          >
            Experiences
          </button>
          <button
            className={activeTab === "Recommended" ? "active" : ""}
            onClick={() => setActiveTab("Recommended")}
          >
            Recommended
          </button>
        </div>
        <p className="tab-description">{tabContent[activeTab]}</p>
      </div>
      <div className="rectangle"></div>
    </div>
  );
};

export default TabsWidget;
