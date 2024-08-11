import PickupImg from "../assets/images/pickup-image.png";
import WashNDry from "../assets/images/wash-n-dry.png";
import Fold from "../assets/images/fold.png";
import Delivery from "../assets/images/delivery.png";
import HowItWorksCard from "./HowItWorksCard";

const howItWorksData = [
  {
    step: "Step 1",
    title: "Pickup",
    img: PickupImg,
  },
  {
    step: "Step 2",
    title: "Wash & Dry",
    img: WashNDry,
  },
  {
    step: "Step 3",
    title: "Fold",
    img: Fold,
  },
  {
    step: "Step 3",
    title: "Delivery",
    img: Delivery,
  },
];

function HowItWorks() {
  return (
    <section className="hiw-section">
      <h5>How it works</h5>
      <h2>Get it done in 4 Steps</h2>
      <div className="d-flex justify-content-between mx-auto mt-5 cards-container">
        {/* LEVEL ONE
          <div className="bg-white p-3 rounded shadow-lg card">
            <h5>{headline}</h5>
            <h4>{title}</h4>
            <img src={image} />
         </div>  
          <div className="bg-white p-3 rounded shadow-lg card">
            <h5>{headline}</h5>
            <h4>{title}</h4>
            <img src={image} />
         </div>  
          <div className="bg-white p-3 rounded shadow-lg card">
            <h5>{headline}</h5>
            <h4>{title}</h4>
            <img src={image} />
         </div>  
          <div className="bg-white p-3 rounded shadow-lg card">
            <h5>{headline}</h5>
            <h4>{title}</h4>
            <img src={image} />
         </div>  
        */}
        {/* LEVEL TWO
            <HowItWorksCard headline="Step 1" title="Pickup" image={PickupImg} />
            <HowItWorksCard headline="Step 2" title="Wash & Dry" image={WashNDry} />
            <HowItWorksCard headline="Step 3" title="Fold" image={Fold} />
            <HowItWorksCard headline="Step 4" title="Delivery" image={Delivery} />
        */}
        {/*LEVEL THREE */}
        {howItWorksData.map((data, index) => (
          <HowItWorksCard
            key={index}
            headline={data.step}
            title={data.title}
            image={data.img}
          />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
