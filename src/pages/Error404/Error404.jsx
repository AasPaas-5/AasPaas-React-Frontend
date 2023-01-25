import styles from "./Error404.module.css";

function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.heading_one}>
        <p>404!</p>
      </div>
      <div className={styles.heading_two}>
        <p>Not Found</p>
      </div>
      <div className={styles.heading_three}>
        <p>The resource you requested could</p>
      </div>
      <div className={styles.heading_four}>
        <p>not be found on this page</p>
      </div>
      <div className={styles.imgClass}>
        <img src="https://res.cloudinary.com/sairev/image/upload/v1665898373/SecondSwap/Files/404_rjlhnr_rlmlaz.png" />
      </div>
    </div>
  );
}

export default Error404;
