import { Link } from "react-router-dom";

//Assets
import "./Footer.css";
import Logo from "../../assets/dnc-logo.svg";
import BrazilIcon from "../../assets/brazil-icon.svg";
import UsaIcon from "../../assets/usa-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between">
          <div className="footer-logo-col">
            <p className="gray-1-color">
              A escola que prepara você para as profissões em alta no mercado de
              trabalho.
            </p>
            <div className="d-flex social-link">
              <a href="https://google.com" target="_blank">
                <img src={FacebookIcon} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={TwitterIcon} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={LinkedinIcon} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={InstagramIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
