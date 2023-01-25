import styles from "./Category.module.css";
import Electronics from "../../assets/Categories/Electronics.webp";
import Miscellaneous from "../../assets/Categories/Miscellaneous.webp";
import Mobile_Phones from "../../assets/Categories/Mobile_Phones.webp";
import Stationary from "../../assets/Categories/Stationary.webp";
import Appliances from "../../assets/Categories/Appliances.webp";
import Books_and_Notes from "../../assets/Categories/Books_and_Notes.webp";
import Cycles from "../../assets/Categories/Cycles.webp";

function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img alt="Electronics" src={Electronics} className={styles.img2} />
        <span className={styles.text}>Electronics</span>
      </div>
      <div className={styles.cover}>
        <img alt="Stationary" src={Stationary} className={styles.img2} />
        <span className={styles.text}>Stationary</span>
      </div>
      <div className={styles.cover}>
        <img alt="Mobile Phones" src={Mobile_Phones} className={styles.img2} />
        <span className={styles.text}>Mobile Phones</span>
      </div>
      <div className={styles.cover}>
        <img alt="Cycles" src={Cycles} className={styles.img2} />
        <span className={styles.text}>Cycles</span>
      </div>
      <div className={styles.cover}>
        <img alt="Appliances" src={Appliances} className={styles.img2} />
        <span className={styles.text}>Appliances</span>
      </div>
      <div className={styles.cover}>
        <img
          alt="Books & Notes"
          src={Books_and_Notes}
          className={styles.img2}
        />
        <span className={styles.text}>Books & Notes</span>
      </div>
      <div className={styles.cover}>
        <img alt="Miscellaneous" src={Miscellaneous} className={styles.img2} />
        <span className={styles.text}>Miscellaneous</span>
      </div>
    </div>
  );
}

export default Category;
