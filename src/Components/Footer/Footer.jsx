import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    COMPANY NAME<span></span>
                  </h5>
                  <p>
                    Идея создания парфюмерной фабрики пришла еще в далеком 1995
                    году. На тот момент не было ни опыта, ни средств, ни полного
                    представления как это сделать. ..{" "}
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <Link to="/">Get Started</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/about">About us</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/delivery">Delivery</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/franchise">Franchise</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/product">Online-Shop</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/blog">Blog</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/contact">Contacts</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Get Started<span></span>
                  </h5>
                  <p>Get access to your full Training and Marketing Suite.</p>
                  <a className="btn" href="#." target="_blank">
                    Register Now
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p>
                    <a href="mailto:makers.ks@gmail.com" title="glorythemes">
                      makers.ks@gmail.com
                    </a>
                  </p>
                  <ul className="social-footer2">
                    <li className="">
                      <a
                        title="youtube"
                        target="_blank"
                        href="https://www.youtube.com/channel/UCGd7UBX4wOc3XnYMjXB312A"
                      >
                        <img
                          className="imgonlyforfuter"
                          alt="youtube"
                          width={30}
                          height={30}
                          src="https://avatars.mds.yandex.net/i?id=47e5fc0e10a37560d1f6bd1826fe97eb-5869158-images-thumbs&n=13&exp=1"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://www.facebook.com/makerswomen"
                        target="_blank"
                        title="Facebook"
                      >
                        <img
                          className="imgonlyforfuter"
                          alt="Facebook"
                          width={30}
                          height={30}
                          src="https://avatars.mds.yandex.net/i?id=46afd67a502fb85df794eb7ab3f2ef90-5677386-images-thumbs&n=13&exp=1"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://twitter.com/maersk"
                        target="_blank"
                        title="Twitter"
                      >
                        <img
                          className="imgonlyforfuter"
                          alt="Twitter"
                          width={30}
                          height={30}
                          src="https://avatars.mds.yandex.net/i?id=4174494f337f27457cb2558186303690-5342131-images-thumbs&n=13&exp=1"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        title="instagram"
                        target="_blank"
                        href="https://www.instagram.com/makerskg/"
                      >
                        <img
                          className="imgonlyforfuter"
                          alt="instagram"
                          width={30}
                          height={30}
                          src="https://avatars.mds.yandex.net/i?id=491c8371474d8768afe17d18efd3a970-5247648-images-thumbs&n=13&exp=1"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Company Name © 1995. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
