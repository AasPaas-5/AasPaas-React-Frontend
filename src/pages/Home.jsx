import Navbar from "../Components/Navbar/Navbar";
import Category from "../Components/Category/Category";
import ProductCover from "../Components/ProductCover/ProductCover";
import Slider from "../Components/Slider/Slider";
import FooterL from "../Components/FooterL/FooterL";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <Category />
      <Slider />
      <div className={styles.holder}>
        <ProductCover header="Recently Added" count={3} />
        <ProductCover header="Trending Right Now" count={3} />
      </div>
      <div className={styles.topimage}>
        <div className={styles.freshers1}>
          <ProductCover header="Recently Added" count={7} />
          <ProductCover header="Other Deals" count={14} />
        </div>
      </div>
      <FooterL />
    </>
  );
}

export default Home;
