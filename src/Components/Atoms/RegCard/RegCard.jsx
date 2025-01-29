import React from "react";
import styles from "./RegCard.module.css";

function RegCard({ onSwitch }) {
  return (
    <div className={styles["Reg-card"]}>
      <form className={styles["Reg_form"]}>
        <div className={styles["Reg_form-wrapper"]}>
          <label className={styles["Reg_form__label"]} htmlFor="user-email">
            Enter Your Email :
          </label>
          <input
            className={styles["Reg_form__input"]}
            type="email"
            placeholder="enter here..."
            required
            id="user-email"
          />
          <label
            className={styles["Reg_form__label"]}
            htmlFor="user-password"
          >
          Password :
          </label>
          <input
            className={styles["Reg_form__input"]}
            type="password"
            placeholder="password..."
            id="user-password"
          />
          <label
            className={styles["Reg_form__label"]}
            htmlFor="user-password"
          >
          Confirm Password :
          </label>
          <input
            className={styles["Reg_form__input"]}
            type="password"
            placeholder="password..."
            id="user-password"
          />
          <button className={styles["Reg-card__btn"]}>Reg</button>
        </div>
      </form>
      <p className={styles["Reg-card_user"]}>
        Already have an account?{" "}
        <span onClick={onSwitch} className={styles["Reg-card_newuser"]}>
          Login here
        </span>
        .
      </p>
    </div>
  );
}

export default RegCard;
