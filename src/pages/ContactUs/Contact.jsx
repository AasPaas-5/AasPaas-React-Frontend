import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.question}>Have some Questions?</div>
      <div className={styles.socials}>
        Contact us on our socials:
        <a href="/">
          <img alt="mail" src="https://res.cloudinary.com/sairev/image/upload/v1665898373/SecondSwap/Files/Gmail_logo_lyszs9_durbqq.png" />
        </a>
        <a href="/">
          <img alt="instagram" src="https://res.cloudinary.com/sairev/image/upload/v1665898376/SecondSwap/Files/Instagram_gwi0aa_cxpxlj.png" />
        </a>
        <a href="/">
          <img alt="twitter" src="https://res.cloudinary.com/sairev/image/upload/v1665898378/SecondSwap/Files/Twitter_logo_zsveob_kbuyar.png" />
        </a>
      </div>
      <div className={styles.or}>OR</div>
      <div className={styles.inner_container}>
        <div className={styles.envelope}>
          <img alt="envelop" src="https://res.cloudinary.com/sairev/image/upload/v1665898373/SecondSwap/Files/Envelop_vk2qar_meq4re.png" />
        </div>
        <div className={styles.information}>
          <p>Directly ask us here</p>
          <form name="google-sheets">
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Name: "
              required
            />
            <br />
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Email: "
              required
            />
            <br />
            <input
              name="phone"
              type="number"
              id="phone"
              placeholder="Mobile Number: "
              required
            />
            <br />
            <input
              name="description"
              type="text"
              id="description"
              placeholder="Description : "
              required
            />
            <br />
            <button className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
