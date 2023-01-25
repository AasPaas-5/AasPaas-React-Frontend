import Navbar from "../Components/Navbar/Navbar";
import Category from "../Components/Category/Category";
import ProductCover from "../Components/ProductCover/ProductCover";
import Slider from "../Components/Slider/Slider";
import FooterL from "../Components/FooterL/FooterL";
import styles from "./Home.module.css";
import Tear from "../Components/TearDesign/Tear";

function Home() {
  return (
    <>
      <Navbar />
      <Category />
      <Slider />
      <div className={styles.holder}>
        <ProductCover amount={3} />
        <ProductCover amount={3} />
      </div>
      <Tear />
      <FooterL />
    </>
  );
}

export default Home;
