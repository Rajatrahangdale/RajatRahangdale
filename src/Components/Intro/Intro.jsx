import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Intagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Rajat Rahangdale</span>
          <span>
            Frontend Developer with high level of experiance in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Intagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img width={250} height={400} src={Boy} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floatng-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floatng-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
