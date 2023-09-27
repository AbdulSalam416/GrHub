import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/log0.jpg";
import eyeLogo from "../../assets/icons/lit-logo.gif";
import Icon from "../Icon";

const Footer = () => {

  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <>
      <footer className="c-footer">
        <div className="c-footer-top">
          <div className="c-footer-top--logo">
            <Link className="logo" to={"/"}>
              <img src={logo} alt="site logo" />
            </Link>

            <span className="logo--text">Your investment manager in the digital asset landscapes.</span>
          </div>

          <div className="c-footer-top-menu">
            <ul className="custom menu-list">
              <li className="menu-list-item">
                <Link to="/general">Learn With Us</Link>
              </li>

              <li className="menu-list-item">
                <Link to="/market">Market Commentary</Link>
              </li>
            </ul>

            <ul className="custom menu-list">
            <ul className="custom menu-list">
      <li className="menu-list-item">
        {isAdmin ? (
          <Link to="/admin-panel">Account</Link>
        ) : (
          <Link to="/account">Account</Link>
        )}
      </li>
    </ul>

              <li className="menu-list-item">
                <Link to="/services">Services</Link>
              </li>


            </ul>

            <ul className="custom menu-list">
              

              <li className="menu-list-item">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="c-footer-bottom">
          <ul className="custom social">
            <li>
              <a  rel="noreferrer" target='_blank' href="#">
                <Icon name="facebook" />
              </a>
            </li>

            <li>
              <a rel="noreferrer" target='_blank' href="#">
                <Icon name="twitter" />
              </a>
            </li>

  

            <li>
              <a  rel="noreferrer" target='_blank'  href="#">
                <Icon name="telegram" />
              </a>
            </li>
          </ul>
          {/* ©  */}
          <span className="publish">{`© ${new Date().getFullYear()} GoldenReserveHub`}</span>

          <span className="development">
            <span className="development--text">Design & Dev:</span>
            
            <a target={"_blank"} rel="noopener noreferrer" href="#">
              <img src={eyeLogo} alt="site logo" />
              Shekara Inc
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
