import { IoIosMailOpen } from "react-icons/io";
import { FaGithub, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

const Social = () => {
  return (
    <section className="social-section">
      <div className="social-hr-line"></div>
      <ul className="social-link-box">
        <li className="social-link-item">
          <Link to="mailto:dashswaraj02@gmail.com" target="_blank">
            <IoIosMailOpen className="social-icon MailFilled" />
          </Link>
        </li>
        <li className="social-link-item">
          <Link to="https://github.com/Swaraj-02" target="_blank">
            <FaGithub className="social-icon GithubFilled" />
          </Link>
        </li>

        <li className="social-link-item">
          <Link to="https://www.linkedin.com/in/swaraj-dash/" target="_blank">
            <FaLinkedinIn className="social-icon LinkedinFilled" />
          </Link>
        </li>
        <li className="social-link-item">
          <Link
            to="https://www.instagram.com/mr_.classy._02?igsh=dnF0Z3prbWZzbjlw"
            target="_blank"
          >
            <FaInstagram className="social-icon InstagramFilled" />
          </Link>
        </li>
        <li className="social-link-item">
          <Link
            to="https://www.youtube.com/channel/UCHzYCOgj8nBk7t2rlm05cjw"
            target="_blank"
          >
            <FaYoutube className="social-icon YoutubeFilled" />
          </Link>
        </li>
        <li className="social-link-item">
          <Link to="/" target="_blank">
            <FaFacebookF className="social-icon FacebookFilled" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Social;
