import ProductCover from "../ProductCover/ProductCover";
import styles from "./Tear.module.css";

function Tear() {
  return (
    <div className={styles.topimage}>
      <div className={styles.freshers1}>
        <ProductCover amount={7} />
        <ProductCover amount={14} />
      </div>
    </div>
  );
}

export default Tear;
