import React from "react";
import Quote from "../Quote/Quote";

const Quotes: React.FC = () => {
  return (
    <section className="h-[100%]">
      <div className="container mx-auto px-5 h-[100%] flex items-center justify-center">
        <Quote />
      </div>
    </section>
  );
};

export default Quotes;
