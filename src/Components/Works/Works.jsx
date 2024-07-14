import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'
const Works = () => {
  return (
    <div className="works">
        {/* Left side */}
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & clients</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          <br /> quam incidunt odit labore quod!
          <br /> quam incidunt odit labore quod!
          <br /> quam incidunt odit labore quod!
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
        <div className='w-right'>
            <motion.div 
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}

            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="upwork" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiver} alt="fiver" />
                </div>  
                <div className="w-secCircle">
                    <img src={Amazon} alt="amazon" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="shopify" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="facebook" />
                </div>
              
            </motion.div>
            {/* Background Cirlces */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
      
    </div>
  );
}

export default Works