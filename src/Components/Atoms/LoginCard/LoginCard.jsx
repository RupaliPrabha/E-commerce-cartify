import React from "react";
import styles from './LoginCard.module.css'

function LoginCard({onSwitch}) {
  return (
    <div className={styles["login-card"]} >
      <form className={styles["login_form"]}>
        <div className={styles["login_form-wrapper"]}>
          <label className={styles["login_form__label"]} htmlFor="user-email">Enter Your Email :</label>
          <input
          className={styles["login_form__input"]}
            type="email"
            placeholder="enter here..."
            required
            id="user-email"
          />
          <label className={styles["login_form__label"]} htmlFor="user-password">Password :</label>
          <input className={styles["login_form__input"]} type="password" placeholder="password..." id="user-password" />
          <button className={styles["login-card__btn"]}>LogIn</button>
       
        </div>
      </form>
      <p className={styles["login-card_user"]}>
        Don't have an account? <span onClick={onSwitch} className={styles["login-card_newuser"]}>Register here</span>.
      </p>
    </div>
  );
}

export default LoginCard;
