import { motion } from "framer-motion";
import Compass from "./Compass";
import { animationStart } from "./utils/animation";

const HeroText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px">
        <span className="flex items-center gap-10px">
          Get There <Compass /> Get Back
        </span>
      </div>
      <span className="-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight">
        tech-driven, affordable, and convenient ride sharing. Cutting-edge
        technology, low fares, and seamless booking. Your everyday hero for
        hassle-free commuting.
      </span>
    </motion.div>
  );
};

export default HeroText;
