import ServicesCard from "./ServicesCard";
import services from "../helpers/services";
import PropTypes from "prop-types";

function Services() {
  return (
    <section className="services-section">
      <h5>Services</h5>
      <h2>Services & Packages</h2>
      <div className="d-flex justify-content-center gap-5 services">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            icon={service.iconImage}
            title={service.title}
            intro={service.introText}
            features={service.features}
            price={service.price}
            type={service.type}
          />
        ))}
      </div>
    </section>
  );
}
Services.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    intro: PropTypes.string,
    features: PropTypes.array,
    price: PropTypes.string,
    type: PropTypes.string,
}
export default Services;
