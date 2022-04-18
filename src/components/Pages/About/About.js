import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-3">About the Developer</h2>
      <hr />
      <div className="about-container">
        <div className="about-info">
          <h5>Hello there!</h5>
          <p>
            I am <h2>Mahir Al Kamal</h2>. I'm an ambitious programmer. I'm
            highly interested in web development and would like to pursue a
            career in the development field. I'm now studying React js. In the
            comming days, I'm planning to join the industry as a react developer
            because react is intriguing and popular among other js libraries.
          </p>
        </div>
        <img
          src="https://ouch-cdn2.icons8.com/_2uDJ10-ae2PpZyzobx2YJpqI5v-4c7IOzqWa9paqMQ/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAx/L2Y1ZWI5ZGEwLTM3/ZWMtNDUxYy1iODNl/LTVjMzc1NGU5NjQx/NC5zdmc.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
