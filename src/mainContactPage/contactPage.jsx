import React from "react";
import "./contactPage.css";
import SubContactPage from "./subContactPage/subContactPage";

const ContactPage = () => {
  return (
    <div className="mcp-body">
      <div>
        <SubContactPage />
      </div>
    </div>
  );
};

export default ContactPage;
