import { motion } from "framer-motion";
import "./ServiceCard.css";

const ServiceCard = ({ image, title, des, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="grid-cards"
    >
      <div className="img-background">
        <img className="grid-card-img" src={image} alt="" />
      </div>
      <h1>{title}</h1>
      <p>{des}</p>
    </motion.div>
  );
};

export default ServiceCard;
