import React from "react";
import '../CSS/Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../media/map_bg.jpg';

const Footer = () => {
  return (
    <>
      <div class="footer row px-5 m-auto">
        <div class="footer-col1 col-lg-3 col-md-5 col-sm-6 col-12 mb-3">
          <p class="footer-col1-p1">FISH BOX STORE</p>
          <p class="footer-col1-p2">
            Opened in 2017, Fish Box Store is one of the finest fish markets in
            Alexandria. We offer the world's largest assortment of seafood
            online. Order fresh, healthy and delicious seafood direct from the
            sea with next-day delivery to your door.
          </p>
          <img src={img} class="footer-col1-img" />
        </div>
        <div class="footer-col2 col-lg-2 col-md-4 col-sm-5 col-12 mb-3">
          <p class="footer-col2-p1">Explore</p>
          <a href="#" class="footer-links">
            Shop
          </a>
          <a href="#" class="footer-links">
            Blogs
          </a>
          <a href="#" class="footer-links">
            Recipes
          </a>
          <a href="#" class="footer-links">
            Coupones
          </a>
        </div>
        <div class="footer-col3 col-lg-2 col-md-4 col-sm-5 col-12 mb-3">
          <p class="footer-col3-p1">Useful Links</p>
          <a href="#" class="footer-links">
            FAQ
          </a>
          <a href="#" class="footer-links">
            Contact Us
          </a>
          <a href="#" class="footer-links">
            Shipping and Delivery
          </a>
        </div>
        <div class="footer-col4 col-lg-2 col-md-4 col-sm-5 col-12 mb-3">
          <p class="footer-col4-p1">Learn About Us</p>
          <a href="#" class="footer-links">
            About Us
          </a>
          <a href="#" class="footer-links">
            Refund Policy
          </a>
          <a href="#" class="footer-links">
            Privacy Policy
          </a>
        </div>
        <div class="footer-col5 col-lg-3 col-md-4 col-sm-5 col-12 mb-3">
          <p class="footer-col5-p1">Follow Us</p>
          <div class="footer-icon">
            <a href="#" class="footer-links">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div class="footer-icon">
            <a href="#" class="footer-links">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div class="footer-icon">
            <a href="#" class="footer-links">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
