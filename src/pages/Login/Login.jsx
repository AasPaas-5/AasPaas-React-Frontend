import styles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const loginHandler = useGoogleLogin({
    onSuccess: (codeResponse) =>
      console.log({ token: codeResponse.access_token }),
  });

  return (
    <div className={styles.bg}>
      <div className={styles.login_image}>
        <img
          alt="yo"
          src="https://res.cloudinary.com/aaspaas/image/upload/v1666902714/Backgrounds/LoginPage_svg_eatprk.png"
        />
      </div>
      <div className={styles.google_login}>
        <button onClick={() => loginHandler()}>
          <img
            alt="yo"
            src="https://res.cloudinary.com/aaspaas/image/upload/v1667074689/Social/googleLogin_ugxmfp.png"
          />
          <span>Sign in with google</span>
        </button>
        <p>
          Having Trouble Signing in?
          <br />
          <a href="/users/contact">Contact us</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
