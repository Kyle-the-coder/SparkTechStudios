import logo from "../../../assets/SparkTechLogo.png";
import "../nav/navbar.css";
import insta from "../../../assets/instagram.png";
import fb from "../../../assets/facebook.png";
export function Navbar() {
  const links = [
    { linkName: "About Us", link: "" },
    { linkName: "Services", link: "" },
    { linkName: "Projects", link: "" },
    { linkName: "Contact Us", link: "" },
  ];

  return (
    <div className="navbar-main-container">
      <div className="navbar-info-container">
        <div className="navbar-slogan-container">
          <p>
            "Illuminating Success for Small Businesses – SparkTech Studios: Your
            Digital Spark, Your Business Brilliance."
          </p>
        </div>
        <img src={logo} className="navbar-main-logo" />
        <div className="navbar-socials-container">
          <img src={insta} className="navbar-social-png" />
          <img src={fb} className="navbar-social-png" />
        </div>
      </div>
      <div className="navbar-links-container">
        {links.map((link) => {
          return (
            <div className="navbar-link-cont" key={link.linkName}>
              <a href="#" className="navbar-link">
                {link.linkName}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
