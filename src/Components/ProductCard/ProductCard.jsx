import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ title, des, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="product-card down-card"
    >
      <h1>{title}</h1>
      <p>{des}</p>
    </motion.div>
  )
}
export default ProductCard