// import Product from "../Product/Product";
import styles from "./ProductCover.module.css";
// import { useFetchProductsQuery } from "../../store";

function ProductCover({ amount }) {
  let products;

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const { data } = await axios.get(`/api/products?count=${amount}`);
  //   products = data.products.map((product) => {
  //     return <Product key={product._id} data={product} />;
  //   });
  // };

  // const { data, errror, isLoading } = useFetchProductsQuery();
  // console.log(data, errror, isLoading);

  return (
    <div className={styles.trending}>
      <div className={styles.head}>Recently added</div>
      <div className={styles.productCover}>{products}</div>
    </div>
  );
}

export default ProductCover;
