import { Container } from "@mui/system";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <div class="footer-box">
        <h2>Closing store</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          adipisci!
        </p>
        <div class="social">
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i class="bx bxl-tirtik"></i>
          </a>
        </div>
      </div>
      <div class="footer-box">
        <h3>Support</h3>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#"></a>Return home
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">product</a>
        </li>
      </div>
      <div class="footer-box">
        <h2>View Guides</h2>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#"></a>Return home
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">product</a>
        </li>
      </div>
      <div class="footer-box">
        <h3>Contact</h3>
        <div class="contact">
          <span>
            <i class="bx bxs-map"></i> safha Bishkek
          </span>
          <span>
            <i class="bx bxs-phone"></i>+996 551 394 966
          </span>
          <span>
            <i class="bx bxs-envelope"></i>coffee@shop.com
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
