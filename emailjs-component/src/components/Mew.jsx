import { motion } from "framer-motion";
import mew from "../Assets/loader.gif";

const Mew = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={mew} alt="loading..." />
  </motion.div>
);

export default Mew;
