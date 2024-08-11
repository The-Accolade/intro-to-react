import React from "react";

function HowItWorksCard({image, title, headline}) {

  return (
    <div className="bg-white p-3 rounded shadow-lg card">
      <h5>{headline}</h5>
      <h4>{title}</h4>
      <img src={image} />
    </div>
  );
}

export default HowItWorksCard;
