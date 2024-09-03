import ContactComp from "@/components/contact/ContactComp";
import ContactHero from "@/components/contact/ContactHero";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-[#171310] text-[white]">
        <div className="container custom-margin">
          <ContactHero />
        </div>
      </div>
      <div>
        <ContactComp />
      </div>
    </div>
  );
};

export default ContactPage;
