import { useEffect } from "react";
import styles from "./Product.module.css";

function Product({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={styles.product}>
      <img
        alt="Smart Watch"
        src="https://res.cloudinary.com/aaspaas/image/upload/w_183,h_178/q_auto:good/fl_any_format/v1667480467/AasPaas-Products/mzvuhrtlb3fyln2y8rzt.jpg"
      />
      <div className={styles.productContent}>
        <span className={styles.title}>Smart Watch</span>
        <span className={styles.price}>₹800</span>
      </div>
    </div>
  );
}

export default Product;
