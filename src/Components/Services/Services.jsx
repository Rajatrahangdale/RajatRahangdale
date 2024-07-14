import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glass from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Rajat Resume1.pdf";
import { motion } from "framer-motion";
const Services = () => {
  const transition = {
    duratio: 1,
    type: "spring",
  };
  return (
    <div className="services" id="Services">
      {/* left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          <br /> quam incidunt odit labore quod!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Designer"}
            details={"figma, sketch,photoshop, adobe, adobe xd "}
          />
        </motion.div>
        {/* Seonnd Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem " }}
        >
          <Card
            emoji={Glass}
            heading={"Developer"}
            details={"react, angular, vue, node.js, express.js "}
          />
        </motion.div>
        {/* Third Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Marketing"}
            details={"seo, social media, content marketing, email marketing "}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
