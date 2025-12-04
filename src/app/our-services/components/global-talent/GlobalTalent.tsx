import CardGroup from "./CardGroup";
import StrategicGlobal from "./CompanyStrategy";

const GlobalTalent = () => (
  <section className="my-12 lg:my-24.1">
    <div className="container space-y-6 lg:space-y-12">
      <div>
        <h3>Access Global Talent, Drive Growth</h3>
        <p className="mt-6">
          Revolutionise your business with our offshoring services. Tap into a
          global pool of skilled professionals boosting your competitiveness in
          the market all while reducing your payroll and operational costs.
        </p>
      </div>
      <StrategicGlobal />
      <CardGroup />
    </div>
  </section>
);

export default GlobalTalent;
