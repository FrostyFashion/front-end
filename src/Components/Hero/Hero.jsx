import "./Hero.css";
import handIcon from "../../Assets/hand_icon.png";
import arrowIcon from "../../Assets/arrow.png";
import heroImage from "../../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2>All Your Needs @ frostyFashion</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="latest-btn">
          <div>latest collection</div>
          {/* <img src={arrowIcon} alt="arrow icon" /> */}
        </div>
      </div>
      <div className="right">
        <img src={heroImage} alt="hero image" />
      </div>
      <div className="custom-shape-divider-top-1701256467">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
