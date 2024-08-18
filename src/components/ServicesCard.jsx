import MarkIcon from "@/assets/images/mark.png";

function ServicesCard({ icon, title, intro, features, price, type }) {

  return (
    <div
      className={`services-card d-flex flex-column justify-content-between ${
        type === "recommended" && "recommended"
      }`}
    >
      <div>
        <div className="d-flex text-start">
          <img src={icon} />
          <div className="heading">
            <h4>{title}</h4>
            <p>{intro}</p>
          </div>
        </div>
        <h3 className="text-start">What’s included?</h3>
        <div className="d-flex flex-column justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="d-flex gap-2">
              <img className="h-25" src={MarkIcon} />
              <p>{feature}</p>
            </div>
          ))}
        </div>

        <hr className="dashed" />
      </div>
      <div>
        <p className="text-start">
          <span className="price">{price}</span>
          <span className="per-month">/per month</span>
        </p>
        <button className="btn choose-btn">Choose</button>
      </div>
    </div>
  );
}

export default ServicesCard;
