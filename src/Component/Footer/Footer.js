import "../Footer/Footer.css";
export function Footer() {
  return (
    <>
      <div>
        <section className="footer">
          <div className="home_icon">
            <img
              alt="arrow"
              src="https://www.botshot.in/images/svg/home-nav-mobile.svg"
            />
            <li>Home</li>
          </div>
          <div className="help_icon">
            <img
              alt="arrow"
              src="https://www.botshot.in/images/svg/building.svg"
            />
            <li>How it help</li>
          </div>
          <div className="pricing_icon">
            <img
              alt="arrow"
              src="https://www.botshot.in/images/svg/dollar.svg"
            />
            <li>Pricing</li>
          </div>
          <div>
            <button className="footer_button">SCHEDULE A DEMO</button>
          </div>
        </section>
      </div>
    </>
  );
}
