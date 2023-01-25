import Product from "../Product/Product";
import styles from "./ProductCover.module.css";

function ProductCover({ amount }) {
  const products = [];
  for (let i = 0; i < amount; i++) {
    products.push(<Product key={i} />);
  }

  return (
    <div className={styles.trending}>
      <div className={styles.head}>Recently added</div>
      <div className={styles.productCover}>{products}</div>
    </div>
  );
}

export default ProductCover;
