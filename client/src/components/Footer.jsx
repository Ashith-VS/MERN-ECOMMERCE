import React from "react";
import img1 from "../assets/images/payment/american_express.webp";
import img2 from "../assets/images/payment/maestro.webp";
import img3 from "../assets/images/payment/netbanking.webp";
import img4 from "../assets/images/payment/paypal.webp";
import img5 from "../assets/images/payment/rupay.webp";
import img6 from "../assets/images/payment/upi.webp";
import img7 from "../assets/images/payment/visa.webp";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-primary">
        <div className="row ">
          <div className="col-md-9 py-3 text-white">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-3 text-center text-white">
            <a title="Apple" href="/">
              <i className="bi bi-apple text-light me-3" />
            </a>
            <a title="Windows" href="/">
              <i className="bi bi-windows text-light me-3" />
            </a>
            <a title="Android" href="/">
              <i className="bi bi-android2 text-light me-3" />
            </a>
            |
            <a title="Twitter" href="/">
              <i className="bi bi-twitter-x text-light ms-3 me-3" />
            </a>
            <a title="Facebook" href="/">
              <i className="bi bi-facebook text-light me-3" />
            </a>
            <a title="Instagram" href="/">
              <i className="bi bi-instagram text-light me-3" />
            </a>
            <a title="Youtube" href="/">
              <i className="bi bi-youtube text-light me-3" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6">Company Name</div>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Products</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Electronics
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Mobiles
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Car &amp; bike
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Super Market
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Travel Cards
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Return Policy
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Terms Of Use
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Security
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  Privacy
                </a>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <a
                  className="text-decoration-none text-white stretched-link"
                  href="/"
                >
                  EPR Compliance
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              1355 Market St, Suite 900
              <br />
              San Francisco, CA 94103
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <div className="h6">Customer Care</div>
            <hr />
            <i className="bi bi-telephone" /> +1800 100 1000
            <br />
            <i className="bi bi-envelope" /> info@email.com
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-white text-center">
        <div className="row">
          <div className="col-md-2 py-2">
            <a className="text-white text-decoration-none" href="/">
              <i className="bi bi-briefcase text-warning" /> Partner with us
            </a>
          </div>
          <div className="col-md-2 py-2">
            <a className="text-white text-decoration-none" href="/">
              <i className="bi bi-badge-ad text-info" /> Advertise
            </a>
          </div>
          <div className="col-md-2 py-2">
            <a className="text-white text-decoration-none" href="/">
              <i className="bi bi-gift" /> Gift
            </a>
          </div>
          <div className="col-md-3 py-2">© 2024 React-E-Commerce.com</div>
          <div className="col-md-3 py-2 bg-white">
            <img
              src={img1}
              width={32}
              alt="American Express"
              className="me-2"
            />
            <img src={img2} width={32} alt="Maestro" className="me-2" />
            <img src={img3} width={32} alt="Net Banking" className="me-2" />
            <img src={img4} width={32} alt="Paypal" className="me-2" />
            <img src={img5} width={32} alt="Rupay" className="me-2" />
            <img src={img6} width={32} alt="UPI" className="me-2" />
            <img src={img7} width={32} alt="Visa" className="me-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
